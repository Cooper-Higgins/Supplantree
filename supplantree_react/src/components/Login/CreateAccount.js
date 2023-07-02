import React from "react";

const CreateAccount = () => {
  return (
    <div className="bg-green-400 min-h-screen">
      <h1 className="text-6xl p-4">Create an Account</h1>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-1/3">
          <div className="flex flex-col justify-center">
            <form className="flex flex-col justify-center bg-pink-200 border-4 border-white rounded-2xl p-10">
              <input className="p-1" type="text" placeholder="First Name" />
              <br />
              <input className="p-1" type="password" placeholder="Last Name" />
              <br />
              <input className="p-1" type="text" placeholder="Email" />
              <br />
              <input className="p-1" type="password" placeholder="Password" />
              <br />
              <button className="place-self-center bg-slate-300 border-white border-4 hover:bg-pink-200 transition duration-150 ease-out hover:ease-in hover:scale-110 m-4 p-3 w-36 rounded-lg shadow-lg">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
