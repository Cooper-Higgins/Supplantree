import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="bg-gradient-to-tr from-green-300 to-green-500 flex flex-col md:flex-row">
      <div className="flex flex-col m-4 rounded-3xl">
        <div className="flex justify-center">
          <motion.h1
            className="text-4xl md:text-6xl p-1 md:p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            About Us
          </motion.h1>
        </div>
        <motion.h1
          className="text-xl md:text-3xl p-6 md:p-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Learn more about our development team!
        </motion.h1>
      </div>
      <div className="flex flex-col m-6 gap-8 flex-wrap">
        <motion.div
          className="flex flex-col md:flex-row bg-pink-200 border-8 border-white rounded-3xl shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-full"
            src="./images/richard.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-5 md:gap-10 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">
              Richard Dalrymple
            </h1>
            <p className="text-lg md:text-xl font-light">
              Richard comes to Supplantree from an artistic background, with an
              Honours Degree in Contemporary Art Practice under his belt. If you
              are seeing or interacting with it, the odds are he had a hand in
              it!
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 border-8 border-white rounded-3xl shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 0.4 }}
        >
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-full"
            src="./images/zoe.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-5 md:gap-10 m-8 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Zoe Eustace</h1>
            <p className="text-lg md:text-xl">
              With a background in business decarbonisation, Zoe leverages
              climate model knowledge with her back-end skills, to build out the
              business logic for Supplantree.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row bg-pink-200 border-8 border-white rounded-3xl shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, duration: 0.4 }}
        >
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-full"
            src="./images/neil.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-5 md:gap-10 m-8 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Neil Hutton</h1>
            <p className="text-lg md:text-xl font-extralight">
              Neil's affinity for back-end engineering powers the data flow
              through Supplantree - there's magic going on behind the scenes,
              and Neil's conducting.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 border-8 border-white rounded-3xl shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 3.5, duration: 0.4 }}
        >
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-full"
            src="./images/jamie.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center gap-5 md:gap-10 m-8 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Jamie Cooper-Higgins
            </h1>
            <p className="text-lg md:text-xl text-center">
              With a product management background, Jamie brings a
              customer-first perspective to Supplantree, and helps bring the
              vision to life.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
