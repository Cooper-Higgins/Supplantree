import React from 'react';
import TreeCard from "../Plant-Page/TreeCard"
import CarouselCard from './CarouselCard';

const ResultCarousel = ({ foundTrees, postTree, users, setUsers, putUser }) => {
  if (!foundTrees || foundTrees.length === 0) {
    return <p>No trees found.</p>;
  }

  console.log(foundTrees);

  return (
    <div>
      <h2>Found Trees:</h2>
        {foundTrees.map((tree) => (
          <CarouselCard tree={tree} postTree={postTree} users={users} setUsers={setUsers} putUser={putUser}/>
        ))}
    </div>
  );
};

export default ResultCarousel;