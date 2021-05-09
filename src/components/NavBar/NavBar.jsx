import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav, Container} from 'react-bootstrap'
import LogoPlantasia from '../../imagenes/plantasialogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

    return (      
<Navbar bg="#FFFFFF" expand="lg" variant="light">
<Container>
   <img src={LogoPlantasia} alt='planta' style={{width:'14%'}}></img>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:"2em", fontFamily: "Open Sans"}}>
    <NavLink to="/index.js" style={{color: 'grey', marginRight:'2em'}}>Home</NavLink>
    <NavLink to="/category/interior" style={{color: 'grey', marginRight:'2em'}}>Plantas de interior</NavLink>
    <NavLink to="/category/exterior" style={{color: 'grey', marginRight:'2em'}}>Plantas de exterior</NavLink>
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




