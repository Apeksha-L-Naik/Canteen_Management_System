import React from 'react';
import { Form,Button, Container, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

const FeedBack = () => {
  const styles = {
    container: {
      backgroundImage: 'url("https://www.shutterstock.com/image-photo/customer-experience-concept-food-restaurant-260nw-1843328998.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff ',
     
     
    },
    formWrapper: {
      
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.7)',
      width:'100%',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    formHeader: {
      marginBottom: '20px',
      textAlign: 'center',
      fontFamily: 'cursive',
    },
    formGroup: {
      marginBottom: '15px',
      width:'300px',
      
    },
    formControl: {
      width: '300px',
      margin: '0 auto',
    },
    button: {
      width: '50%',
      alignItems:'center',
      backgroundColor: '#ff6666',  
      borderColor: '#ff6666',  
    }
  };

  return (
    <>
    <NavBar/>
    <div style={styles.container}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div style={styles.formWrapper}>
              <h2 style={styles.formHeader}>Canteen Feedback Form</h2>
              <Form>
                <Form.Group controlId="formName" style={styles.formGroup}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" style={styles.formControl} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" style={styles.formGroup}>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formService" style={styles.formGroup}>
                  <Form.Label>Service Rating</Form.Label>
                  <Form.Control as="select">
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formFeedback" style={styles.formGroup}>
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your feedback" />
                </Form.Group>

                <Button type="submit" style={styles.button}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
  
  
export default FeedBack;