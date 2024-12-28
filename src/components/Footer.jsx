import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import tempImage from "./images/Your paragraph text.png";
import { NavLink } from "react-router-dom";
import "./styling/Footer.css";

function Footer(props) {
  return (
    <div>
      <div className="footer-container">
        <div>
          <h1 className="footer-heading">Ready to get started?</h1>
          <NavLink to="/contact" className="footer-button">
            <span>Get my Digital Brand!</span>
          </NavLink>
        </div>
        <div>
          <img src={tempImage} className="footer-image" alt="#" />
          <div className="social-container">
            <a href="https://www.instagram.com/agsemedia/?hl=en">
              <img src={instagram} alt="#" className="social-media-icon" />
            </a>
            <a>
              <img src={linkedin} alt="#" className="social-media-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
