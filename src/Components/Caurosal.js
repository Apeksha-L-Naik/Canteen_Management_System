import React from 'react'
import { Carousel } from 'react-bootstrap';
import food1 from '../Images/food1.jpg'
import food2 from '../Images/food2.jpeg'
import food3 from '../Images/food3.jpg'

function Caurosal() {
  return (
    <>
    <Carousel interval={1000}>  {/* Change the interval to 3000 milliseconds (3 seconds) */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={food1}
          alt="First slide"
          height={400}
          width={1000}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={food2}
          alt="Second slide"
          height={400}
          width={1000}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={food3}
          alt="Third slide"
          height={400}
          width={1000}
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Caurosal