import React, { Component } from 'react';
import './style.css';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      total: ''
    }
    console.log(this.props, "this.props in EditProduct in constructor")
  }

  componentDidMount() {
    // find product in the array of products in props that has the same ID
    // as     this.props.productId
    const producToEdit = this.props.products.find((productEdit) => {
      if (productEdit.id == this.props.productId) {
        return true
      } else {
        return false
      }
    })

    // load appropriate data into state
    this.setState({
      name: producToEdit.name,
      price: producToEdit.price,
      total: producToEdit.total
    })


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
    this.props.editProduct(this.state.name,this.state.price,
      this.state.total)

    // close the modal
    this.props.hideEditProduct();
  }

  render() {
    console.log(this.state, "state in EditProduct")
    console.log(this.props, "props in EditProduct in render")

    return(

      <div>
      <h1>This is Edit Product Page</h1>

        <button onClick={this.props.hideEditProduct}>Close</button>
        <form onSubmit={this.handleSubmit}>
          Edit Product: <br/>
          <input type="text" name="name" placeholder="Product Name" value={this.state.name} onChange={this.editName} /> <br/>
          <input type="text" name="price" placeholder="Product Price" value={this.state.price} onChange={this.editPrice} /> <br/>
          <input type="text" name="total" placeholder="Total" value={this.state.total} onChange={this.editTotal} /> <br/>
          <input type="submit" value="Edit Product"/>
        </form>

      </div>
      )
  }
}

export default EditProduct;
