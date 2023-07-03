import React from "react";
import LearnMap from "../components/Learn Page/LearnMap";

const LearnContainer = () => {
  return (
    <div className="bg-green-400 min-h-screen">
      <LearnMap />
      <div className="flex justify-center">
        <a href="http://localhost:3001/plant">
          <button className="ml-10 bg-slate-300 border-4 border-white hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            Get Planting
          </button>
        </a>
      </div>
      </div>
  );
};

export default LearnContainer;
