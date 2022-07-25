import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">The FakeStore</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Productos</Nav.Link>
                  <Nav.Link href="#pricing">Nosotros</Nav.Link>
                  <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Categoria 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Iniciar sesion</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Registrate
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header