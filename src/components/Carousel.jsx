import { React, useState } from 'react'
import './Items/item.css'
import { Carousel } from 'react-bootstrap'
import FirstSlide from '../imagenes/orquideamultiflora.jpg'
import SecondSlide from '../imagenes/ficuslyrata.jpg'
import ThirdSlide from '../imagenes/calatheaorbifolia.jpg'


function ControlledCarousel() {
  const [index, setIndex] = useState(2);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
    <img
      className="w-60"
      src={FirstSlide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="carouselTitle">Orquídea Multiflora Morada</h3>
      <p className="carouselText">¡Ideal si lo que buscas son muchas flores en una misma planta!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-60"
      src={SecondSlide}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="carouselTitle">Ficus Lyrata</h3>
      <p className="carouselText">Sin duda, las hojas son su gran atractivo.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-60"
      src={ThirdSlide}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="carouselTitle">Calathea Orbifolia</h3>
      <p className="carouselText">¡Su estampado en todos verdes te asombrarán!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default ControlledCarousel