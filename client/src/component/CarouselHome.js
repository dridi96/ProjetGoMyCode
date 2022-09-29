import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <div>

    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/image17.jpg"
          alt="First slide"
          style={{height:"600px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/image16.jpg"
          alt="Second slide"
          style={{height:"600px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image14a.jpg"
          alt="Third slide"
          style={{height:"600px"}}
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CarouselHome