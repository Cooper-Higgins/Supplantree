// Package and CSS imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import PlantContainer from "./PlantContainer";
import LearnContainer from "./LearnContainer";
import About from "../components/AboutPage";
import MyTrees from "../components/MyTreesPage";
import Account from "../components/AccountPage";
import Login from "../components/Login/LoginPage";
import CreateAccount from "../components/Login/CreateAccount";
import NavBar from "../components/NavBar";
import ErrorPage from "../components/ErrorPage";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import UserContainer from "./UserContainer";
import Request from "../helpers/request";

import data from "../data.json"
import LocationContainer from "./LocationContainer";



    const MainContainer = () => {

      const [users, setUsers] = useState([])
      const [trees, setTrees] = useState(data.trees);
      const [locations, setLocations] = useState([])
    
      useEffect(() => {
        getUsers()
      }, [])

      const getUsers = () => {
        const request = new Request()
        request.get("/api/users")
        .then((data) => {
            setUsers(data)
        })
}

      const getTrees = () => {
        const request = new Request()
        request.get("/api/trees")
        .then((data) => {
          setTrees(data)
        })
      }

      const handleTreePut = (tree) => {
        console.log(tree);
        const request = new Request();
        request
        .put(`/api/trees/${tree.id}`, tree)
        .then(() => {
          getTrees();
        })
        .then(() => {
          console.log("successful");
        })
        .catch((error) => {
          console.error(error);
        });
      }

      const handleDelete = (id) => {
        const request = new Request()
        const url = '/api/trees/' + id;
        console.log(id);
        request.delete(url)
        .then(() => {
          window.location = '/my-trees'
        })
      }

      const findTreeById = (id) => {
        let foundTree = null;
        for (let tree of trees) {
          if (tree.id === parseInt(id)) {
            foundTree = tree;
          }
        }
        return foundTree;
      };

      // const TreeDetailWrapper = () => {
      //   console.log("wrapper triggers");
      //   const {id} = useParams();
      //   let foundTree = findTreeById(id)
      //   return 
      // }

      console.log(users);
        return ( 
            <Router>
            <NavBar/>
            <div className="main-container">
              <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/plant" element={<PlantContainer users={users} setUsers={setUsers} getUsers={getUsers} trees={trees} setTrees={setTrees}/>}/>
                <Route path="/learn" element={<LearnContainer/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/my-trees" element={<MyTrees users={users} handleDelete={handleDelete}/>}/>
                <Route path="/account" element={<Account users={users}/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-account" element={<CreateAccount/>}/>
                <Route path="/users/*" element={<UserContainer data = {data}/>}/>
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/locations" element={<LocationContainer trees={trees} setTrees={setTrees} locations={locations} setLocations={setLocations} handleTreePut={handleTreePut}/>} />
              </Routes>
            </div>
            <Footer />
          </Router>
         );
        }

    export default MainContainer;
