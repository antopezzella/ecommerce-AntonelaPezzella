import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import LogoPlanta from '../../imagenes/maceta.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    return (      
<Navbar bg="light" expand="lg" variant="light">
<Container>
  <Navbar.Brand href="#home"> <img src={LogoPlanta} alt='planta'></img> Plantasia</Navbar.Brand>
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


