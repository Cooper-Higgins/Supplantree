import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center my-20">
        <a href="http://localhost:3001/create-account">
          <button className="ml-10 bg-slate-200 hover:bg-slate-400 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
            Create Account
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
