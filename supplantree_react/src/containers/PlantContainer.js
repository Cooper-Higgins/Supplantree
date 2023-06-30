import React, { useEffect, useState } from "react";
import Request from "../helpers/request";
import { useParams, Route, Routes } from "react-router-dom";
import User from "../components/User";
import TreeForm from "../components/Plant-Page/TreeForm";
import data from "../data.json";
const PlantContainer = () => {
  const [users, setUsers] = useState([]);
  const [trees, setTrees] = useState(data.trees);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    const request = new Request();
    request.get("/api/users").then((data) => {
      setUsers(data);
    });
  };
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
  const addTreeToUser = () => {
    const tree = trees[0];
    const user = users[0];
    user.trees.push(tree);
    console.log(user);
  };
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
        console.log("successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-green-400 min-h-screen">
      <TreeForm data={data} postTree={handleTreePost} putUser={handleUserPut} />
      <div className="flex justify-center mt-10">
        <a href="http://localhost:3000/my-trees">
          <button className=" bg-slate-300 border-4 border-white hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg">
            See my Trees
          </button>
        </a>
      </div>
    </div>
  );
};
export default PlantContainer;