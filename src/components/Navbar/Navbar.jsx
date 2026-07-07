import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import logo from "../../assets/logo.png";

const links = [

  {
    name: "Home",
    path: "#home"
  },

  {
    name: "Features",
    path: "#features"
  },

  {
    name: "About",
    path: "#about"
  },

  {
    name: "Offer",
    path: "#offer"
  },

  {
    name: "Booking",
    path: "#booking"
  },

  {
    name: "Blog",
    path: "#blog"
  },

  {
    name: "Contact",
    path: "#contact"
  }

];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <motion.nav

      // initial={{ y: -80 }}
      // animate={{ y: 0 }}
      // transition={{ duration: .8 }}

      // className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scroll
      //     ? "glass shadow-lg py-2"
      //     : "bg-transparent py-5"
      //   }`}
      className="w-full border-b bg-white"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <img

            src={logo}
            alt="logo"

            className="w-14 h-14 object-contain"

          />

          <div>

            <h1 className="text-2xl font-semibold tracking-wide text-(--primary)">

              ELORIA

            </h1>

            <p className="text-xs tracking-[4px] text-(--accent) uppercase">

              Spa & Wellness

            </p>

          </div>

        </div>

        {/* Desktop */}

        <div className="hidden lg:flex gap-10">

          {

            links.map((item) => (

              <a

                key={item.name}
                href={item.path}
                className="nav-link font-medium text-(--primary)"

              >

                {item.name}

              </a>

            ))

          }

        </div>

        {/* Button */}

        <div className="hidden lg:block">

         <button
  className="offer-btn"
  onClick={() => {
    const bookingSection = document.querySelector("#booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("Booking section not found");
    }
  }}
>
  Book Now
</button>

         

        </div>

        {/* Mobile */}

        <div

          className="lg:hidden cursor-pointer text-3xl text-(--primary)"

          onClick={() => setOpen(!open)}

        >

          {

            open

              ?

              <HiX />

              :

              <HiMenuAlt3 />

          }

        </div>

      </div>

      {/* Mobile Menu */}

      {

        open && (

          <motion.div

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            className="lg:hidden glass mt-4 rounded-xl mx-4 p-6"

          >

            {

              links.map((item) => (

                <a

                  key={item.name}

                  href={item.path}

                  className="block py-3 text-(--primary) font-medium"

                  onClick={() => setOpen(false)}

                >

                  {item.name}

                </a>

              ))

            }

            <button className="btn w-full mt-4">

              Book Now

            </button>

          </motion.div>

        )

      }

    </motion.nav>

  )

}