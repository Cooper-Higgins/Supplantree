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


    const MainContainer = () => {
        return ( 
            <Router>
            <NavBar/>
            <div className="main-container">
              <Routes>
                <Route path="/"/>
                <Route path="/plant" element={<PlantContainer/>}/>
                <Route path="/learn" element={<LearnContainer/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/my-trees" element={<MyTrees/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-account" element={<CreateAccount/>}/>
                <Route path="*" element={<ErrorPage/>} />
              </Routes>
            </div>
            <Footer />
          </Router>
         );
        }

    export default MainContainer;
