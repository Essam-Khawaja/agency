// "use client";
import { useEffect, useState } from "react";
import "./styling/StickyCursor.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

function StickyCursor({ stickyElement, z = -100 }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered
    ? [
        stickyElement.current.clientWidth + 20,
        stickyElement.current.clientHeight + 20,
      ]
    : [15, 15];
  const circleOrNot = isHovered ? "12px" : "50%";
  const highlight = isHovered ? "#E01F65" : "#ffffff";
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    if (isHovered) {
      mouse.x.set(center.x - cursorSize[0] / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize[1] / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize[0] / 2);
      mouse.y.set(clientY - cursorSize[1] / 2);
    }
  };

  const manageMouseOver = (event) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (event) => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    };
  });

  return (
    <div className="cursorContainer">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          zIndex: z,
        }}
        animate={{
          width: cursorSize[0],
          height: cursorSize[1],
          borderRadius: circleOrNot,
          backgroundColor: highlight,
        }}
        className="cursor"
      ></motion.div>
    </div>
  );
}
export default StickyCursor;
