import React, { Component }  from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Zero Mission Games
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/category/Shooter'>Shooter</Nav.Link>
          <Nav.Link as={Link} to='/category/Aventura'>Aventura</Nav.Link>
          <Nav.Link as={Link} to='/category/Board Game'>Board Game</Nav.Link>
          <Nav.Link as={Link} to='/category/Deportes'>Deportes</Nav.Link>
          <Nav.Link as={Link} to='/category/Pelea'>Pelea</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;