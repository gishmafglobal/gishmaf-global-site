import { Alert, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Newsletter = ({onValidated, status, message}) =>{
    const [email, setEmail] = useState('');

    useEffect(() =>{
    if (status === 'success') clearfields();
    }, [status])
     
    const handleSubmit = (e) =>{
     e.preventDefault();
     email &&
     email.indexOf("0") > -1 &&
     onValidated({
        Email: email
     })
    }

    const clearfields = () =>{
        setEmail("");
    }

    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>      
                        <h3>Kindly Subscribe to this Channel</h3>
                        </div>}
                        </TrackVisibility>

                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                         <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) =>setEmail(e.target.value)} placeholder="Email Address"/>
                            <button type="submit">Subscribe</button>
                         </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}