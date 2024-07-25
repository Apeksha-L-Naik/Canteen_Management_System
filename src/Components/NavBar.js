import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
        const navigate = useNavigate();

        const handleAdminClick = () => {
            navigate('/adminlogin'); // Navigate to the MenuItem page
          }; 
          const handleLogout = () => {
            // Perform any logout actions (e.g., clear session, etc.)
            // Redirect to the login form
            navigate('/');
          };     
  return (
    <>
      <Navbar bg='danger' variant='dark' fixed="top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={handleAdminClick}>Admin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-primary" href="#my-order">My Order</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
