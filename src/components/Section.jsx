import { forwardRef } from "react";
import Magnetic from "./Magnetic";
import "./styling/Section.css";

const Section = forwardRef(function (props, ref) {
  function button(buttonText) {
    if (buttonText) {
      return (
        <div>
          <button ref={ref} className="section-button">
            {props.buttonText}
          </button>
        </div>
      );
    }
  }

  function SectionType(props) {
    if (props.type === "home1") {
      return (
        <div>
          <div className="flex-container">
            <img src={props.image} className="section-image" alt="#" />
            <div className="text-container">
              <h1 className="section-title">{props.title}</h1>
              <p className="section-details">{props.details}</p>
              {button(props.buttonText)}
            </div>
          </div>
        </div>
      );
    } else if (props.type === "home2") {
      return (
        <div>
          <div className="flex-container">
            <div className="text-container">
              <h1 className="section-title">{props.title}</h1>
              <p className="section-details">{props.details}</p>
              {button(props.buttonText)}
            </div>
          </div>
        </div>
      );
    } else if (props.type === "home3") {
      return (
        <div>
          <div className="flex-container">
            <div className="text-container">
              <h1 className="section-title">{props.title}</h1>
              <p className="section-details">{props.details}</p>
              {button(props.buttonText)}
            </div>
            <img src={props.image} className="section-image" alt="#" />
          </div>
        </div>
      );
    }
  }

  return <div>{SectionType(props)}</div>;
});

export default Section;
