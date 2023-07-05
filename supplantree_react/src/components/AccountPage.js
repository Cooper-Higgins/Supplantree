import React from "react";
import { motion } from "framer-motion";

const Account = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-300 to-green-500">
      <div>
        <motion.h1
          className="text-6xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Account
        </motion.h1>
      </div>

      <div className="flex justify-center gap-8 p-4 mt-12 pb-12">
        <motion.div
          className="bg-pink-200 border-4 border-white basis-1/3 rounded-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <h1 className="text-center text-4xl">Scott Hynd</h1>
        </motion.div>
        <div className="flex flex-col basis-2/3 gap-8">
          <motion.div
            className="bg-slate-300 border-4 border-white rounded-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl">Your Statistics</h1>
              <ul className="flex flex-col gap-4 text-lg">
                <li>You've planted ten trees in total</li>
                <li>
                  Your trees are drawn from three species: Scots Pine, Alder,
                  and Grey Willow
                </li>
                <li>
                  You've planted in two regions: Central Scotland and South-East
                  Scotland
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="bg-slate-300 border-4 border-white rounded-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl">Your Details</h1>
              <ul className="flex flex-col gap-4 text-lg">
                <li>Email Address: scott.hynd@gmail.com</li>
                <li>Username: PerfectPlanter73</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Account;
