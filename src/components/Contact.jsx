import { useEffect } from "react";
import "./styling/SpaceBackground.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import "./styling/Contact.css";
import { ReactComponent as ConstructionImage } from "./images/Construction-pana.svg";

function Contact() {
  const COLORS = ["#700F32", "#cf376d", "#996fc0", "#53356f"];
  const SIZES = ["50%", "45%"];
  const color = useMotionValue(COLORS[0]);
  const size = useMotionValue(SIZES[0]);
  const backgroundImage1 = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #1e1e1e ${size}, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    animate(size, SIZES, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div>
      <motion.section
        style={{
          backgroundImage: backgroundImage1,
        }}
        className="background"
      ></motion.section>
      <div className="stars-container">
        <Canvas>
          <Stars radius={50} count={5000} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h1 className="form-title">Lets Build Something Beautiful</h1>
          <form className="form-container">
            <div className="form-section who">
              <h2>Who Are You?</h2>
              <div className="side-section">
                <div className="input-container">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-input"
                  ></input>
                </div>
                <div className="input-container">
                  <label>Business Name</label>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="form-input"
                  ></input>
                </div>
              </div>
              <div className="input-container-description">
                <label>What Do You Do?</label>
                <textarea
                  type="text"
                  placeholder="Give a brief description of your business"
                  className="form-input description"
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="side-section">
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-input"
                  ></input>
                </div>
                <div className="input-container">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number (including country code)"
                    className="form-input"
                  ></input>
                </div>
              </div>
              <div className="input-container-description">
                <label>What are you particularly looking for?</label>
                <textarea
                  type="text"
                  placeholder="Tell us what you wish to sign up for with an estimated budget"
                  className="form-input description"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="home-button">
              Submit
            </button>
          </form>
        </div>
        <ConstructionImage className="contact-image" />
      </div>
    </div>
  );
}

export default Contact;
