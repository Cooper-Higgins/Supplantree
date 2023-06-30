// Package and CSS imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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



    const MainContainer = () => {

      const [users, setUsers] = useState([])
    
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

        return ( 
            <Router>
            <NavBar/>
            <div className="main-container">
              <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/plant" element={<PlantContainer/>}/>
                <Route path="/learn" element={<LearnContainer/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/my-trees" element={<MyTrees users={users}/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-account" element={<CreateAccount/>}/>
                <Route path="/users/*" element={<UserContainer data = {data}/>}/>
                <Route path="*" element={<ErrorPage/>} />
              </Routes>
            </div>
            <Footer />
          </Router>
         );
        }

    export default MainContainer;
