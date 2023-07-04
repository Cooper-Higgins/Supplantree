import React from "react";
import Request from "../helpers/request";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyTrees = ({ users, handleDelete }) => {
  
  if (!users || !users[0] || !users[0].trees) {
    return <div>Loading...</div>;
  }

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
        <div className="flex flex-col justify-center">
        <p>{tree.species}</p>
        {console.log(users[0]["trees"])}
        <img
          className="w-10/12 md:w-8/12 place-self-center m-2 p-1 rounded-3xl"
          src={tree.image}
          alt="placeholder"
        ></img>
        <br />
        <button className="bg-slate-300 place-self-center border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600" onClick={onDelete}>Delete</button>
        </div>
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
