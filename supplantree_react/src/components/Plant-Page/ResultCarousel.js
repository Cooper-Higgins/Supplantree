import React from 'react';
import TreeCard from "../Plant-Page/TreeCard"

const ResultCarousel = ({ foundTrees }) => {
  if (!foundTrees || foundTrees.length === 0) {
    return <p>No trees found.</p>;
  }

  console.log(foundTrees);

  return (
    <div>
      <h2>Found Trees:</h2>
        {foundTrees.map((tree) => (
          <TreeCard tree={tree}/>
        ))}
    </div>
  );
};

export default ResultCarousel;