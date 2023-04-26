import { Container,Col,Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import security from "../assets/security.jpg";
import mobile2 from "../assets/mobile2.jpg";
import designs from "../assets/designs.jpg";
import dev from "../assets/dev.jpg";
import bg2 from "../assets/bg2.jpg";
import 'react-multi-carousel/lib/styles.css';


export const Skills = ()=> {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Our Services
                        </h2>
                        <p>
                        This is gishmaf global company, we offer all types of tech services including consultancy,contact us for more info @gishmafglobalcompany@gmail.com
                        </p>
                        <carousel responsive ={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={dev} alt='image'/>
                                 <h5>Web Developement</h5>
                            </div>

                            <div className='item'>
                                <img src={designs} alt='image'/>
                                 <h5>Web & mobile Designs</h5>
                            </div>

                            <div className='item'>
                                <img src={security} alt='image'/>
                                 <h5>Security & Data Analysis</h5>
                            </div>

                            <div className='item'>
                                <img src={mobile2} alt='image'/>
                                 <h5>Mobile Development</h5>
                            </div>
                        </carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='backgroung-image-left' src={bg2} />
        </section>
      )
}
