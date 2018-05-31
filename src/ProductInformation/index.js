import React, { Component } from 'react';
// import EditProduct from '../EditProduct';
import './style.css';

class ProductInformation extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //

  //   }
  // }





  render() {

    const productId = this.props.products.filter(product => product.id == this.props.productId);
    let showProduct = productId[0];
    // if showProduct is false
    if (!showProduct) {
      // show product equal an object because it need to be a object to check properties, and as an object, now react can read the object and does not error.
      showProduct = {};
    }
    console.log(showProduct.name);


    return(
      <div>
        <h1>Product Information</h1>
        <button onClick={this.props.hideProductInformation}>Close</button>
        <li>
          <b>Name:</b> {showProduct.name} <br/>
          <b>Price:</b> {showProduct.price} <br/>
          <b>Stock:</b> {showProduct.stock ? "Yes" : "No"} <br/>
          <b>Total:</b> {showProduct.total} <br/>
        </li>
        <button onClick={this.props.showEditProduct}>Edit Product</button>
      </div>
      )
  }
}

export default ProductInformation;
