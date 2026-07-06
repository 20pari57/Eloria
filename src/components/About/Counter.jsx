import { motion } from "framer-motion";
import CountUp from "react-countup";
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
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2.5}
          />
        ) : (
          0
        )}
        {suffix}
      </h2>

      <p>{title}</p>
    </motion.div>
  );
}