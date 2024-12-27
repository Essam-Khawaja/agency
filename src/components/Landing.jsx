import MagneticButton from "./Magnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./Footer";
import SpaceBackground from "./SpaceBackground";

import "./styling/Landing.css";

import heroImage from "./images/Mobile Marketing-cuate.svg";
import rightArrow from "./images/icons/arrow_circle_right.svg";
import tempImage from "./images/brand loyalty-rafiki.svg";
import lightBulb from "./images/icons/lightbulb_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import flowChart from "./images/icons/flowchart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import deliveryTruck from "./images/icons/delivery_truck_speed_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

function Landing(props) {
  const { scrollY } = useScroll();

  // const backgroundColor = useTransform(
  //   scrollY,
  //   [0, 15000],
  //   ["transparent", "#700F32"]
  // );

  return (
    <motion.div style={{}} className="landing-container">
      <SpaceBackground colorChoice={0} />

      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero-text-container">
          <h1 className="heading">
            Tap Into The <br /> Online Market
          </h1>
          <h2 className="sub-heading">
            Attract customers to your brand with us today!
          </h2>
          <button className="home-button">
            <span>Get my Digital Brand!</span>
          </button>
        </div>
        <img id="hero-image" src={heroImage} alt="#"></img>
      </motion.div>

      <motion.div className="problem-container">
        <h1 className="heading problem">How You Are Falling Behind</h1>
        <h2 className="sub-heading">Does this sound familiar?</h2>
        <ul className="list-container">
          <div className="point-container">
            <img className="bullet-point" src={rightArrow} alt="#"></img>
            <li>Difficulty in advertising?</li>
          </div>
          <div className="point-container">
            <img className="bullet-point" src={rightArrow} alt="#"></img>
            <li>Hard to gain a new customer base?</li>
          </div>
          <div className="point-container">
            <img className="bullet-point" src={rightArrow} alt="#"></img>
            <li>Stagnating in growth?</li>
          </div>
          <div className="point-container">
            <img className="bullet-point" src={rightArrow} alt="#"></img>
            <li>Unable to keep up with the new technology?</li>
          </div>
        </ul>
      </motion.div>

      <div className="solution-container">
        <img src={tempImage} alt="#"></img>
        <div className="solution-text-container">
          <h1 className="heading">How we help YOU avoid the struggle</h1>
          <p className="paragraph-desc">
            AD Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            sem lectus. Sed molestie vehicula mi, eu tempor risus euismod eget.
            Mauris egestas neque et ligula tempor, eget tempor dui vehicula.
            Suspendisse sollicitudin diam justo, egestas bibendum turpis iaculis
            gravida. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Curabitur at eleifend urna, a varius
            ex. Proin fringilla, dui a tempus sagittis, justo orci pellentesque
            diam, ac aliquet justo enim interdum nunc. Maecenas id massa vel
            nunc pretium sodales pulvinar sed ligula.
          </p>
        </div>
      </div>
      <div className="why-page">
        <div class="card">
          <img src={lightBulb} alt="#"></img>
          <h1>From Scratch</h1>
          <p className="why-description">
            We design everything from scratch; using only your guidance and
            opinion. Once you give us your vision, we begin working to ensure
            that vision comes true!
          </p>
        </div>
        <div class="card">
          <img src={flowChart} alt="#"></img>
          <h1>Streamlined Process</h1>
          <p className="why-description">
            We work swift and fast, ensuring to use the latest project
            management techniques with thorough documentation, ensuring the
            completion of your task.
          </p>
        </div>
        <div class="card">
          <img src={deliveryTruck} alt="#"></img>
          <h1>Reliable Delivery</h1>
          <p className="why-description">
            We give you the best possible solution, with modern platforms for
            your website deployments, and the latest trends for your social
            media marketing!
          </p>
        </div>
      </div>

      <div className="process-container">
        <h1 className="heading problem">How it Works: </h1>
        <div className="process-stage">
          <h2 className="sub-heading process">01</h2>
          <h3 className="process sub-sub-heading">Book/Schedule</h3>
          <p>
            Book a meeting with us to discuss your problems and to find your
            solutions. Once found, we will formulate a plan, ensuring we receive
            your affirmation before going ahead.
          </p>
        </div>
        <div className="process-stage">
          <h2 className="sub-heading process">02</h2>
          <h3 className="process sub-sub-heading">We'll get to work</h3>
          <p>
            With our plan, our team begins working on your brand. From the
            website building to the content creation, we begin solidifying your
            online presence. Once done, we ask for any revisions from your side.
          </p>
        </div>
        <div className="process-stage">
          <h2 className="sub-heading process">03</h2>
          <h3 className="process sub-sub-heading">Happily ever after</h3>
          <p>
            After all the projects have been built, and after receiving your
            go-ahead, we begin deploying the projects. Platforms like AWS for
            your websites, and social media for your ads. Everything is done on
            our side, so you can reap the rewards without having to worry about
            the technicalities!
          </p>
        </div>
      </div>

      <Footer></Footer>
    </motion.div>
  );
}

export default Landing;
