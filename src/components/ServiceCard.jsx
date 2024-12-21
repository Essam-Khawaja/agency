import ReactDOM from "react-dom";
import "./styling/ServiceCard.css";
import { NavLink } from "react-router-dom";
import { color, useAnimate, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import StickyCursor from "./StickyCursor";
import { useRef } from "react";
import tempImage from "./images/Your paragraph text.png";
import closeIcon from "./images/icons/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

function ServiceCard({ children }) {
  const { scrollY } = useScroll();
  const ref = useRef();

  const scaleX = useTransform(scrollY, [0, 500], ["90%", "100%"]);
  const borderRadius = useTransform(scrollY, [0, 500], ["2%", "0%"]);

  return ReactDOM.createPortal(
    <div>
      <div className="overlay"></div>
      <motion.div
        initial={{ translateY: "80vh" }}
        animate={{ translateY: 0 }}
        style={{ scaleX: scaleX, borderRadius: borderRadius }}
        exit={{ translateY: "80vh" }}
        className="service-card-container"
      >
        <div>
          <div className="text">
            <h1 className="test">Whats up</h1>
          </div>
          <div className="images">
            <img src={tempImage} alt="#" />
          </div>
        </div>
        <NavLink to="/services" className="test">
          <img src={closeIcon} alt="close-icon" className="close-icon" />
        </NavLink>
      </motion.div>
    </div>,
    document.getElementById("portal")
  );
}

export default ServiceCard;
