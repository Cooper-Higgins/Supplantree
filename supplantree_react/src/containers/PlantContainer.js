import React, { useEffect, useState } from "react";
import Request from "../helpers/request";
import { useParams, Route, Routes } from "react-router-dom";
import User from "../components/User";
import TreeForm from "../components/Plant-Page/TreeForm";
import data from "../data.json";
const PlantContainer = ({ users, setUsers, getUsers, trees, setTrees }) => {
  // const [trees, setTrees] = useState(data.trees);

  const UserWrapper = ({ users, addTreeToUser }) => {
    console.log("wrapper triggers");
    const { id } = useParams();
    let foundUser = findUserById(id);
    return <User user={foundUser} addTreeToUser={addTreeToUser} />;
  };

  const findUserById = (id) => {
    let foundUser = null;
    for (let user of users) {
      if (user.id === parseInt(id)) {
        foundUser = user;
      }
    }
    return foundUser;
  };
  // const addTreeToUser = () => {
  //   const tree = trees[0];
  //   const user = users[0];
  //   user.trees.push(tree);
  //   console.log(user);
  // };
  const handleTreePost = (tree) => {
    const request = new Request();
    request
      .post("/api/trees", tree)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const retrievedTree = data;
        const updatedUsers = [...users];
        updatedUsers[0]["trees"].push(retrievedTree);
        setUsers(updatedUsers);
        console.log(updatedUsers[0]);
        handleUserPut(updatedUsers[0]);
      })
      .catch((error) => {
        console.error("Error occurred during tree post:", error);
      });
  };

  const handleUserPut = (user) => {
    console.log(user);
    const request = new Request();
    request
      .put(`/api/users/${user.id}`, user)
      .then(() => {
        getUsers();
      })
      .then(() => {
        console.log("successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <div className="bg-green-400 min-h-screen">
      <TreeForm
        data={data}
        users={users}
        setUsers={setUsers}
        postTree={handleTreePost}
        putUser={handleUserPut}
        getUsers={getUsers}
      />
      <div className="flex justify-center mt-10 p-6">
        <a href="http://localhost:3000/my-trees">
          <button className=" bg-slate-300 border-4 p-2 border-white hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 w-36 rounded-lg shadow-lg shadow-gray-600">
            See my Trees
          </button>
        </a>
      </div>
    </div>
  );
};
export default PlantContainer;
