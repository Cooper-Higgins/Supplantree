import React from "react";
import TreeCard from "../Plant-Page/TreeCard";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ResultCarousel = ({ foundTrees, postTree, users, setUsers, putUser, getUsers }) => {
  if (!foundTrees || foundTrees.length === 0) {
    return <p>No trees found.</p>;
  }
  console.log(foundTrees);
  console.log(foundTrees[0].species);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <Slider {...settings}>
        {foundTrees.map((tree) => (
          <CarouselCard tree={tree} postTree={postTree} getUsers={getUsers}/>
        ))}
      </Slider>
    </div>
  );
};
export default ResultCarousel;