import { motion } from "framer-motion";
import {
  FaLeaf,
  FaCrown,
  FaSpa,
  FaCheckCircle,
} from "react-icons/fa";

export default function OfferCard({ offer }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`offer-card ${
        offer.popular ? "popular-card" : ""
      }`}
    >
      {/* Most Popular */}

      {offer.popular && (
        <div className="popular-badge">
          ⭐ MOST POPULAR
        </div>
      )}

      {/* Discount */}

      <div className="discount-badge">
        {offer.discount}
      </div>

      {/* Image */}

      <div className="offer-image">

        <img
          src={offer.image}
          alt={offer.title}
        />

      </div>

      {/* Icon */}

      <div className="offer-icon">

        {offer.icon === "leaf" && <FaLeaf />}

        {offer.icon === "crown" && <FaCrown />}

        {offer.icon === "spa" && <FaSpa />}

      </div>

      {/* Title */}

      <h3>{offer.title}</h3>

      {/* Price */}

      <div className="price">

        <span className="old-price">
          {offer.oldPrice}
        </span>

        <span className="new-price">
          {offer.newPrice}
        </span>

      </div>

      {/* Features */}

      <ul>

        {offer.features.map((item, index) => (

          <li key={index}>

            <FaCheckCircle className="check-icon" />

            {item}

          </li>

        ))}

      </ul>

      {/* Button */}

      <button className="offer-btn">

        Book Now

      </button>

    </motion.div>
  );
}