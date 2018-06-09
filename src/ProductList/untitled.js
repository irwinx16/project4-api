<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Inventory Tracker</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem OnClick={this.props.showAddProduct} href="#">
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
</Navbar>;
