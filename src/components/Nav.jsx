import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styling/Nav.css";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
    window.addEventListener("resize", () => {
      navigate(`${location.pathname}`);
    });
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
          </div>
        </ul>
      </nav>
    </div>
  );
}

function NavCursor({ position, type = "" }) {
  return (
    <motion.div animate={position} className={`nav-cursor${type}`}></motion.div>
  );
}

export default Nav;
