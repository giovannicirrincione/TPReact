import { Carousel } from "react-bootstrap";

const CarouselHome = () =>{
    return(
        
        <Carousel>
            <Carousel.Item>
                    <img
                    className='d-block w-100'
                    style={{maxHeight:"500px",objectFit:'cover'}}
                    src="src/assets/Imagenes/img1.jpg" alt="img1"/>
             <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    className='d-block w-100'
                    style={{maxHeight:"500px",objectFit:'cover'}}
                    src="src/assets/Imagenes/img2.jpg" alt="img2"/>
             <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                     <img
                    className='d-block w-100'
                    style={{maxHeight:"500px",objectFit:'cover'}}
                    src="src/assets/Imagenes/img3.jpg" alt="img3"/>
             <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
             </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    )
}
export default CarouselHome;