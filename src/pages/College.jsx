import { motion } from "framer-motion";
import React from "react";

export function College() {
  const universityImages = [
    {
      src: "https://www.bgsbu.ac.in/public/assets/img/ID1.jpeg",
      caption: "Civil department ",
    },
    {
      src: "https://images.shiksha.com/mediadata/images/1533116050phpy3PuJu.png",
      caption: "Boys Hostel",
    },
    {
      src: "https://images.shiksha.com/mediadata/images/1533116066phpZd9Fsb.png",
      caption: "Old FootBall Ground ",
    },
    {
      src: "https://i.ytimg.com/vi/xqaINs73-WU/sddefault.jpg",
      caption: "New FootBall Ground",
    },
    {
      src: "https://www.bgsbu.ac.in/gallery/img/272.jpeg",
      caption: "official and senior staff",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHJoNs4Wvhpy1yO_kcqe6zP1mMIShDQsaPtHR4R5eLdY7_gkD4zxY-QiZLUNvx1DwBDc&usqp=CAU",
      caption: "senior professor ",
    },

    {
      src: "https://bgsbu.ac.in/btechdit/images/class1.jpg",
      caption: "Class Room",
    },
    {
      src: "https://www.bgsbu.ac.in/btechdere/gallery/Control_Lab.jpg",
      caption: "Laboratory",
    },

    {
      src: "https://coet.bgsbu.ac.in/images/One.jpg",
      caption: "University view",
    },
    {
      src: "https://www.bgsbu.ac.in/nrsingcolgrjr/BUILDING%20Nursing%20Rajouri.JPG",
      caption: "Department of Nursing",
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFT6TXhPsfcjvjLiGM0_xqaFsuubNlnU2m_xyWnPBifGmA8EGFz48QtygNUMnPiL6COw&usqp=CAU",
      caption: "Department Of English",
    },
    {
      src: "https://images.shiksha.com/mediadata/images/1533115982phpBXvUID.png",
      caption: "Auditorium BGSBU",
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0IqRHTHNmOlhPALGXAGAcIHpObrheBZOLg&s",
      caption: "SOET",
    },
    {
      src: "https://www.bgsbu.ac.in/depeduca/dpt-360x268.png",
      caption: "Arts And Social Science",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0aZkEdL8ydv3Zi8E5pQ3Ta0evbpjZbI9YQ&s",
      caption: "view",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU2KyA-nBCJcTI06kvRQXSaGtkEEsLrMNbA&s",
      caption: "View ",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Rays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 animate-pulse"></div>

      {/* Welcome Caption */}
      <h1 className="text-4xl text-gray-200 font-bold mb-6 relative z-10 text-center mt-20">
        WELCOME TO BGSBU
      </h1>
      <p className="text-sm mb-8  relative z-10 text-center max-w-xl text-lime-100 underline">
        A premier institution committed to excellence in education, research,
        and innovation.
      </p>
      <button className=" bg-blue-300 text-white mb-3  flex items-end justify-end text-md">
        Wait for auto scrolling
      </button>

      {/* Auto-scrolling University Images */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute w-full "
        >
          {universityImages.map((image, index) => (
            <div key={index} className="text-center mb-4">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <p className="text-3xl font-bold mt-2 border p-3 bg-gray-800 grid grid-col-1">
                {image.caption}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default College;
