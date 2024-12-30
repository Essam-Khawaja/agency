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
import { useForm } from "react-hook-form";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Contact() {
  const COLORS = ["#700F32", "#cf376d", "#996fc0", "#53356f"];
  const SIZES = ["50%", "45%"];
  const color = useMotionValue(COLORS[0]);
  const size = useMotionValue(SIZES[0]);
  const backgroundImage1 = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #1e1e1e ${size}, ${color})`;
  const navigate = useNavigate();

  const dbRef = collection(db, "user-data");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await addDoc(dbRef, data);
      navigate(0);
    } catch (e) {
      console.log(e);
    }
  };

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
  });

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
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 50,
                        message: "Name cannot be longer than 50 characters",
                      },
                    })}
                    type="text"
                    placeholder="Name"
                    className="form-input"
                  ></input>
                  {errors.name && (
                    <div className="error-text">{errors.name.message}</div>
                  )}
                </div>
                <div className="input-container">
                  <label>Business Name</label>
                  <input
                    {...register("business_name", {
                      required: "Business name is required",
                      maxLength: {
                        value: 20,
                        message:
                          "Business name cannot be longer than 20 characters",
                      },
                    })}
                    type="text"
                    placeholder="Business Name"
                    className="form-input"
                  ></input>
                  {errors.business_name && (
                    <div className="error-text">
                      {errors.business_name.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="input-container-description">
                <label>What Do You Do?</label>
                <textarea
                  {...register("business_description", {
                    required: "Business description is required",
                    maxLength: {
                      value: 500,
                      message:
                        "Business description cannot be longer than 500 characters",
                    },
                  })}
                  type="text"
                  placeholder="Give a brief description of your business"
                  className="form-input description"
                ></textarea>
                {errors.business_description && (
                  <div className="error-text">
                    {errors.business_description.message}
                  </div>
                )}
              </div>
            </div>
            <div className="form-section">
              <h2 className="form-section-heading">Contact Information</h2>
              <div className="side-section">
                <div className="input-container">
                  <label>Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email Address",
                      },
                      maxLength: {
                        value: 50,
                        message: "Email cannot be longer than 50 characters",
                      },
                    })}
                    type="text"
                    placeholder="Email"
                    className="form-input"
                  ></input>
                  {errors.email && (
                    <div className="error-text">{errors.email.message}</div>
                  )}
                </div>
                <div className="input-container">
                  <label>Phone Number</label>
                  <input
                    {...register("phone_number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+(\d{1,4})\s?(\d{1,4}(\s?\d{1,4}){1,3})$/,
                        message:
                          "Invalid phone number (make sure to add '+' at the beginning to denote country code)",
                      },
                      maxLength: {
                        value: 16,
                        message:
                          "Phone number cannot be longer than 16 characters",
                      },
                    })}
                    type="text"
                    placeholder="Phone Number (including country code)"
                    className="form-input"
                  ></input>
                  {errors.phone_number && (
                    <div className="error-text">
                      {errors.phone_number.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="input-container-description">
                <label>What are you particularly looking for?</label>
                <textarea
                  {...register("project_description", {
                    required: "Project description is required",
                    maxLength: {
                      value: 500,
                      message:
                        "Project description cannot be longer than 500 characters",
                    },
                  })}
                  type="text"
                  placeholder="Tell us what you wish to sign up for with an estimated budget"
                  className="form-input description"
                ></textarea>
                {errors.project_description && (
                  <div className="error-text">
                    {errors.project_description.message}
                  </div>
                )}
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
