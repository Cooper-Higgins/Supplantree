import React from "react";

const Account = () => {
  return (
    <div className="bg-green-400 min-h-screen">
      <div>
        <h1 className="text-6xl p-4">Account</h1>
      </div>
      <div className="flex justify-center gap-8 p-4">
        <div className="bg-pink-200 border-4 border-white basis-1/3 rounded-xl p-4">
          <h1>account</h1>
          <p>
            this is a really long paragraph that is being typed purely to test
            and see if this also increases the size of the paragraph hich I
            sincerely hope it will
          </p>
        </div>
        <div className="flex flex-col basis-2/3 gap-4">
          <h1 className="bg-slate-300 border-4 border-white rounded-xl p-4">
            activity
          </h1>
          <h1 className="bg-slate-300 border-4 border-white rounded-xl p-4">
            something else
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Account;
