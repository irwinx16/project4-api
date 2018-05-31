import React, { Component } from 'react';
// import EditProduct from '../EditProduct';
import './style.css';

//consider making this a dumb/functional component
const ProductInformation = (props) => {





  // productId we are showing is in props (this.props.product)
  // console.log(props, "props in ProductInformation")

  // find the product object whose id matches the id in props
  const product = props.products.find((prod) => {
    if (prod.id == props.productId ){
      return true
    } else {
      return false
    }
  })

  // console.log(product)

  return(
    <div>
      <h1>Product Information</h1>
      <button onClick={props.hideProductInformation}>Close</button>
      <li>
        <b>Name:</b> {product.name} <br/>
        <b>Price:</b> {product.price} <br/>
        <b>Stock:</b> {product.stock ? "Yes" : "No"} <br/>
        <b>Total:</b> {product.total} <br/>
      </li>
      <button onClick={props.showEditProduct}>Edit Product</button>
    </div>
  )
}

export default ProductInformation;
