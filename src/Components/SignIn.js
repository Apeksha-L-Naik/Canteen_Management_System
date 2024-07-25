import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import NavBar from './NavBar';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/signin', { username, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Sign-in successful!');
    } catch (err) {
      setMessage('Sign-in failed: ' + (err.response?.data?.message || err.message));
    }
  };

  // Inline styles
  const backgroundStyle = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url(https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Centers the container
    width: '100%',
    maxWidth: '500px', // Set a max width for the form container
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  };

  const formContainerStyle = {
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="App">
      <NavBar/>
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <Container style={formContainerStyle}>
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Sign In</h2>
          {message && <Alert variant="info">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="signup-link">
            Don't have an account? <Link to="/SignUp">Sign Up</Link>
          </div>
            <Button variant="danger" type="submit" className="mt-4" style={{ width: '100px', display: 'block', margin: '0 auto' }}>
            <Link to="/Home" style={{color:'white',textDecoration:'None',fontWeight:'bold'}}>Sign In</Link>
            </Button>
          </Form>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
