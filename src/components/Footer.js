import { Container, Col, Row} from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Gishmaflogo from "../assets/Gishmaflogo.png";
import inst from "../assets/inst.png"
import linkedin from "../assets/linkedin.png"
import fb from "../assets/fb.png"


export const Footer = () =>{
    return(
        <footer className="footer">
         <Container>
            <Row className="align-item-center">
            <MailchimpForm />
            <Col sm={6}>
                <img src={Gishmaflogo} alt="Gishmaflogo" />
            </Col>
            <Col sm={6} className="text-center text-sm-eng">
                <div className="social-icon">
                  <a href= ""><img src={inst}/></a>
                  <a href='#'><img src={linkedin}/></a>
                <a href='#'><img src={fb}/></a>
                </div>
                <p>CopyRight 2022. All Right Reserved</p>
            </Col>
            </Row>
         </Container>
        </footer>
    )
}