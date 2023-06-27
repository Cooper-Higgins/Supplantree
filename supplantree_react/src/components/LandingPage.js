import React from "react";

const LandingPage = () => {
  return (
    <main>
      <div className="flex justify-evenly m-2 mt-6 gap-8 md:gap-4 flex-col-reverse md:flex-row">
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
            <button className="bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
              Get Planting!
            </button>
            <button className="bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
              Learn More
            </button>
          </div>
        </div>
        <img
          className="place-self-center w-6/12 md:w-5/12 mb-12"
          src="./images/Anonymous_map_of_scotland.svg"
          alt="scotland map"
        ></img>
      </div>
      <div className="flex flex-col justify-center text-center gap-20">
        <div className="">
          <h1 className="text-5xl font-bold mt-20 md:mt-6">Learn Your Land</h1>
          <p className="text-3xl">
            Understand Scotland's soils and which tree would best suit your land
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold mt-20 md:mt-6">Pick the Tree</h1>
          <p className="text-3xl">
            Choose your tree species based on our recommendations
          </p>
        </div>
        <div className="">
          <h1 className="text-5xl font-bold mt-20 md:mt-6">
            Grow and Flourish
          </h1>
          <p className="text-3xl">
            Keep track of your planting with our in-built tracker
          </p>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <h1>Ready to get started?</h1>
      </div>
      <div className="flex justify-evenly my-20">
        <button className="ml-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
          Plant
        </button>
        <button className="mr-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
          Learn
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
