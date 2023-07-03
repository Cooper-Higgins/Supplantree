import React from "react";
import TreeCard from "./TreeCard";

const CarouselCard = ({
  tree,
  postTree,
  users,
  setUsers,
  putUser,
  getUsers,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tree);
    postTree(tree);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center bg-pink-200 rounded-3xl border-8 border-white m-10 w-3/4 md:w-1/2 shadow-lg shadow-gray-600">
        <form onSubmit={handleSubmit}>
          <br />
          <div className="flex flex-col justify-center p-2 gap-4">
            <p className="place-self-center text-3xl">{tree.species}</p>
            <img
              className="w-10/12 place-self-center md:w-8/12 m-2 p-1 rounded-3xl"
              src={tree.image}
              alt="placeholder"
            ></img>
            <div className="flex justify-evenly">
              <p className="place-self-center">Maximum Height: {tree.size}m</p>
              <p className="place-self-center">Maximum Age: {tree.age} Years</p>
            </div>
            <p className="place-self-center text-center">{tree.nature}</p>
            <button
              className="place-self-center border-4 border-white bg-slate-300 p-2 rounded-xl shadow-lg shadow-gray-600 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110"
              type="submit"
            >
              I've planted this!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarouselCard;
