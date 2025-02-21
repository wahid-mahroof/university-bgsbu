import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export const departmentData = {
  civil: {
    name: "Civil Engineering",
    image: "https://www.bgsbu.ac.in/public/assets/img/civil_main.jpg",
    additionalImages: [
      "https://www.bgsbu.ac.in/public/assets/img/civil1.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/civil2.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/civil3.jpg",
    ],
    description:
      "Civil Engineering involves planning, designing, and overseeing construction and maintenance of building structures and infrastructure.",
    links: [
      {
        text: "Course Details",
        url: "https://www.bgsbu.ac.in/civil-engineering",
      },
      { text: "Faculty", url: "https://www.bgsbu.ac.in/civil-faculty" },
      { text: "Research", url: "https://www.bgsbu.ac.in/civil-research" },
    ],
  },
  mechanical: {
    name: "Mechanical Engineering",
    image: "https://www.bgsbu.ac.in/public/assets/img/mechanical_main.jpg",
    additionalImages: [
      "https://www.bgsbu.ac.in/public/assets/img/mechanical1.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/mechanical2.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/mechanical3.jpg",
    ],
    description:
      "Mechanical Engineering is focused on designing and analyzing mechanical systems, including automobiles, aerospace, and industrial machinery.",
    links: [
      {
        text: "Course Details",
        url: "https://www.bgsbu.ac.in/mechanical-engineering",
      },
      { text: "Faculty", url: "https://www.bgsbu.ac.in/mechanical-faculty" },
      { text: "Research", url: "https://www.bgsbu.ac.in/mechanical-research" },
    ],
  },
  electrical: {
    name: "Electrical Engineering",
    image: "https://www.bgsbu.ac.in/public/assets/img/electrical_main.jpg",
    additionalImages: [
      "https://www.bgsbu.ac.in/public/assets/img/electrical1.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/electrical2.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/electrical3.jpg",
    ],
    description:
      "Electrical Engineering covers electrical circuits, power systems, and emerging technologies like renewable energy and automation.",
    links: [
      {
        text: "Course Details",
        url: "https://www.bgsbu.ac.in/electrical-engineering",
      },
      { text: "Faculty", url: "https://www.bgsbu.ac.in/electrical-faculty" },
      { text: "Research", url: "https://www.bgsbu.ac.in/electrical-research" },
    ],
  },
  computer: {
    name: "Computer Science Engineering",
    image: "https://www.bgsbu.ac.in/public/assets/img/computer_main.jpg",
    additionalImages: [
      "https://www.bgsbu.ac.in/public/assets/img/computer1.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/computer2.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/computer3.jpg",
    ],
    description:
      "Computer Science Engineering involves programming, data science, cybersecurity, and artificial intelligence, preparing students for IT careers.",
    links: [
      {
        text: "Course Details",
        url: "https://www.bgsbu.ac.in/computer-engineering",
      },
      { text: "Faculty", url: "https://www.bgsbu.ac.in/computer-faculty" },
      { text: "Research", url: "https://www.bgsbu.ac.in/computer-research" },
    ],
  },
};

export function DepartmentDetails() {
  const { departmentId } = useParams();
  const department = departmentData[departmentId];

  if (!department) {
    return (
      <h1 className="text-center text-3xl text-red-500">
        Department Not Found
      </h1>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-800 text-white p-10"
    >
      <h1 className="text-5xl font-bold text-center mb-6">{department.name}</h1>
      <img
        src={department.image}
        alt={department.name}
        className="w-full max-h-96 object-cover rounded-xl mb-6 shadow-lg"
      />
      <p className="text-lg text-center mb-6">{department.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {department.additionalImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={department.name}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
      <div className="mt-8 text-center">
        {department.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-blue-400 text-xl block hover:underline mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default DepartmentDetails;
