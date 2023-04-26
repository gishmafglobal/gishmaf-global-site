import {Col,Container, Tab,Row,Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bg2 from "../assets/bg2.jpg";
import mobile2  from "../assets/mobile2.jpg";
import projImg2  from "../assets/projImg2.jpg";
import projImg3  from "../assets/projImg3.jpg";
import designs  from "../assets/designs.jpg";
import security  from "../assets/security.jpg";
import realestate  from "../assets/realestate.jpg";
import company  from "../assets/company.jpg";
import ngopic  from "../assets/ngopic.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';






export const Projects = () => {

    const Projects = [
        {
            title:"Business Startup",
            description:"Design & Development Services",
            imgUrl: mobile2,
        },

        {
            title:"Company Set-Up",
            description:"Product Development Services",
            imgUrl: company,
        },

        {
            title:"Public & Private Organisation",
            description:"Training & Progressive Maintenance Services",
            imgUrl: security,
        },

        {
            title:"Real Estate",
            description:"Marketing,Accessing & Development Services",
            imgUrl: realestate,
        },

        {
            title:"Industrial Establishments",
            description:"Promotion & Marketing Services",
            imgUrl: designs,
        },

        {
            title:"New Organization",
            description:"Design & Development Services",
            imgUrl: projImg3,
        },
    ];
    return (
     <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>                
                    <h2>Projects</h2>  
              <p>This is gishmaf global company, we offer all types of tech services including consultancy,contact us for more info @gishmafglobalcompany@gmail.com</p>
              </div>}
              </TrackVisibility>
              <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant ="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="third" >Tab Three</Nav.Link>
              </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            Projects.map((project, index)=>{
                                return (
                                    <ProjectCard key={index} 
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Gishmaf Global Exhibitions</Tab.Pane>
                <Tab.Pane eventKey="third">Gishmaf Global Youths & Teens Aids (G.G.Y.T.A)NGO</Tab.Pane>
              </Tab.Content>
              </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="backgroung-image-right" src={ngopic}></img>
        <img className="backgroung-image-right" src={bg2}></img>

     </section>
    )
}