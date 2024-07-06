import { useNavigate,Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';


function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Handle login logic here
    // For demo purposes, navigate to the home page on submit
    navigate('/home');
  };

  return (
  
   <>
    <NavBar/>
    <section className="form-container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control className="control"  type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="control" type="password" placeholder="Password" />
        </Form.Group>
        <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        <button  type="submit" className='button-style'>
          Submit
        </button>
      </Form>
    </section>
    </>
  );
}

export default LoginForm;