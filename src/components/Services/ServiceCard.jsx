import { motion } from "framer-motion";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl bg-white shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-72 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[var(--primary)]">
          {service.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {service.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-semibold text-[var(--accent)]">
            {service.duration}
          </span>

          <span className="text-xl font-bold text-[var(--primary)]">
            {service.price}
          </span>
        </div>

        <button className="mt-6 w-full rounded-full bg-[var(--primary)] py-3 font-medium text-white transition hover:bg-[var(--accent)] hover:text-black">
          Book Now
        </button>
      </div>
    </motion.div>
  );
}