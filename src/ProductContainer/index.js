import React, { Component } from 'react';
import ProductList from '../ProductList'
import AddProduct from '../AddProduct';
import ProductInformation from '../ProductInformation';
import EditProduct from '../EditProduct';


class ProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showAddWindow: false,
      showProductInformation: false,
      productId: '',
      showEditProduct: false
     }
  }

  componentDidMount() {
    this.setState({
      products: []
    })
    this.getProducts();
  }

  getProducts = async () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const responseObject = await fetch('http://localhost:9292/product', {
      credentials: 'include'
    });
    console.log(responseObject)

    const parsedResponsePromise = await responseObject.json();
    console.log(parsedResponsePromise);
    this.setState({ products: parsedResponsePromise.products })
    console.log(this.state)
  }

  showAddProduct = () => {
    this.setState({showAddWindow: true});
  }
  hideAddProduct = () => {
    this.setState({showAddWindow: false});
  }

  addNewProduct = async (product) => {

    const productsJson = await fetch('http://localhost:9292/product', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(product)
    });
    const productsParsed = await productsJson.json();
    console.log(productsParsed);
    this.setState({
      products: [...this.state.products, productsParsed.new_product]
    })
  }

  showProductInformation = (e) => {
    // grabs id from the div containing the product we clicked on
    const id = e.currentTarget.parentNode.parentNode.id;

    // show product info window
    // add productId to state so that ProductInformation will know what product it's showing info for
    this.setState({
      showProductInformation: true,
      productId: id
    });
  }

  hideProductInformation = () => {
    this.setState({showProductInformation: false});
  }

  // show the product editing modal
  showEditProduct = () => {
    this.setState({
      showEditProduct: true
    })
  }
  hideEditProduct = () => {
    this.setState({showEditProduct: false})
  }

  //editProduct --
  editProduct = async (name, price, total) => {

    // find/grab the right product in the array based on this.state.productId
    // productIndex is the index of the array in state that contains the object we want to update
    const productIndex = this.state.products.findIndex((prod) => {
      if (prod.id == this.state.productId) {
        return true
      } else {
        return false
      }
    })
    //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    // once the promise returned by our fetch AJAX request is resolved,
    // we have the value which is a Response object
    const responseObject = await fetch('http://localhost:9292/product/' + this.state.productId, {
      // credentials: 'include',
      method: 'PUT',
      body: JSON.stringify({ //THIS IS PAYLOAD ON THE SERVER SIDE (similar to req.body in Express)
        name: name,
        price: price,
        total: total
      })
    })
    // .json returns a promise
    // once we "await" that promise, meaning
    // once it resolves (meaning we hav access to its value)
    // then we have the actual JSON from the API -- THE UPDATED PRODUCT FROM DB
    const dataJson = await responseObject.json();
    // console.log(dataJson, "dataJson in editProduct in ProductContainer ");

    //update that product to have the values in prodObj
    // (using setState)

    const state = this.state

    // update the product at productIndex with the new data
    state.products[productIndex] = dataJson.updated_product;

    this.setState(state)

  }

  deleteProduct = async (id) => {


  console.log(id, ' this is id ')
  const products = await fetch ('http://localhost:9292/product/' + id, {
    credentials: 'include',
    method: 'DELETE'
    });
    this.setState({
    products: this.state.products.filter((product) => product.id != id)
    });
  }

  render() {
    // console.log(this.props, 'this is the products list in product container');
    return (
      <div>
        <ProductList products={this.state.products} showAddProduct={this.showAddProduct} showProductInformation={this.showProductInformation} deleteProduct={this.deleteProduct} logout={this.props.doLogout}/>

        { this.state.showProductInformation ? <ProductInformation products={this.state.products} hideProductInformation={this.hideProductInformation} productId={this.state.productId} showEditProduct={this.showEditProduct}/> : null }

        { this.state.showAddWindow ? <AddProduct addNewProduct={this.addNewProduct} hideAddProduct={this.hideAddProduct}/> : null }
        { this.state.showEditProduct ? <EditProduct products={this.state.products} productId={this.state.productId} hideEditProduct={this.hideEditProduct} editProduct={this.editProduct} /> : null }


      </div>
    )
  }

}

export default ProductContainer;
