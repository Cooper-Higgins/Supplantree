import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Request from "../../helpers/request";
import Login from "../Login/LoginPage";
import ResultCarousel from "../Plant-Page/ResultCarousel";

const TreeForm = ({ postTree, putUser, data, users, setUsers, getUsers }) => {
  const pause = useNavigate();

  const [trees, setTrees] = useState([]);
  const [soil, setSoil] = useState([]);

  const handleTreeChange = (event) => {
    setTrees({ ...trees, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   postTree(tree)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const retrievedTree = data;
  //       const updatedUsers = [...users]
  //       updatedUsers[0]["trees"].push(tree)
  //       setUsers(updatedUsers)
  //       putUser(updatedUsers[0])
  //       })
  //     .catch((error) => {
  //       console.error('Error occurred during tree post:', error);
  //     });
  // };

  const areaOptions = data.locations.map((location, index) => {
    return (
      <option key={index} value={index}>
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

  const handleSoilChange = (event) => {
    // console.log(event.target.value);
    const index = event.target.value;
    const selectedSoil = soilOptions[index].props.children;
    setSoil(selectedSoil);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let plants = data.trees;
    let foundTrees = [];
    for (let item of plants) {
      if (item.soil[soil]) {
        foundTrees.push(item);
      }
    }
    console.log("foundTrees", foundTrees);
    setTrees(foundTrees);
    console.log(trees);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl md:text-6xl p-6">Find Your Tree</h1>
      <form
        className="flex flex-col gap-4 place-self-center w-1/2 mt-10"
        onSubmit={handleSubmit}
      >
        <select
          className="bg-pink-200 border-4 rounded-lg"
          defaultValue={"select-area"}
        >
          <option disabled value="select-area">
            Select an area
          </option>
          {areaOptions}
        </select>
        <select
          className="bg-pink-200 border-4 rounded-lg"
          defaultValue={"select-soil"}
          onChange={handleSoilChange}
        >
          <option disabled value="select-soil">
            Select a soil
          </option>
          {soilOptions}
        </select>
        <br />
        <br />
        <button
          className="bg-pink-200 border-4 rounded-lg shadow-lg shadow-gray-600 place-self-center w-1/4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110"
          type="submit"
        >
          Submit
        </button>
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
