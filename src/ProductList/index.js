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
    // console.log(this.props.products,  "this is this.props.products in ProductList");
    const productList = this.props.products.map((product, i) => {
      // console.log(productList, "product list")
      return (
        <div key={i} id={product.id}>
        <li>
          <b>Name:</b><span onClick={this.props.showProductInformation}> {product.name}</span>
          <b>Price:</b> {product.price}
          <b>Stock:</b> {product.stock ? "Yes" : "No"}
          <b>Total:</b> {product.total}
        </li>
        </div>
      )
    })

    return (
      <div>
      <button onClick={this.props.showAddProduct}>Add New Product</button>
      {productList}

      </div>
    )
  }

}

export default ProductList;
