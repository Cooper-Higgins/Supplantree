import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="font-Inter min-h-screen bg-gradient-to-b from-green-400 to-green-100">
      <div className="flex justify-evenly gap-8 md:gap-4 flex-col-reverse md:flex-row pt-8">
        <div className="flex flex-col gap-12 md:gap-20 justify-center text-center md:w-5/12">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl m-4">
            Learn the soil, make the change
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl m-4">
            This is me talking a little bit more about why it is good to plant a
            tree. This is another sentence in which I am continuing to talk
            about a tree.
          </p>
          <div className="flex justify-evenly">
            <a href="http://localhost:3000/plant">
          <div className="flex justify-evenly mb-20">
              <button className="bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                Get Planting!
              </button>
            </a>
            <a href="http://localhost:3000/learn">
              <button className="bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <img
          className="place-self-center w-6/12 md:w-5/12 mb-4 md:mb-12"
          src="./images/Anonymous_map_of_scotland.svg"
          alt="scotland map"
        ></img>
      </div>
      {/* top container */}

      <div className="flex flex-col flex-wrap gap-4">
        {/* second container */}

        <div className="flex flex-col md:flex-row bg-slate-100">
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4"
            src="./images/first_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Learn Your Land</h1>
            <p className="text-lg md:text-2xl font-extralight">
              Understand Scotland's soils and which tree would best suit your
              land
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300">
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4"
            src="./images/second_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Pick the Tree</h1>
            <p className="text-lg md:text-2xl">
              Choose your tree species based on our recommendations
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly bg-slate-100">
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4"
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
        </div>
      </div>
      <div className="flex justify-center my-10">
        <h1 className="text-3xl md:text-4xl text-green-950">
          Ready to get started?
        </h1>
      </div>
      <div className="flex justify-evenly my-20">
        <a href="http://localhost:3000/plant">
      <div className="flex justify-center pb-10">
          <button className="ml-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            Plant
          </button>
        </a>
        <a href="http://localhost:3000/learn">
          <button className="mr-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            Learn
          </button>
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
