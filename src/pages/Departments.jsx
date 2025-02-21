import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const departments = [
  {
    name: "Computer Science",
    image: "https://www.bgsbu.ac.in/depcs/front%20pic.jpg",
    description: "Advanced computing and software engineering.",
  },
  {
    name: "Electrical Engineering",
    image: "https://www.bgsbu.ac.in/btechdere/Ee.jpg",
    description: "Power systems, circuits, and electrical design.",
  },
  {
    name: "Mechanical Engineering",
    image: "https://www.bgsbu.ac.in/public/assets/img/Mgmnt.jpg",
    description: "Machines, robotics, and thermal sciences.",
  },
  {
    name: "Civil Engineering",
    image: "https://www.bgsbu.ac.in/public/assets/img/ID1.jpeg",
    description: "Structural, geotechnical, and environmental engineering.",
  },
  {
    name: "Electronics & Communication",
    image:
      "https://www.bgsbu.ac.in/deparabic/images/Untitled-1-copy-2-300x119.jpg",
    description: "Embedded systems, wireless networks, and digital design.",
  },
  {
    name: "football ground",
    image: "https://i.ytimg.com/vi/xqaINs73-WU/sddefault.jpg",
    description:
      "A football ground is where passion meets the pitch uniting players and fans in the love of the game",
  },
];

export function Departments() {
  return (
    <div className="p-20">
      <h2 className="text-2xl font-extrabold text-center mb-8 underline text-black uppercase">
        Engineering Departments
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {departments.map((dept, index) => (
          <Link
            to={`/engineering/${dept.name.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl group"
          >
            <img
              src={dept.image}
              alt={dept.name}
              className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
              <p className="text-sm text-gray-300 mt-2 px-4 text-center">
                {dept.description}
              </p>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
export default Departments;
