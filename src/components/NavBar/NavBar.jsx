import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import LogoPlantasia from '../../imagenes/plantasialogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    return (      
<Navbar bg="#FFFFFF" expand="lg" variant="light">
<Container>
   <img src={LogoPlantasia} alt='planta' style={{width:'14%'}}></img>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:"1em"}}>
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#home">Inspiración</Nav.Link>
      <Nav.Link href="#link">Cuidados</Nav.Link>
      <NavDropdown title="Plantas" id="basic-nav-dropdown">
        <NavDropdown.Item href="category/interior">Plantas de interior</NavDropdown.Item>
        <NavDropdown.Item href="category/exterior">Plantas de exterior</NavDropdown.Item>
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


