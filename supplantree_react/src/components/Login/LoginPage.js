import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-300 to-green-500">
      <motion.h1
        className="text-4xl md:text-6xl p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Login
      </motion.h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center w-2/3 md:w-1/3">
          <div className="flex flex-col justify-center">
            <motion.form
              className="flex flex-col justify-center bg-pink-200 border-4 border-white rounded-2xl p-10 shadow-lg shadow-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <input className="p-1" type="text" placeholder="Email" />
              <br />
              <input className="p-1" type="password" placeholder="Password" />
              <br />
              <button className="place-self-center bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600">
                Login
              </button>
            </motion.form>
            <div className="flex justify-center">
              <a href="http://localhost:3000/create-account">
                <motion.button
                  className="bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 active:scale-90 m-4 p-3 w-36 rounded-lg shadow-lg shadow-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  Create Account
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
