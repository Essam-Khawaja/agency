import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import logoImage from "./images/15917680_5666023.svg";
import "./styling/Footer.css";

function Footer(props) {
  return (
    <div>
      <div className="footer-container">
        <div>
          <h1 className="footer-heading">Ready to get started?</h1>
          <button className="home-button">Get my Digital Brand!</button>
        </div>
        <img src={logoImage} alt="#"></img>
      </div>
    </div>
  );
}

export default Footer;
