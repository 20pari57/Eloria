import { motion } from "framer-motion";
import "./Blog.css";

import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

export default function Blog() {
  return (
    <section id="blog" className="blog-section">

      <div className="blog-container">

        {/* Heading */}

        <motion.div
          className="blog-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>WELLNESS JOURNAL</span>

          <h2>Beauty, Wellness & Lifestyle</h2>

          <p>
            Explore expert wellness tips, beauty secrets, and self-care
            inspiration designed to help you relax, rejuvenate, and embrace
            a healthier lifestyle.
          </p>
        </motion.div>

        {/* Blog Cards */}

        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <BlogCard blog={blog} />
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}