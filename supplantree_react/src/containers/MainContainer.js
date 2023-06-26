// Package and CSS imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/"/>
          <Route path="/plant" element={<PlantContainer/>}/>
          <Route path="/learn" element={<LearnContainer/>}/>
          <Route path="/results" element={<ResultContainer/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/account" element={<AccountPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/create-account" element={<CreateAccountPage/>}/>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );

export default MainContainer;
