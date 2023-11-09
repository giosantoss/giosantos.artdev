import "./load.css";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: .5,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const backg = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

export default function Load2() {
  return (
    <motion.svg
        width="60"
        height="60"
        viewBox="0 0 160 160"
        initial="hidden"
        animate="visible"
    >
        <g transform="rotate(-90 80 80)">
            <motion.circle className={'abs'} cx="80" cy="80" r="70" stroke="#ffffff15" variants={backg} custom={1} />
            <motion.circle cx="80" cy="80" r="70" stroke="#00ff73" variants={draw} custom={1} />
        </g>

        <motion.text x="80" y="80" text-anchor="middle" dominant-baseline="middle" fill="#ffff" font-size="30">
            50%
        </motion.text>
    </motion.svg>
  );
}