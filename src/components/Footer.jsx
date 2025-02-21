import { motion } from "framer-motion";
import React from "react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-10 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold">Baba Ghulam Badshah University</h3>
          <p className="mt-2 text-gray-400">
            Empowering education with excellence and innovation.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/departments"
                className="hover:text-yellow-400 transition"
              >
                Departments
              </a>
            </li>
            <li>
              <a
                href="/admissions"
                className="hover:text-yellow-400 transition"
              >
                Admissions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-twitter">(@bgsbuofficial)</i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-400 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Baba Ghulam shah Badshah University.
          All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
