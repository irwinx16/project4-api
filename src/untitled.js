      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Project 4</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={showHireEmployeeModal}>
              Add New Product
            </NavItem>
            <NavItem onClick={showWorkingEmployees}>
              Out of Stock Product
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={doLogout}>
              Log Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
