import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import facebook from "./images/icons/facebook_2111396.png";
import tempImage from "./images/logo.png";
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
            <a
              href="https://www.instagram.com/agsemedia/?hl=en"
              target="_blank"
            >
              <img src={instagram} alt="#" className="social-media-icon" />
            </a>
            <a href=" https://www.facebook.com/agsemedia/" target="_blank">
              <img src={facebook} alt="#" className="social-media-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/agse-media-223a30343/"
              target="_blank"
            >
              <img src={linkedin} alt="#" className="social-media-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
