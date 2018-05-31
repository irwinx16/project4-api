import React, { Component } from 'react';
import './style.css';

class EditProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      total: ''
    }
  }
  editName = (e) => {
    const name = e.currentTarget.value;
    this.setState({
      name: name
    });
  }
  editPrice = (e) => {
    const price = e.currentTarget.value;
    this.setState({
      price: price
    });
  }
  editTotal = (e) => {
    const total = e.currentTarget.value;
    this.setState({
      total: total
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // add to database
    // this.props.addNewProduct({
    //   name: this.state.name,
    //   price: this.state.price,
    //   total: this.state.total
    // })

    // close the modal
    // this.props.hideAddProduct();
  }

  render() {

    const editCurrentProduct = this.props.products.filter(product => product.id == this.props.productId);
    let productToEdit = editCurrentProduct[0];

      if (!productToEdit) {
        productToEdit = {};

      this.setState({
        name: `${productToEdit.name}`,
        price: `${productToEdit.price}`,
        total: `${productToEdit.total}`
      })
    }
    // if showProduct is false
    // if (!showProduct) {
      // show product equal an object because it need to be a object to check properties, and as an object, now react can read the object and does not error.
      // showProduct = {};
    // console.log(this.state, "state in addProduct");

    return(
        // <button onClick={this.props.hideAddProduct}>Close</button>
        // <form onSubmit={this.handleSubmit}>
        //   New Product: <br/>
        //   <input type="text" name="name" placeholder="Product Name" value={this.state.name} onChange={this.addName} /> <br/>
        //   <input type="text" name="price" placeholder="Product Price" value={this.state.price} onChange={this.addPrice} /> <br/>
        //   <input type="text" name="total" placeholder="Total" value={this.state.total} onChange={this.addTotal} /> <br/>
        //   <input type="submit" value="Add New Product"/>
        // </form>
      <div>
      <h1>This is Edit Product Page</h1>

        <button onClick={this.props.hideAddProduct}>Close</button>
        <form >
          Edit Product: <br/>
          <input type="text" name="name" placeholder="Product Name" value={this.state.name} /> <br/>
          <input type="text" name="price" placeholder="Product Price" value={this.state.price} /> <br/>
          <input type="text" name="total" placeholder="Total" value={this.state.total} /> <br/>
          <input type="submit" value="Edit Product"/>
        </form>

      </div>
      )
  }
}

export default EditProduct;
