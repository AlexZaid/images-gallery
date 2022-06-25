import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap';

const navbarStyle={
    backgroundColor: 'black'

};

const Header = ({title}) => {
    return (
        <Navbar style={navbarStyle}  variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">{title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;

