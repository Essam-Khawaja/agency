import Section from "./Section";
import Footer from "./Footer";
import Magnetic from "./Magnetic";
import { motion, useScroll } from "framer-motion";

import "./styling/Home.css";
import home_1 from "./images/15917680_5666023.svg";
import home_2 from "./images/Mobile Marketing-bro.svg";
import { forwardRef, useEffect, useRef, useState } from "react";
import StickyCursor from "./StickyCursor";

function Home(props) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (event) => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const getBackgroundColour = () => {
    if (scrollPosition < 1000) {
      return "#2b054d";
    } else if (scrollPosition < 2500) {
      return "#321d45";
    } else {
      return "#2b054d";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <motion.div
      className="home-container"
      animate={{ backgroundColor: getBackgroundColour() }}
    >
      <div className="home-header">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 100, y: 0 }}
          whileTap={{ scale: 1.1 }}
        >
          Creating Your
          <br /> Digital Experience.
        </motion.h1>
        {/* <Magnetic slow={5}>
          <img className="home-image" src={home_2} alt="home"></img>
        </Magnetic> */}
      </div>
      <Section
        type="home1"
        title="Digital Branding... What?"
        details="Why would you only promote your brand physically, when there is a whole new customer base online? See what we do:"
        image={home_1}
        buttonText={"Services"}
        ref={ref1}
      />
      <Section
        type="home2"
        title="Not just posting"
        details="We provide so much more than just posting on your Instagram"
        buttonText={"Portfolio"}
        ref={ref2}
      />
      <Section
        type="home3"
        title="Why Us?"
        details="We are professional, efficient and completely transparent in our methods to achieving your goals"
        image={home_2}
        buttonText={"Services"}
        ref={ref3}
      />
      <Footer />
      <StickyCursor stickyElement={ref1} z="1" />
      <StickyCursor stickyElement={ref2} z="1" />
      <StickyCursor stickyElement={ref3} z="1" />
    </motion.div>
  );
}

export default Home;
