import React, { Component } from 'react';
import ProductList from '../ProductList'


class ProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
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

  render() {
    console.log(this.props, 'this is the products list in product container');
    return (
      <div>
        <h1>This is the product list</h1>
        <ProductList products={this.state.products}/>

      </div>
    )
  }

}

export default ProductContainer;
