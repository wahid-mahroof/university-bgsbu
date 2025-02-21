import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export function Engineering() {
  const { department } = useParams();
  const formattedDepartment = department.replace(/-/g, " ");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">
        {formattedDepartment} Department
      </h2>
      <p className="text-lg">
        Explore the courses, faculty, and research opportunities in{" "}
        {formattedDepartment}.
      </p>
      <div className="mt-10">
        <img
          src={`/images/${department}.jpg`}
          alt={formattedDepartment}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
}
export default Engineering;
