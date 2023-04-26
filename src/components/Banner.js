import { useState,useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import Gishmaflogo from "../assets/Gishmaflogo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import {isVisible} from "@testing-library/user-event/dist/utils";


export const Banner = () =>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] =useState(300- Math.random() * 100);
    const  toRotate =["mobile apps development","NGO @ (G.G.Y.T.A) Gishmaf Global Youths & Teens Aids", "Interface design","Data analysis","system,mobile & web security", "database security & management","web development"];
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
        tick();
        },delta);

        return() =>{clearInterval(ticker);};
    }, [text]);

    const tick = () =>{
     let i = loopNum % toRotate.length;
     let fullText = toRotate[i];
     let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

     setText(updatedText);

     if (isDeleting) {
        setDelta(prevDelta=>prevDelta /2)
     }

     if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
     } else if (isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
     }
    }

    return(
        <section className="Banner" id="home">
        <Container>
            <Row className="align-item-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome Onboard</span> 
                    <h1>{`Hi, this is Gishmaf Global. `}<span className="wrap">{text}</span></h1>
                    <p>welcome to gishmaf global company, we offer all varieties of tech services, NGO & More. Contact us for more info at gishmafglobalcompany@gmail.com</p>
                    <button onClick={()=>console.log('connect')}>let's connect
                    <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={Gishmaflogo} alt="Header Img" />
                </Col>
            </Row>
        </Container>
        </section>
    )
}