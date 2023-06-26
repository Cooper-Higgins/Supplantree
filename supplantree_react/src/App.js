import React, {useEffect, useState} from "react";
import MainContainer from "./containers/MainContainer";
import "./index.css"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },2000);
  },[])

    return (
      
        <MainContainer/>
      
    );
}

export default App;
