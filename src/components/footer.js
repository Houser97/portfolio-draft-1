import { Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="align-items-center footer-container">
        <div className="footer-logo">
          <div className="logo-architecture">IT'S ALL ABOUT </div>
          <div className="logo-architecture">ARCHITECTURE</div>
        </div>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a className="linkedin" href="#"><img src={navIcon1} alt="" /></a>
              <a className="facebook" href="#"><img src={navIcon2} alt="" /></a>
              <a className="instagram" href="#"><img src={navIcon3} alt="" /></a>
          </div>
        </Col>
      </div>
    </footer>
  )
}

export default Footer;