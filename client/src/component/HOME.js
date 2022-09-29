import React from 'react'
import {Carousel} from 'react-bootstrap';


const CarouselHomeee = () => {
  return (
    <div>
    
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vecteurs-libre/superposition-neige-blanche-tombante-realiste-fond-transparent-couche-tempete-flocons-neige_90220-542.jpg?w=740&t=st=1663939245~exp=1663939845~hmac=32daeb3552c45f7c902b2f446dce4e1ac5ab6e72f41e766e2db852aece1b8382"
          alt="First slide"
          style={{height:"400px"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vecteurs-libre/superposition-neige-blanche-tombante-realiste-fond-transparent-couche-tempete-flocons-neige_90220-542.jpg?w=740&t=st=1663939245~exp=1663939845~hmac=32daeb3552c45f7c902b2f446dce4e1ac5ab6e72f41e766e2db852aece1b8382"
          alt="Second slide"
          style={{height:"400px"}}
          
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vecteurs-libre/superposition-neige-blanche-tombante-realiste-fond-transparent-couche-tempete-flocons-neige_90220-542.jpg?w=740&t=st=1663939245~exp=1663939845~hmac=32daeb3552c45f7c902b2f446dce4e1ac5ab6e72f41e766e2db852aece1b8382"
          alt="Third slide"
          style={{height:"400px"}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselHomeee