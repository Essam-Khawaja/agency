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
import { useForm, SubmitHandler } from "react-hook-form";

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

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <motion.section
        style={{
          backgroundImage: backgroundImage1,
        }}
        className="background"
      ></motion.section>
      <div className="stars-container-contact">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h1 className="form-title">Let's Build Something Beautiful!</h1>

          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-section who">
              <h2 className="form-section-heading">Who Are You?</h2>
              <div className="side-section">
                <div className="input-container">
                  <label>Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Name"
                    className="form-input"
                  ></input>
                </div>
                <div className="input-container">
                  <label>Business Name</label>
                  <input
                    {...register("business-name")}
                    type="text"
                    placeholder="Business Name"
                    className="form-input"
                  ></input>
                </div>
              </div>
              <div className="input-container-description">
                <label>What Do You Do?</label>
                <textarea
                  {...register("business-description")}
                  type="text"
                  placeholder="Give a brief description of your business"
                  className="form-input description"
                ></textarea>
              </div>
            </div>
            <div className="form-section">
              <h2 className="form-section-heading">Contact Information</h2>
              <div className="side-section">
                <div className="input-container">
                  <label>Email</label>
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Email"
                    className="form-input"
                  ></input>
                </div>
                <div className="input-container">
                  <label>Phone Number</label>
                  <input
                    {...register("phone-number")}
                    type="text"
                    placeholder="Phone Number (including country code)"
                    className="form-input"
                  ></input>
                </div>
              </div>
              <div className="input-container-description">
                <label>What are you particularly looking for?</label>
                <textarea
                  {...register("project-description")}
                  type="text"
                  placeholder="Tell us what you wish to sign up for with an estimated budget"
                  className="form-input description"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-button">
              <span>Submit</span>
            </button>
          </form>
        </div>
        {/* <ConstructionImage className="contact-image" /> */}
      </div>
    </div>
  );
}

export default Contact;
