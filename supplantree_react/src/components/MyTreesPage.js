import React from "react";
import Request from "../helpers/request";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyTrees = ({ users, handleDelete }) => {
  const usersTrees = users[0]["trees"].map((tree, index) => {
    const onDelete = () => {
      handleDelete(tree.id);
    };

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    };

    return (
      <motion.div
        variants={item}
        className="bg-pink-200 border-4 border-white basis-1/4 text-center rounded-xl shadow-xl shadow-gray-600 p-4 gap-6"
      >
        <p>{tree.species}</p>
        <img
          className="w-10/12 place-self-center md:w-8/12 m-2 p-1 rounded-3xl"
          src={tree.image}
          alt="placeholder"
        ></img>
        <br />
        <button onClick={onDelete}>Delete {tree.species}</button>
      </motion.div>
    );
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="bg-green-400 min-h-screen">
      <motion.h1
        className="text-4xl md:text-6xl p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Your Digital Forest
      </motion.h1>
      <motion.div
        className="flex flex-col md:flex-row flex-wrap gap-10 justify-evenly p-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {usersTrees}
      </motion.div>
    </div>
  );
};

export default MyTrees;
