import { useState } from "react";
import { motion } from "framer-motion";
import { services, timeSlots } from "./bookingData";

export default function BookingForm() {
  const getInitialFormData = () => {
    const selectedPackage = localStorage.getItem("selectedPackage");

    if (selectedPackage) {
      localStorage.removeItem("selectedPackage");
    }

    return {
      name: "",
      email: "",
      phone: "",
      service: selectedPackage || "",
      date: "",
      time: "",
      guests: 1,
    };
  };

  const [formData, setFormData] = useState(getInitialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Appointment Booked Successfully! 🌿");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  return (
    <motion.form
      className="booking-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3>Book Appointment</h3>

      {/* Name */}

      <div className="input-group">
        <label>Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}

      <div className="input-group">
        <label>Email Address</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone */}

      <div className="input-group">
        <label>Phone Number</label>

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Service */}

      <div className="input-group">
        <label>Select Package</label>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Choose a Package</option>

          {services.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}

      <div className="input-group">
        <label>Select Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      {/* Time */}

      <div className="input-group">
        <label>Select Time</label>

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Choose Time</option>

          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Guests */}

      <div className="input-group">
        <label>Guests</label>

        <input
          type="number"
          name="guests"
          min="1"
          max="5"
          value={formData.guests}
          onChange={handleChange}
        />
      </div>

      {/* Button */}

      <button
        type="submit"
        className="booking-btn"
      >
        Reserve Appointment
      </button>
    </motion.form>
  );
}