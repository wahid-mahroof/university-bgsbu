import React from "react";
import { motion } from "framer-motion";

const universityImages = [
  "https://www.bgsbu.ac.in/nrsingcolgrjr/BUILDING%20Nursing%20Rajouri.JPG",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3fcY2KADfzG29T3uccr80sQN0r8iqNVdXg&s",
  "https://greaterkashmir.imagibyte.sortdcdn.net/wp-content/uploads/2023/08/2016_11largeimg226_nov_2016_010228340.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2l6iCQ5vAAu8aKbJvMV46e_lpCt0bqR7sQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52PGIQTvZbhsQyvUxrBV8Jbc4TaaDBFpZiw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2WO4UY14j4-gqCkSoFgZwitelMsILcWQmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdRAFIqBcX_fYUZslChjNEnRbaxnYtPgfEQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1CT1RnNXx_9t9K22LBE_XoYkIfdAkZPIyQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0aZkEdL8ydv3Zi8E5pQ3Ta0evbpjZbI9YQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB9dnpy_k6l0YaGiVgBvSyUrgexKwZcGFVg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vmdk5Ck1wLPWmz98WqlIbX5a1uz0fRI_aw&s",
  "https://bgsbu.ac.in/images/sabrung.jpg",
  "https://coet.bgsbu.ac.in/images/One.jpg",
  "https://coet.bgsbu.ac.in/images/Two.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdP3EsJwNlKj_-c8fCWmZ67Fm_PY9HGbPGw&s",
  "https://i.ytimg.com/vi/zJuXfLe5Db8/sddefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe375mRR582f3gI8-Qp2Vr-2rfFYHIFpweVQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r1ACZ7ZJfnUkidMJxUqkVpm2QFCBE42mRaeVFxq-mrDoZAigLkL9PoKW_ixrgXJQHI4&usqp=CAU",
  "https://images.shiksha.com/mediadata/images/1533116095php1FwFOo.png",
  "https://images.shiksha.com/mediadata/images/1533116066phpZd9Fsb.png",
];

export function Home() {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIC3B_YyaM29DI7J_OKLEagj3araZH098QpH6OkPDSuQDbak8OprF0i0pt4QFuwf6Q64&usqp=CAU"
          alt="University"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1
            whileHover={{ scale: 1, x: "-3%", y: "10%" }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold uppercase"
          >
            Welcome to <span className="text-amber-200">Baba</span>{" "}
            <span className="text-gray-300">Ghulam</span>{" "}
            <span className="text-red-300">shah</span> Badshah University
          </motion.h1>
          <p className="text-xl mt-4 max-w-3xl">
            A premier institution offering world-class education and research
            facilities.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Existing Homepage Content */}

        <div className="mt-10 p-6">
          <h2 className="text-4xl font-bold text-center mb-6">Campus Tour</h2>
          <div
            className=" overflow-x-auto space-x-6 p-4 scrollbar-hide grid grid-cols-4 gap-4"
            whileHover={{ scale: 1.5, x: "50%", y: "-10%" }}
            transition={{ duration: 0.5 }}
          >
            {universityImages.map((image, index) => (
              <motion.img
                whileHover={{ scale: 1.5, x: "70%", y: "-10%" }}
                transition={{ duration: 0.5 }}
                key={index}
                src={image}
                alt="University View"
                className="w-80 h-48 object-cover rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
