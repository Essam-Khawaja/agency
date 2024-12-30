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

function SpaceBackground({ colorChoice, height }) {
  const COLORS = ["#700F32", "#cf376d", "#996fc0", "#53356f"];
  const SIZES = ["50%", "45%"];
  const color = useMotionValue(COLORS[colorChoice]);
  const size = useMotionValue(SIZES[0]);
  const backgroundImage1 = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #1e1e1e ${size}, ${color})`;
  const backgroundImage2 = useMotionTemplate`linear-gradient(${color},  #1e1e1e ${size})`;

  useEffect(() => {
    // animate(color, COLORS, {
    //   ease: "easeInOut",
    //   duration: 10,
    //   repeat: Infinity,
    //   repeatType: "mirror",
    // });
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
      <motion.section
        style={{
          backgroundImage: backgroundImage2,
        }}
        className="background-bottom"
      ></motion.section>
      <div className="stars-container">
        <Canvas>
          <Stars radius={50} count={5000} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </div>
  );
}

export default SpaceBackground;
