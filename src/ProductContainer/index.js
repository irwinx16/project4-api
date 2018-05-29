import React, { Component } from 'react';
import ProductList from '../ProductList'
import AddProduct from '../AddProduct';


class ProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showAddWindow: false
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
    this.setStare({showAddWindow: false});
  }
  AddNewProduct = async (product, e) => {
    e.preventDefault();
    const productsJson = await fetch('http://localhost:9292/product', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(product)
    });
    const productsParsed = await productsJson.json();
    this.setState({
      products: [...this.state.products, productsParsed.new_product]
    })
  }

  render() {
    console.log(this.props, 'this is the products list in product container');
    return (
      <div>
        <h1>This is the product list</h1>
        <ProductList products={this.state.products} showAddProduct={this.showAddProduct}/>
        <AddProduct addNewProduct={this.AddNewProduct} hideAddProduct={this.hideAddProduct} showAddWindow={this.state.showAddWindow}/>

      </div>
    )
  }

}

export default ProductContainer;
