import React from "react";
import react from "../assets/react.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-5 text-slate-800">
      <div className="text-3xl font-bold inline-flex items-center">
        <img className="w-11" src={react} alt="" /> Course
      </div>
      <div className="flex gap-16 font-semibold text-xl">
        <NavLink to="/"> About</NavLink>
        <NavLink to="/course">Courses</NavLink>
        <NavLink to="/links">Links</NavLink>
      </div>
      <div>
        <NavLink to="/signup">
          <button className="bg-black text-slate-50 font-semibold px-4 py-2 rounded-md">
            Sign Up
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
