import { useState } from "react";
import { motion } from "framer-motion";
// import { services } from "./contactData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    // service: "",
    // date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! We'll contact you shortly. 🌿");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h6>Get In Touch</h6>

      {/* Full Name */}

      <div className="input-group">
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
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

      {/* <div className="input-group">
        <label>Select Service</label>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Choose a Service</option>

          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div> */}

      {/* Date */}

      {/* <div className="input-group">
        <label>Preferred Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div> */}

      {/* Message */}

      <div className="input-group">
        <label>Your Message</label>

        <textarea
          rows="5"
          name="message"
          placeholder="Tell us about your preferred treatment..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Button */}

      <button
        type="submit"
        className="contact-btn"
      >
        Send Message
      </button>
    </motion.form>
  );
}