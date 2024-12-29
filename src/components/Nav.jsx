import MagneticButton from "./Magnetic";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styling/Nav.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Nav(props) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });

  const [shadowPosition, setShadowPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      setPosition({
        left: homeRef.current.offsetLeft,
        width: homeRef.current.getBoundingClientRect().width,
      });
    } else if (location.pathname === "/about") {
      setPosition({
        left: aboutRef.current.offsetLeft,
        width: aboutRef.current.getBoundingClientRect().width,
      });
    } else if (location.pathname === "/services") {
      setPosition({
        left: processRef.current.offsetLeft,
        width: processRef.current.getBoundingClientRect().width,
      });
    } else if (location.pathname === "/contact") {
      setPosition({
        left: contactRef.current.offsetLeft,
        width: contactRef.current.getBoundingClientRect().width,
      });
    }
  }, [location]);

  return (
    <div>
      <nav>
        <ul className="nav">
          <div className="gradient-border">
            <NavCursor position={position} />
            <NavCursor position={shadowPosition} type="-shadow" />
            <NavLink
              to="/"
              className="nav-button"
              ref={homeRef}
              onMouseEnter={() => {
                if (!homeRef.current) return;

                const { width } = homeRef.current.getBoundingClientRect();

                setShadowPosition({
                  width,
                  opacity: 1,
                  left: homeRef.current.offsetLeft,
                });
              }}
              onMouseLeave={() => {
                setShadowPosition({
                  width: homeRef.current.getBoundingClientRect().width,
                  left: homeRef.current.offsetLeft,
                  opacity: 0,
                });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-button"
              ref={aboutRef}
              onMouseEnter={() => {
                if (!aboutRef.current) return;

                const { width } = aboutRef.current.getBoundingClientRect();

                setShadowPosition({
                  width,
                  opacity: 1,
                  left: aboutRef.current.offsetLeft,
                });
              }}
              onMouseLeave={() => {
                setShadowPosition({
                  width: aboutRef.current.getBoundingClientRect().width,
                  left: aboutRef.current.offsetLeft,
                  opacity: 0,
                });
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="nav-button"
              ref={processRef}
              onMouseEnter={() => {
                if (!processRef.current) return;

                const { width } = processRef.current.getBoundingClientRect();

                setShadowPosition({
                  width,
                  opacity: 1,
                  left: processRef.current.offsetLeft,
                });
              }}
              onMouseLeave={() => {
                setShadowPosition({
                  width: processRef.current.getBoundingClientRect().width,
                  left: processRef.current.offsetLeft,
                  opacity: 0,
                });
              }}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-button"
              ref={contactRef}
              onMouseEnter={() => {
                if (!contactRef.current) return;

                const { width } = contactRef.current.getBoundingClientRect();

                setShadowPosition({
                  width,
                  opacity: 1,
                  left: contactRef.current.offsetLeft,
                });
              }}
              onMouseLeave={() => {
                setShadowPosition({
                  width: contactRef.current.getBoundingClientRect().width,
                  left: contactRef.current.offsetLeft,
                  opacity: 0,
                });
              }}
            >
              Work With US!
            </NavLink>
            {/* <NavButton
              ref={aboutRef}
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/about"
            >
              About
            </NavButton>
            <NavButton
              ref={processRef}
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/services"
            >
              Services
            </NavButton>
            <NavButton
              ref={contactRef}
              setPosition={setPosition}
              setShadowPosition={setShadowPosition}
              location="/contact"
            >
              Work With US!
            </NavButton> */}
          </div>
        </ul>
      </nav>
    </div>
  );
}

function NavButton({ children, setShadowPosition, location }) {
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
