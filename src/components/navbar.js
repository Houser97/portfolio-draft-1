import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../styles/navbar.css'

const NavbarReact = ({isAppComponent}) => {

  const [activeLink, setActiveLink] = useState('home');
  const [toggle, setToggle] = useState(false)
  /*
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
*/
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={`${isAppComponent ? "scrolled" : "scrolled"}`}>
      <Container>
        <Navbar.Brand href="/">
          <div className="logo-architecture">IT'S ALL ABOUT </div>
          <div className="logo-architecture">ARCHITECTURE</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" onClick={() => setToggle(true)}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/*<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>*/}
          {isAppComponent ? (
            <Nav className='ms-auto'>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
          ):(
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            </Nav>
          )}
          <span className="navbar-text">
            <div className="social-icon">
              {/* 
              <a className="linkedin" href="#"><img src={navIcon1} alt="" /></a>
              <a className="facebook" href="#"><img src={navIcon2} alt="" /></a>
              */}
              <a className="instagram" href="https://www.instagram.com/vid.aldesign/"><img src={navIcon3} alt="" /></a>
            </div>
            {/*
            <HashLink to='#connect'>
              <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
            */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarReact