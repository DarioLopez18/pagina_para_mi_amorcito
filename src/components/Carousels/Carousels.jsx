import Carousel from 'react-bootstrap/Carousel';
import CaroulselImg from '../CaroulselImg/CaroulselImg';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponents() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CaroulselImg img={"./FOTO1.png"} alt={"Foto nuestra junto número 1"} text="" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CaroulselImg img={"./FOTO2.png"} alt={"Foto nuestra"} text="" />
      </Carousel.Item>
      <Carousel.Item>
        <CaroulselImg img={"./FOTO3.png"} alt={"Foto nuestra en pandemia"} text=""/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponents;