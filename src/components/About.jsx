import tempImage from "./images/Your paragraph text.png";
import lightBulb from "./images/icons/lightbulb_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import flowChart from "./images/icons/flowchart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import deliveryTruck from "./images/icons/delivery_truck_speed_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

import "./styling/About.css";

function About(props) {
  return (
    <div>
      <div className="hero">
        <div className="left">
          <h1>I remember stagnating</h1>
          <p>
            I was never a social media person, but I realised this was
            preventing my personal growth. Whether it be the lack of job offers
            or the lack of opportunities for me to put myself out there, I truly
            believe that the internet is a great place for growth.
          </p>
        </div>
        <img src={tempImage} alt="#"></img>
      </div>

      <div className="stats">
        <div class="card">
          <img src={lightBulb} alt="#"></img>
          <h1>2 weeks</h1>
          <p className="why-description">
            We design everything from scratch; using only your guidance and
            opinion. Once you give us your vision, we begin working to ensure
            that vision comes true!
          </p>
        </div>
        <div class="card">
          <img src={flowChart} alt="#"></img>
          <h1>5+ years</h1>
          <p className="why-description">
            We work swift and fast, ensuring to use the latest project
            management techniques with thorough documentation, ensuring the
            completion of your task.
          </p>
        </div>
        <div class="card">
          <img src={deliveryTruck} alt="#"></img>
          <h1>10+ years</h1>
          <p className="why-description">
            We give you the best possible solution, with modern platforms for
            your website deployments, and the latest trends for your social
            media marketing!
          </p>
        </div>
      </div>

      <div className="team">
        <h1>Meet the team</h1>
        <div className="team-member">
          <div>
            <h2>Essam</h2>
            <p>Help please</p>
          </div>
          <img src={tempImage} alt="#"></img>
        </div>
        <div className="team-member">
          <img src={tempImage} alt="#"></img>
          <div>
            <h2>Ghazi</h2>
            <p>Bozo</p>
          </div>
        </div>
      </div>

      <div className="credentials"></div>
    </div>
  );
}

export default About;
