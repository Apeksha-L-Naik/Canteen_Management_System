import { useNavigate,Link } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar'


function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Handle login logic here
    // For demo purposes, navigate to the home page on submit
    navigate('/adminpage');
  };
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
    width:'100%',
  };

  return (
  
   <>
    <NavBar/>
    <div style={backgroundStyle}>
    <div style={contentStyle}>
    <section style={formContainerStyle} >
      <h1  className="mb-4" style={{ textAlign: 'center' }}>Admin</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control className="control"  type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="control" type="password" placeholder="Password" />
        </Form.Group>
        {/* <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div> */}
          <Button variant="danger" type="submit" className="mt-4" style={{ width: '100px', display: 'block', margin: '0 auto' }}>
            <Link to="/Home" style={{color:'white',textDecoration:'None',fontWeight:'bold'}}>Sign In</Link>
            </Button>

      </Form>
    </section>
    </div>
    </div>
    </>
  );
}

export default AdminLogin;