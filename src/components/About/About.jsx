import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "./About.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";

import img1 from "../../assets/images/about/about1.jpg";
import img2 from "../../assets/images/about/about2.jpg";
import img3 from "../../assets/images/about/about3.jpg";
import img4 from "../../assets/images/about/about4.jpg";

const images = [img1, img2, img3, img4];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F6F1] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[var(--accent)]">
            About ELORIA
          </p>

          <h2 className="text-5xl font-bold mt-3 text-[var(--primary)]">
            Where Luxury Meets Wellness
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Slider */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              effect="fade"
              loop={true}
              pagination={{ clickable: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >

              {images.map((img, index) => (

                <SwiperSlide key={index}>

                  <img
                    src={img}
                    alt=""
                    className="w-full h-[600px] object-cover"
                  />

                </SwiperSlide>

              ))}

            </Swiper>

          </motion.div>

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold text-[var(--primary)] mb-8">
              Experience the Art of Relaxation
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              At ELORIA, wellness is more than a treatment—it's a journey.
              Every therapy is thoughtfully crafted to relax your body,
              refresh your mind, and restore inner harmony in a peaceful,
              luxurious environment.
            </p>

            <p className="text-gray-600 leading-8 mb-10">
              Our expert therapists use premium organic products and modern
              techniques to deliver personalized spa experiences that leave
              you feeling renewed and revitalized.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">

              <div>✔ Organic Products</div>

              <div>✔ Certified Therapists</div>

              <div>✔ Premium Ambience</div>

              <div>✔ Personalized Care</div>

            </div>

            <div className="flex gap-5">

              <button className="bg-[var(--primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--accent)] hover:text-black transition">
                Learn More
              </button>

              <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 rounded-full hover:bg-[var(--primary)] hover:text-white transition">
                Book Appointment
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}