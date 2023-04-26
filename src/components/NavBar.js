import {useState, useEffect} from 'react' 
import {Navbar, Container,Nav} from "react-bootstrap"
import Gishmaflogo from "../assets/Gishmaflogo.png"
import email2 from "../assets/email2.png"
import linkedin from "../assets/linkedin.png"
import fb from "../assets/fb.png"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
    const onScroll = () => {
        if (window.scrolly>50) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    window.addEventListener('scroll', onScroll);

    return ()=>window.removeEventListener('scroll', onScroll);
     },[])

     const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
     }


  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={Gishmaflogo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home" ? "active-navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" lassName={activeLink==="skills" ? "active-navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink("skills")}>Services</Nav.Link>
            <Nav.Link href="#projects" lassName={activeLink==="projects" ? "active-navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink("projects")}>Projects</Nav.Link>          
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=AQMjQ7QrAQebnQCNVLZDJlkKiXEXOX-Nt2_LjnZ9m_wWuUx0hgmlzMgD0L6GaktP199nDURN_YXP&flowName=GlifWebSignIn&flowEntry=ServiceLogin'><img src={email2}/></a>
                <a href='https://www.linkedin.com/in/c-e-o-at-gishmaf-global-026a24181'><img src={linkedin}/></a>
                <a href='https://www.facebook.com/gishmafglobal?mibextid=ZbWKwL'><img src={fb}/></a>
            </div>
            <button className='cvd' onClick={()=>console.log('connect')}>
                <span>let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

