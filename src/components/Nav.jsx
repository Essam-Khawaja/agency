import MagneticButton from "./Magnetic";
import { forwardRef, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styling/Nav.css";
import { motion } from "framer-motion";

function Nav(props) {
  const ref = useRef(null);

  const [position, setPosition] = useState({
    left: 21,
    width: "23%",
  });

  const [shadowPosition, setShadowPosition] = useState({
    left: 0,
    widht: 0,
    opacity: 0,
  });

  return (
    <div>
      <nav>
        <ul className="nav">
          <div className="gradient-border">
            <NavCursor position={position} />
            <NavCursor position={shadowPosition} type="-shadow" />
            <NavButton
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/"
            >
              Home
            </NavButton>
            <NavButton
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/about"
            >
              About
            </NavButton>
            <NavButton
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/services"
            >
              Services
            </NavButton>
            <NavButton
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/contact"
            >
              Work With US!
            </NavButton>
          </div>
        </ul>
      </nav>
    </div>
  );
}

function NavButton({ children, setPosition, setShadowPosition, location }) {
  const ref = useRef(null);

  return (
    <NavLink
      to={location}
      className="nav-button"
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setShadowPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onMouseLeave={() => {
        setShadowPosition({
          width: ref.current.getBoundingClientRect().width,
          left: ref.current.offsetLeft,
          opacity: 0,
        });
      }}
      onClick={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
        });
      }}
    >
      {children}
    </NavLink>
  );
}

function NavCursor({ position, type = "" }) {
  return (
    <motion.div animate={position} className={`nav-cursor${type}`}></motion.div>
  );
}

export default Nav;
