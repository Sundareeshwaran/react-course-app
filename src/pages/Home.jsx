import React from "react";
import { motion } from "motion/react";
import github from "../assets/github.svg";
import x_icon from "../assets/x.svg";
import fb_icon from "../assets/fb.svg";
import in_icon from "../assets/in.svg";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        className="flex justify-center mx-auto mt-32 md:mt-40 lg:mt-44 xl:mt-48 2xl:mt-52 rounded-2xl w-[700px] shadow-2xl cursor-default"
      >
        <div className="bg-black text-white rounded-s-2xl px-10 py-5 ">
          <div className="text-4xl font-bold mb-8">
            <p className="text-6xl">Welcome</p>
            <p>Developer</p>
          </div>
          <div className="gap-2 mb-5">
            <p>We are happy to announce a great React </p>
          </div>
          <p className="mb-5">
            {" "}
            Real-time project with and ensure you to make well knowledge in
            React.js
          </p>
        </div>
        <div className="bg-white rounded-e-2xl px-10 py-5">
          <p className="text-6xl font-bold mb-5">Hello </p>
          <p className="text-4xl font-semibold mb-5">Devs</p>
          <p className="text-sm mb-5">Please check our following Links</p>
          <div className="flex gap-2 mb-5">
            <img className="w-7 cursor-pointer" src={github} alt="" />
            <img className="w-7 cursor-pointer" src={in_icon} alt="" />
            <img className="w-7 cursor-pointer" src={fb_icon} alt="" />
            <img className="w-7 cursor-pointer" src={x_icon} alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
