import React from "react";
import LearnMap from "../components/Learn Page/LearnMap";
import { motion } from "framer-motion";

const LearnContainer = () => {
  return (
    <div className="bg-gradient-to-tr from-green-300 to-green-500 min-h-screen">
      <LearnMap />
      <div className="flex justify-center">
        <a href="http://localhost:3000/plant">
          <motion.button
            className="mb-20 bg-slate-300 border-4 border-white hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 2.0 }}
          >
            Get Planting
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default LearnContainer;
