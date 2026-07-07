import { motion } from "framer-motion";
import {  useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Counter({
  end,
  suffix = "",
  title,
  delay = 0,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let currentValue = 0;
      const increment = end / 25; // Animate over 25 steps
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(currentValue));
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      className="stat-box"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
    >
      <h2>
        {displayValue}
        {suffix}
      </h2>

      <p>{title}</p>
    </motion.div>
  );
}