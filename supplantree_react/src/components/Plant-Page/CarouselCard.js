import React from "react";
import TreeCard from "./TreeCard";

const CarouselCard = ({ tree, postTree, users, setUsers, putUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postTree(tree);
  };

  
  return (
    <div className="flex flex-col justify-center bg-pink-200 rounded-3xl border-8 border-white m-10">
      <form onSubmit={handleSubmit}>
        <br />
        <div className="flex flex-col justify-center p-6 gap-5">
      <p className="place-self-center">{tree.species}</p>
      <img
        className="w-10/12 place-self-center md:w-8/12 m-2 p-4 rounded-3xl"
        src="./images/first_image.jpg"
        alt="placeholder"
      ></img>
      <p className="place-self-center">Maximum Height: {tree.size}</p>
      <p className="place-self-center text-center">{tree.nature}</p>
      <button
        className="place-self-center border-4 border-white bg-slate-300 p-2 rounded-xl"
        type="submit"
      >
        I've planted this!
      </button>
    </div>
      </form>
    </div>
  );
};


export default CarouselCard;
