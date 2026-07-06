import { motion } from "framer-motion";
import { services } from "./serviceData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="features"
      className="bg-[#F8F6F1] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[6px] text-(--accent)"
        >
          Our Signature Services
        </motion.h4>

        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-5xl font-bold text-(--primary)"
        >
          Relax. Refresh. Rejuvenate.
        </motion.h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          Discover our curated wellness experiences crafted to renew your
          body, calm your mind, and restore inner harmony.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}