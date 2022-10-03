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
    <nav className="scrolled navbar-container">
      <div className="container-content-nav">
        <Navbar.Brand href="/">
          <div className="logo-architecture">IT'S ALL ABOUT </div>
          <div className="logo-architecture">ARCHITECTURE</div>
        </Navbar.Brand>
        <div className="links-and-instagram">
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
        </div>
        <div className="toggle-buttons">
            <svg className="toggle-button open-menu" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
            <svg className="toggle-button close-menu" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </div>
      </div>
    </nav>
  )
}

export default NavbarReact