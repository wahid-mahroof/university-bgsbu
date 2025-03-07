import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import React from "react";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col max-w-auto items-center justify-center  bg-gradient-to-r from-gray-200 dark:bg-gray-900 text-white p-6 "
    >
      <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">
        Follow us on social media and stay updated with our latest news.
      </p>
      <div className="flex space-x-8 text-4xl flex-col gap-5  ">
        <a href="#" className="hover:text-blue-400 transition ml-20 ">
          <FaFacebook />
          <span className="text-sm mr-20">bgsbu offical</span>
        </a>
        <a href="#" className="hover:text-blue-300 transition ml-20">
          <FaTwitter />
          <span className="flex items-center justify-center text-sm">
            https://twitter.com/bgsbuofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor
          </span>
        </a>

        <a href="#" className="hover:text-pink-400 transition ml-20">
          <FaInstagram />
          <span className=" text-sm">
            https://www.instagram.com/bgsbuniversity_official/
          </span>
        </a>
        <a href="#" className="hover:text-pink-400 transition ml-20">
          <FaMailBulk />{" "}
          <span className=" text-sm"> university@bgsbu.ac.in</span>
        </a>
        <a href="#" className="hover:text-pink-400 transition ml-20">
          <FaPhone /> <span className="flex text-sm"> +91-1962-241002</span>
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
