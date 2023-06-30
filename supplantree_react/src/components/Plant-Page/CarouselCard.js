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
        <TreeCard tree={tree} postTree={postTree} />
        <br />
      </form>
    </div>
  );
};

export default CarouselCard;
