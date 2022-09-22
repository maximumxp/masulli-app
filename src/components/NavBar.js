import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          Zero Mission Games
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#consolas">Consolas</Nav.Link>
          <Nav.Link href="#videojuegos">Videojuegos</Nav.Link>
          <Nav.Link href="#accesorios">Accesorios</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;