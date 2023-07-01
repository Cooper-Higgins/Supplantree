import React from "react";

const About = () => {
  return (
    <main className="bg-green-400 flex flex-col md:flex-row">
      <div className="flex flex-col m-4 rounded-3xl">
        <div className="flex justify-center">
          <h1 className="text-6xl p-10">About Us</h1>
        </div>
        <h1 className="text-3xl p-10 text-center">
          Learn more about our dev team!
        </h1>
      </div>
      <div className="flex flex-col m-6 gap-6 flex-wrap">
        <div className="flex flex-col md:flex-row bg-pink-200 border-8 border-white rounded-3xl shadow-xl">
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-full"
            src="./images/first_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-6 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">
              Jamie Cooper-Higgins
            </h1>
            <p className="text-lg md:text-xl font-light">
              Understand Scotland's soils and which tree would best suit your
              landUnderstand Scotland's soils and which tree would best suit
              your landUnderstand Scotland's soils and which tree would best
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 border-8 border-white rounded-3xl shadow-xl">
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-full"
            src="./images/second_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-8 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Zoe Eustace</h1>
            <p className="text-lg md:text-xl">
              Choose your tree species based on our recommendations soils and
              which tree would best suit your landUnderstand Scotland's soils
              and which tree would best soils and which tree would best suit
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-pink-200 border-8 border-white rounded-3xl shadow-2xl">
          <img
            className="w-10/12 place-self-center md:w-5/12 m-2 p-4 rounded-full"
            src="./images/first_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-8 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">Neil Hutton</h1>
            <p className="text-lg md:text-xl font-extralight">
              Understand Scotland's soils and which tree would best suit your
              land soils and which tree would best suit your landUnderstand
              Scotland's soils and which tree would bestsoils and which tree
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-evenly bg-slate-300 border-8 border-white rounded-3xl shadow-2xl">
          <img
            className="w-10/12 md:w-5/12 place-self-center m-2 p-4 rounded-full"
            src="./images/second_image.jpg"
            alt="placeholder"
          ></img>
          <div className="flex flex-col justify-center text-center gap-10 md:gap-20 m-8 text-green-950">
            <h1 className="text-4xl md:text-5xl font-bold">
              Richard Dalrymple
            </h1>
            <p className="text-lg md:text-xl">
              Choose your tree species based on our recommendationssoils and
              which tree would best suit your landUnderstand Scotland's soils
              and which tree would bestsoils and which tree would best suit your
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
