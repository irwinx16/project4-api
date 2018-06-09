import React, {Component } from 'react';
import './style.css';
import { Navbar,
         Nav,
         NavItem,
       } from 'react-bootstrap';


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
            <b>Stock:</b> {product.total > 0 ? "Yes" : "No"}
            <b>Total:</b> {product.total}
            <button onClick={this.props.deleteProduct.bind(null, product.id)}>Delete Product</button>
          </li>
        </div>
      )
    })

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Inventory Tracker</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={this.props.showAddProduct} href="#">
                Add a New Product
              </NavItem>
              <NavItem eventKey={2} disable>
                Out of Stock
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem onClick={this.props.logout} href="#">
                Logout
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
 
      {productList}

      </div>
    )
  }

}

export default ProductList;
