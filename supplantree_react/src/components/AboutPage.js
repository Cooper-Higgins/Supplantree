import React from "react";

const About = () => {
  return (
    <main className="bg-gradient-to-b from-green-400 to-green-200">
      <div className="flex justify-center">
        <h1 className="text-6xl p-10">About Us</h1>
      </div>
      <div className="flex flex-col m-6 gap-6">
        <div className="flex flex-col md:flex-row bg-slate-100 rounded-3xl">
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-full"
            src="./images/first_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">
              Jamie Cooper-Higgins
            </h1>
            <p className="text-lg md:text-2xl font-light">
              Understand Scotland's soils and which tree would best suit your
              land
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 rounded-3xl">
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-full"
            src="./images/second_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Zoe Eustace</h1>
            <p className="text-lg md:text-2xl">
              Choose your tree species based on our recommendations
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-slate-100 rounded-3xl">
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-full"
            src="./images/first_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Neil Hutton</h1>
            <p className="text-lg md:text-2xl font-extralight">
              Understand Scotland's soils and which tree would best suit your
              land
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 rounded-3xl">
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-full"
            src="./images/second_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">
              Richard Dalrymple
            </h1>
            <p className="text-lg md:text-2xl">
              Choose your tree species based on our recommendations
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
