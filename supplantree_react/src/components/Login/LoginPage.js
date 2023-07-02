import React from "react";

const Login = () => {
  return (
    <div className="bg-green-400 min-h-screen">
      <h1 className="text-4xl md:text-6xl p-4">Login</h1>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-2/3 md:w-1/3">
          <div className="flex flex-col justify-center">
            <form className="flex flex-col justify-center bg-pink-200 border-4 border-white rounded-2xl p-10 shadow-lg shadow-gray-600">
              <input className="p-1" type="text" placeholder="Email" />
              <br />
              <input className="p-1" type="password" placeholder="Password" />
              <br />
              <button className="place-self-center bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                Login
              </button>
            </form>
            <div className="flex justify-center">
              <a href="http://localhost:3000/create-account">
                <button className="bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                  Create Account
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
