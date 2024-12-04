import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Magnetic(props) {
  const ref = useRef(props.children);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    const { clientX, clientY } = event;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (height + top / 2);
    setMousePosition({ x: middleX, y: middleY });
  };

  const mouseLeave = (event) => {
    setMousePosition({ x: 0, y: 0 });
  };

  const { x, y } = mousePosition;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.3 }}
      ref={ref}
    >
      <div>{props.children}</div>
    </motion.div>
  );
}

export default Magnetic;
