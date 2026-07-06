import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/hero-video.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
       <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 uppercase tracking-[6px] text-(--accent)"
          >
          Welcome To Eloria Spa
          </motion.p> 

           <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Experience
            <br />
          Pure Relaxation
          </motion.h1> 

           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-200"
          >
            Discover premium spa therapies designed to refresh your body,
            calm your mind, and restore your natural balance. 
          </motion.p> */

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col justify-center gap-5 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="rounded-full bg-(--primary) px-8 py-4 text-white transition hover:bg-(--accent) hover:text-black">
              Book Appointment
            </button>

            <button className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black">
              Explore Services
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
}