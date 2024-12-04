import Magnetic from "./Magnetic";
import { forwardRef, useRef } from "react";
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
              <button className="nav-button">Home</button>
            </Magnetic>
            <Magnetic>
              <button className="nav-button">Portfolio</button>
            </Magnetic>
            <Magnetic>
              <button className="nav-button">Services</button>
            </Magnetic>
            <Magnetic>
              <button className="nav-button">Work With US!</button>
            </Magnetic>
          </ul>
        </div>
      </nav>
      <StickyCursor stickyElement={ref} z="1" />
    </div>
  );
}

export default Nav;
