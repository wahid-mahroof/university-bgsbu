import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-r from-slate-400 to-black text-white flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-50"
    >
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide uppercase text-slate-300"
      >
        Baba Ghulam shah Badshah University
      </Link>
      <div className="hidden md:flex space-x-8 text-lg ">
        <Link
          to="/"
          className="hover:text-gray-200 transition duration-300 hover:scale-125 "
        >
          Home
        </Link>
        <Link
          to="/departments"
          className="hover:text-gray-200 transition duration-300 hover:scale-125 "
        >
          Departments
        </Link>
        <Link
          to="/visit"
          className="hover:text-gray-200 transition duration-300 hover:scale-125 "
        >
          Visit
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-200 transition duration-300 hover:scale-125 "
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-6 py-6 md:hidden"
        >
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link
            to="/departments"
            className="hover:text-gray-300 transition duration-300"
          >
            Departments
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/university"
            className="hover:text-gray-300 transition duration-300"
          >
            University
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
