import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./About.css";

import { aboutImages } from "./aboutData";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Heading */}

        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>ABOUT US</p>

          <h2>Where Luxury Meets Wellness</h2>
        </motion.div>

        {/* Main Content */}

        <div className="about-grid">

          {/* Left Image Slider */}

          <motion.div
            className="image-side"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="aboutSwiper"
            >
              {aboutImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="slider-image"
                  />

                  <div className="slider-overlay">
                    <h3>{item.title}</h3>

                    <p>{item.subtitle}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Right Content */}

          <motion.div
            className="content-side"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="sub-title">
              LUXURY SPA EXPERIENCE
            </span>

            <h3>
              Relax Your Mind,
              <br />
              Refresh Your Soul.
            </h3>

            <p>
              At ELORIA, we believe wellness is more than just a spa
              treatment—it is a complete journey toward inner peace,
              beauty, and relaxation. Every experience is designed to
              restore harmony between your body, mind, and soul.
            </p>

            <p>
              Our expert therapists combine traditional healing
              techniques with modern luxury care, using only premium
              organic products to deliver personalized wellness
              experiences you'll always remember.
            </p>

            <div className="features">

              <div>✔ Premium Organic Products</div>

              <div>✔ Certified Therapists</div>

              <div>✔ Luxury Ambience</div>

              <div>✔ Personalized Treatments</div>

            </div>

            <button className="learn-btn">
              Learn More →
            </button>

          </motion.div>

        </div>

        {/* Statistics */}

        <motion.div
          className="stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Counter
            end={14}
            suffix="K+"
            title="Happy Clients"
            delay={0}
          />

          <Counter
            end={20}
            suffix="+"
            title="Years Experience"
            delay={0.2}
          />

          <Counter
            end={98}
            suffix="%"
            title="Customer Satisfaction"
            delay={0.4}
          />

          <Counter
            end={25}
            suffix="+"
            title="Luxury Treatments"
            delay={0.6}
          />
        </motion.div>

      </div>
    </section>
  );
}