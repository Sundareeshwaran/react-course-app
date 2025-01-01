import { motion } from "motion/react";
import React from "react";

const SignUp = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex justify-center items-center mt-28"
    >
      <div className="w-fit bg-white flex rounded-2xl">
        <div className="bg-black text-slate-50 rounded-l-2xl px-6 py-3 text-5xl font-semibold">
          SignUp
        </div>
        <div className="px-8 py-3 flex flex-col justify-between h-72 ">
          <div>
            <h1 className="text-center font-medium mb-10 text-slate-400">
              Hello, Welcome
            </h1>
            <label>Name:</label>
            <input
              className="bg-transparent border rounded-md w-96 text-xl px-2 py-1"
              type="text"
            />
          </div>
          <div className="w-fit mx-auto mb-4">
            <button className="bg-slate-900 text-slate-50 px-6 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
