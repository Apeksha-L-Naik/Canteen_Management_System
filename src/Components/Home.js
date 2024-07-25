import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function Home() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/MenuItem');
  };

  return (
    <div className="App">
      <NavBar />
      <style jsx="true">{`
        .main-section {
          background-image: url('https://img.freepik.com/premium-photo/full-size-delicious-italian-pizza_951419-163.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
          position: relative;
          color: white;
        }

        .overlay-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .larger-text {
          font-size: 2rem; /* Adjust as needed */
          color: white;

        }

        .largest-text {
          font-size: 3rem; /* Adjust as needed */
          font-family: 'Cursive'; /* Cursive font */
          color: yellow; /* Yellow color */



        }

        .gradient-text {
          font-family: 'Cursive'; /* Cursive font */

        }
      `}</style>
      <Container fluid className="main-section text-center text-black d-flex align-items-center justify-content-center">
        <div className="overlay-content">
        <h1 className="largest-text gradient-text" style={{fontWeight:'bolder'}}>HEAVEN'S FOOD</h1>
          <h2 className="larger-text">Eat Tasty Dish Everyday</h2>
          <h2 className="larger-text">Share Your Love About Food</h2>
          <Button
            style={{ backgroundColor: "#ffc107", borderColor: "#ffc107" }}
            className="mt-3 btn-large bordered-btn"
            onClick={handleOrderClick}
          >
            Order Online
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;