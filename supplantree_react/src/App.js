import React, {useEffect, useState} from "react";
import MainContainer from "./containers/MainContainer";
import "./index.css"
import LoginButton from "./LoginButton";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },2000);
  },[])

    return (
      <div>
        <MainContainer/>
      </div>
    );
}

export default App;
