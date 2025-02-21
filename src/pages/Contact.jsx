import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-slate-400 text-white p-6"
    >
      <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">
        Follow us on social media and stay updated with our latest news.
      </p>
      <div className="flex space-x-8 text-4xl">
        <a href="#" className="hover:text-blue-400 transition">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-blue-300 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          <FaInstagram />
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
