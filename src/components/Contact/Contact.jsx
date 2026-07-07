import { motion } from "framer-motion";
import "./Contact.css";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import contactImage from "../../assets/images/contact/contact.jpg";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Heading */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span>CONTACT US</span>

          <h2>Begin Your Wellness Journey Today</h2>

          <p>
            Have questions or ready to book your luxury spa experience?
            Our wellness experts are here to assist you with every step
            of your relaxation journey.
          </p>

        </motion.div>

        {/* Main Section */}

        <div className="contact-wrapper">

          {/* Left Image */}

          <motion.div
            className="contact-image"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src={contactImage}
              alt="Luxury Spa"
            />

            <div className="contact-overlay">

              <h3>Luxury Wellness Experience</h3>

              <p>
                Escape the ordinary and embrace complete relaxation with
                our signature spa therapies, premium treatments, and
                tranquil atmosphere.
              </p>

            </div>

          </motion.div>

          {/* Right Form */}

          <motion.div
            className="contact-form-area"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <ContactForm />

          </motion.div>

        </div>

        {/* Bottom Contact Information */}

        <ContactInfo />

      </div>

    </section>
  );
}