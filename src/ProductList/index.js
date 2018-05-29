import React, {Component } from 'react';
import './style.css';


class ProductList extends Component {
  // constructor () {
  //   super();

  //   this.state = {
  //     products: []
  //   }
  // }

  render() {
    console.log(this.props.products,  "this is this.props.products in ProductList");
  const productList = this.props.products.map((product, i) => {
    return (
      <li key={i}>
        <b>Name:</b> {product.name}
        <b>Price:</b> {product.price}
        <b>Stock:</b> {product.stock}
        <b>Total:</b> {product.total}
      </li>
    )
  })

    return (
      <div>
      {productList}

      </div>
    )
  }

}

export default ProductList;
