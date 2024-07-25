import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../Images/logo.png';

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
          const handleOrderButton=()=>{
            navigate('/MenuItem')
          }  
          const handleHome=()=>{
            navigate('/home')
          }  
  return (
    <>
      <Navbar bg='danger' variant='dark' fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: "Bebas Neue",fontWeight:'bolder',fontSize:'22px'}}>FOOD HAVEN</Navbar.Brand>
          {/* <img src={logo} alt="Logo" style={{ height: '40px', marginLeft: '10px' }}/> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={handleHome}>Home</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={handleAdminClick}>Admin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button 
            onClick={handleOrderButton}
            variant="outline" href="#my-order" style={{fontFamily:'bold',fontWeight:'bolder',color:'white',border:'2px solid white'}}>My Order</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
