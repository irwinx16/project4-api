import React, { Component } from 'react';
import './style.css';

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      total:''
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


  render() {
    const showAddWindow = this.props.showAddWindow ?
    'show' : 'hide';
    return(
      <div className={showAddWindow}>
        <button onClick={this.props.hideAddProduct}>Close</button>
        <form onSubmit={this.props.AddNewProduct.bind(null, this.state)}>
          New Product: <br/>
          <input type="text" name="name" placeholder="Product Name" onChange={this.addName} /> <br/>
          <input type="text" name="price" placeholder="Product Price" onChange={this.addPrice} /> <br/>
          <input type="text" name="total" placeholder="Total" onChange={this.addTotal} /> <br/>
          <button onClick={this.props.hideAddProduct}>Add Product</button>
        </form>

      </div>
      )
  }
}

export default AddProduct;
