import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },2000);
  },[])

  return (
    <Router>
      {isLoading ? 
        <SplashScreen/> :
        (
          <Routes>
            <Route path="/" element={<LoginScreen/>}/>
          </Routes>
        )}
    </Router>
  );
}

export default App;
