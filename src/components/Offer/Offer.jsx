import OfferCard from "./OfferCard";
import { offers } from "./offerData";
import { motion } from "framer-motion";
import "./Offer.css";
export default function Offer() {
  return (
    <section id="offer" className="offer-section">

      <div className="offer-container">

        {/* Heading */}

        <motion.div
          className="offer-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>SPECIAL OFFERS</span>

          <h2>Exclusive Spa Packages</h2>

          <p>
            Indulge in luxury treatments and enjoy exclusive savings with our
            handcrafted wellness experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="offer-grid">

          {offers.map((offer, index) => (

            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <OfferCard offer={offer} />
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}