import React, { Component } from 'react';
import './style.css';

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      total: ''
    }
  }
  addName = (e) => {
    const name = e.currentTarget.value;
    this.setState({
      name: name
    });
  }
  addPrice = (e) => {
    const price = e.currentTarget.value;
    this.setState({
      price: price
    });
  }
  addTotal = (e) => {
    const total = e.currentTarget.value;
    this.setState({
      total: total
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // add to database
    this.props.addNewProduct({
      name: this.state.name,
      price: this.state.price,
      total: this.state.total
    })

    // close the modal
    this.props.hideAddProduct();
  }

  render() {
    console.log(this.state, "state in addProduct");

    return(
      <div>
        <button onClick={this.props.hideAddProduct}>Close</button>
        <form onSubmit={this.handleSubmit}>
          New Product: <br/>
          <input type="text" name="name" placeholder="Product Name" value={this.state.name} onChange={this.addName} /> <br/>
          <input type="text" name="price" placeholder="Product Price" value={this.state.price} onChange={this.addPrice} /> <br/>
          <input type="text" name="total" placeholder="Total" value={this.state.total} onChange={this.addTotal} /> <br/>
          <input type="submit" value="Add New Product"/>
        </form>

      </div>
      )
  }
}

export default AddProduct;
