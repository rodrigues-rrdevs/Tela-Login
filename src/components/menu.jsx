import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

const menu = () => {
    return (
        <div>              
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">CCS Tecno</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Portfólio</Nav.Link>
                <Nav.Link href="#pricing">Clientes</Nav.Link>
                <NavDropdown title="Sócios" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Sócio 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Sócio 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Sócio 3</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>

    )
    
}

export default menu