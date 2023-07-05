import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    
    const handleLoginOrLogout = () => {
        if (isAuthenticated) {
          logout();
        } else {
          loginWithRedirect();
        }
      };
    
      return (
        <button onClick={handleLoginOrLogout}>
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>
      );
    };
    
    export default LoginButton;