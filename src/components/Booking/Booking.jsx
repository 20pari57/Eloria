import { motion } from "framer-motion";
import "./Booking.css";

import BookingForm from "./BookingForm";

import bookingImage from "../../assets/images/booking/booking.jpg";

export default function Booking() {
  return (
    <section id="booking" className="booking-section">

      <div className="booking-container">

        {/* Heading */}

        <motion.div
          className="booking-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>BOOK NOW</span>

          <h2>Reserve Your Spa Experience</h2>

          <p>
            Escape the stress of everyday life and indulge in a luxurious spa
            journey tailored just for you.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="booking-wrapper">

          {/* Left Image */}

          <motion.div
            className="booking-image"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={bookingImage}
              alt="Luxury Spa"
            />

            <div className="booking-overlay">

              <h3>Luxury Wellness</h3>

              <p>
                Relax your body, refresh your mind, and restore your soul with
                our exclusive spa therapies.
              </p>

            </div>

          </motion.div>

          {/* Right Form */}

          <motion.div
            className="booking-form-area"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BookingForm />
          </motion.div>

        </div>

      </div>

    </section>
  );
}