import Magnetic from "./Magnetic";
import { forwardRef, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styling/Nav.css";
import StickyCursor from "./StickyCursor";

function Nav(props) {
  const ref = useRef(null);
  return (
    <div>
      <nav>
        <div className="bounds" ref={ref}>
          <ul>
            <Magnetic>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "nav-button-highlighted" : "nav-button";
                }}
              >
                Home
              </NavLink>
            </Magnetic>
            <Magnetic>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "nav-button-highlighted" : "nav-button";
                }}
              >
                About
              </NavLink>
            </Magnetic>
            <Magnetic>
              <NavLink
                to="/services"
                className={({ isActive }) => {
                  return isActive ? "nav-button-highlighted" : "nav-button";
                }}
              >
                Services
              </NavLink>
            </Magnetic>
            <Magnetic>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "nav-button-highlighted" : "nav-button";
                }}
              >
                Work With US!
              </NavLink>
            </Magnetic>
          </ul>
        </div>
      </nav>
      <StickyCursor stickyElement={ref} z="1" />
    </div>
  );
}

export default Nav;
