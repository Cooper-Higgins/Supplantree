import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Request from "../../helpers/request";
import Login from "../Login/LoginPage";
import ResultCarousel from "../Plant-Page/ResultCarousel";
import { motion } from "framer-motion";

const TreeForm = ({ postTree, putUser, data, users, setUsers, getUsers }) => {
  const pause = useNavigate();
  const [trees, setTrees] = useState([]);
  const [soils, setSoils] = useState(null);
  const [area, setArea] = useState(null);
  const handleTreeChange = (event) => {
    setTrees({ ...trees, [event.target.name]: event.target.value });
  };
  const areaOptions = data.locations.map((location, index) => {
    return (
      <option key={index} value={index} soil={location.soil}>
        {location.name}
      </option>
    );
  });
  const soilOptions = Object.keys(data.trees[0]["soil"]).map((soil, index) => {
    return (
      <option key={index} value={index}>
        {soil}
      </option>
    );
  });
  const handleAreaChange = (event) => {
    // console.log(event.target.value);
    const index = event.target.value;
    const selectedArea = areaOptions[index].props.children;
    const areaSoil = areaOptions[index].props.soil;
    setArea(selectedArea);
    setSoils(areaSoil);
  };
  console.log(soils);
  const handleSoilChange = (event) => {
    // console.log(event.target.value);
    const index = event.target.value;
    const selectedSoil = soilOptions[index].props.children;
    setSoils(selectedSoil);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let plants = data.trees;
    let foundTrees = [];
    for (let item of plants) {
      if (item.soil[soils]) {
        foundTrees.push(item);
      }
    }
    console.log("foundTrees", foundTrees);
    setTrees(foundTrees);
    console.log(trees);
  };

  return (
    <div className="flex flex-col">
      <motion.h1
        className="text-4xl md:text-6xl p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        Find Your Tree
      </motion.h1>
      <form
        className="flex flex-col gap-4 place-self-center w-1/2 mt-10"
        onSubmit={handleSubmit}
      >
        <motion.select
          className="bg-pink-200 border-4 rounded-lg"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          defaultValue={"select-area"}
          onChange={handleAreaChange}
        >
          <option disabled value="select-area">
            Select an area
          </option>
          {areaOptions}
        </motion.select>
        <motion.select
          className="bg-pink-200 border-4 rounded-lg"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          defaultValue={"select-soil"}
          onChange={handleSoilChange}
        >
          <option disabled value="select-soil">
            Select a soil
          </option>
          {soilOptions}
        </motion.select>
        <br />
        <br />
        <motion.button
          className="bg-slate-300 border-4 m-4 w-36 p-2 rounded-lg place-self-center shadow-lg shadow-gray-600 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          type="submit"
        >
          Submit
        </motion.button>
      </form>
      {trees.length > 0 && (
        <ResultCarousel
          foundTrees={trees}
          postTree={postTree}
          users={users}
          setUsers={setUsers}
          putUser={putUser}
          getUsers={getUsers}
        />
      )}
    </div>
  );
};
export default TreeForm;
