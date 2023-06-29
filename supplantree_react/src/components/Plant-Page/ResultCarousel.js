import React from 'react';
import TreeCard from "../Plant-Page/TreeCard"
import CarouselCard from './CarouselCard';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const ResultCarousel = ({ foundTrees, postTree, users, setUsers, putUser }) => {
  if (!foundTrees || foundTrees.length === 0) {
    return <p>No trees found.</p>;
  }

  console.log(foundTrees);
  console.log(foundTrees[0].species)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };

//   return (
//     <div>
//       <h2>Found Trees:</h2>
//         {foundTrees.map((tree) => (
//           <CarouselCard tree={tree} postTree={postTree} users={users} setUsers={setUsers} putUser={putUser}/>
//         ))}
//     </div>
//   );

  return (
    <div>
      <h2> Basic Carousel Component</h2>
      <Slider {...settings}>
        {foundTrees.map((tree) => (
            <TreeCard tree={tree}/>
        ))}
      </Slider>
    </div>
  );
};

export default ResultCarousel;