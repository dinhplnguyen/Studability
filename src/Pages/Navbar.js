import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="timer">Timer</Nav.Link>
            <Nav.Link href="app">App</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;