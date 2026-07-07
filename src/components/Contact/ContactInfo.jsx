import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  const info = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      text: "123 Wellness Street, Salt Lake, Kolkata, West Bengal",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      text: "+91 98765 43210",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      text: "hello@eloriaspa.com",
    },
    {
      icon: <FaClock />,
      title: "Opening Hours",
      text: "Mon - Sun : 9:00 AM - 9:00 PM",
    },
  ];

  return (
    <div className="contact-info">

      {info.map((item, index) => (

        <motion.div
          key={index}
          className="info-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
        >
          <div className="info-icon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <p>{item.text}</p>

        </motion.div>

      ))}

    </div>
  );
}
