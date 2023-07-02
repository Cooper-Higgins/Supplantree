import React from "react";
import Request from "../helpers/request";
import { useEffect, useState } from "react";

const MyTrees = ({ users }) => {
  const usersTrees = users[0]["trees"].map((tree, index) => {
    return (
      <div className="bg-pink-200 border-4 border-white basis-1/4 text-center rounded-xl shadow-xl shadow-gray-600 p-4 gap-6">
        <p>{tree.species}</p>
        <p>{tree.nature}</p>
      </div>
    );
  });

  return (
    <div className="bg-green-400 min-h-screen">
      <h1 className="text-6xl p-4">Your Digital Forest</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-evenly p-8">
        {usersTrees}
      </div>
    </div>
  );
};

export default MyTrees;
