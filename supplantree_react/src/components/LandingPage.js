import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-green-300 to-green-500">
      <div className="flex justify-evenly gap-8 md:gap-4 flex-col-reverse md:flex-row pt-8">
        <div className="flex flex-col gap-8 md:gap-12 justify-center text-center md:w-5/12">
          <motion.h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Learn the Soil, Make a Change that Matters
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl m-4 font-thin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Unsure where to begin with your tree-planting journey?
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl m-4 font-thin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Here you can learn more about Scotland's soils to choose the species
            that fits best, all while documenting your growing efforts
          </motion.p>
          <motion.div
            className="flex justify-evenly mb-20"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 2.0 }}
          >
            <a href="http://localhost:3000/plant">
              <button className="bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                Get Planting!
              </button>
            </a>
            <a href="http://localhost:3000/learn">
              <button className="bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                Learn More
              </button>
            </a>
          </motion.div>
        </div>
        <img
          className="place-self-center w-6/12 md:w-5/12 mb-4 md:mb-12"
          src="./images/Anonymous_map_of_scotland.svg"
          alt="scotland map"
        ></img>
      </div>
      <div className="flex flex-col flex-wrap m-4 gap-8">
        <motion.div
          className="flex flex-col md:flex-row bg-pink-200 rounded-3xl border-8 border-white shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-3xl"
            src="./images/first_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Learn Your Land</h1>
            <p className="text-lg md:text-2xl font-extralight">
              Learn the broad range of Scotland's soils to better understand
              what and how you should be planting
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 rounded-3xl border-8 border-white shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-3xl"
            src="./images/second_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Pick the Tree</h1>
            <p className="text-lg md:text-2xl">
              From the many native species of Scotland's rich ecology, pick a
              tree based on our recommendations
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-evenly bg-pink-200 rounded-3xl border-8 border-white shadow-lg shadow-gray-600"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 5 }}
        >
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-3xl"
            src="./images/third_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">
              Grow and Flourish
            </h1>
            <p className="text-lg md:text-2xl">
              Track your planting with our in-built tracker and watch your
              digital forest grow
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center my-10">
        <motion.h1
          className="text-3xl md:text-4xl text-green-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 6 }}
        >
          Ready to get started?
        </motion.h1>
      </div>
      <motion.div
        className="flex justify-center pb-10"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 7 }}
      >
        <a href="http://localhost:3000/plant">
          <button className="ml-10 bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            Plant
          </button>
        </a>
        <a href="http://localhost:3000/learn">
          <button className="mr-10 bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            Learn
          </button>
        </a>
      </motion.div>
    </main>
  );
};

export default LandingPage;
