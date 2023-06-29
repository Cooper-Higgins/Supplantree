import React from "react";
import TreeCard from "./TreeCard";

const CarouselCard = ({ tree, postTree, users, setUsers, putUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postTree(tree);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TreeCard tree={tree} />
        <br />
        <button type="submit">I've planted this!</button>
      </form>
    </div>
  );
};

export default CarouselCard;
