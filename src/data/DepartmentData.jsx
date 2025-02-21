import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export const DepartmentData = {
  civil: {
    name: "Civil Engineering",
    description:
      "Civil Engineering focuses on infrastructure development, including roads, bridges, and buildings.",
    images: [
      "https://www.bgsbu.ac.in/public/assets/img/ID1.jpeg",
      "https://example.com/civil2.jpg",
      "https://example.com/civil3.jpg",
    ],
    highlights: [
      "Structural Engineering",
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Water Resources Engineering",
    ],
  },
  mechanical: {
    name: "Mechanical Engineering",
    description:
      "Mechanical Engineering deals with the design, analysis, and manufacturing of mechanical systems and machines.",
    images: [
      "https://www.bgsbu.ac.in/public/assets/img/Mgmnt.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/Mgmnt.jpg",
      "https://www.bgsbu.ac.in/public/assets/img/Mgmnt.jpg",
    ],
    highlights: [
      "Thermodynamics",
      "Robotics",
      "Automobile Engineering",
      "Manufacturing Processes",
    ],
  },
  electrical: {
    name: "Electrical Engineering",
    description:
      "Electrical Engineering is the study of electrical circuits, systems, and power generation technologies.",
    images: [
      "https://www.bgsbu.ac.in/btechdere/Ee.jpg",
      "https://www.bgsbu.ac.in/btechdere/Ee.jpg",
      "https://www.bgsbu.ac.in/btechdere/Ee.jpg",
    ],
    highlights: [
      "Power Systems",
      "Renewable Energy",
      "Embedded Systems",
      "Electronics & Communication",
    ],
  },
  computer: {
    name: "Computer Science Engineering",
    description:
      "Computer Science Engineering covers programming, software development, and artificial intelligence.",
    images: [
      "https://www.bgsbu.ac.in/deparabic/images/Untitled-1-copy-2-300x119.jpg",
      "https://www.bgsbu.ac.in/deparabic/images/Untitled-1-copy-2-300x119.jpg",
      "https://www.bgsbu.ac.in/deparabic/images/Untitled-1-copy-2-300x119.jpg",
    ],
    highlights: [
      "Artificial Intelligence",
      "Cyber Security",
      "Software Development",
      "Data Science",
    ],
  },
};
export default DepartmentData;
