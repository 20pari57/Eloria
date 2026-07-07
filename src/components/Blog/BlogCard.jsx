import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";

export default function BlogCard({ blog }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        transition: { duration: 0.3 },
      }}
      className="blog-card"
    >
      {/* Image */}

      <div className="blog-image">

        <img
          src={blog.image}
          alt={blog.title}
        />

        <span className="blog-category">

          <FaTag />

          {blog.category}

        </span>

      </div>

      {/* Content */}

      <div className="blog-content">

        <div className="blog-date">

          <FaCalendarAlt />

          <span>{blog.date}</span>

        </div>

        <h3>{blog.title}</h3>

        <p>{blog.description}</p>

        <button className="read-btn">

          Read More

          <FaArrowRight className="arrow-icon" />

        </button>

      </div>

    </motion.div>
  );
}