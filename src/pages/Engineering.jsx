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
      <h2 className="text-4xl font-bold mb-4 uppercase">
        {formattedDepartment} Department
      </h2>
      <p className="text-2xl text-slate-200">
        Explore the courses, faculty, and research opportunities in{" "}
        {formattedDepartment}.{" "}
      </p>
      <div>
        <span className="text-sm text-gray-800 max-w-xl underline">
          The Engineering function will cover some or all of the following
          definition within its business: Invents, researches, develops,
          designs, stimulates, controls, builds, tests, improves, validates,
          maintains and project manages: structures; machines; devices; systems;
          vehicles; components; materials;
        </span>
      </div>

      <div className="mt-10">
        <img
          src="https://risingkashmir.blr1.digitaloceanspaces.com/wp-content/uploads/2024/05/23005419/BGSBU.jpg"
          alt={formattedDepartment}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
}
export default Engineering;
