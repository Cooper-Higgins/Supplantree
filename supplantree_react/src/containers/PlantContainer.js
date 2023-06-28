import React, { useEffect, useState } from "react";
import SoilChoiceDropdown from "../components/Plant-Page/SoilChoiceDropdown";
import ResultCarousel from "../components/Plant-Page/ResultCarousel";
import Request from "../helpers/request";
import TreeForm from "../components/Plant-Page/TreeForm";

import data from "../data.json";

const PlantContainer = () => {
  // const [trees, setTrees] = useState([])

  // useEffect(() => {
  //     getTrees()
  // },[])

  // const getTrees = () => {
  //     const request = new Request()
  //     request.get("/api/trees")
  //     .then((data) => {
  //         setTrees(data)
  //     })
  // }

  return (
    <div>
      <SoilChoiceDropdown />
      <TreeForm data={data} />
      {/* <ResultCarousel data={data.trees} /> */}
      <div className="flex justify-center my-20">
        <a href="http://localhost:3000/my-trees">
          <button className="ml-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            See my Trees
          </button>
        </a>
      </div>
    </div>
  );
};

export default PlantContainer;
