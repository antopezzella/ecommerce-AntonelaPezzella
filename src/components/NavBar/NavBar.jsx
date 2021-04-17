import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
//import Logo from '../../favicon.icon'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    return (      
<Navbar bg="dark" expand="lg" variant="dark">
<Container>
  <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
  {/* <img src={Logo} alt='img'></img> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link eventKey={2}>
      <CartWidget/>
    </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar


