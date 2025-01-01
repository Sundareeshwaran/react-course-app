import React from "react";
import { lists } from "../assets/list";
import { motion } from "motion/react";

const Course = () => {
  return (
    <div className="flex justify-center gap-10">
      {lists.map((item) => (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          key={item.id}
          className="w-fit bg-white rounded-xl mt-10 pb-5"
        >
          <div className="bg-slate-900 rounded-t-xl text-center px-8 py-6">
            <h1 className="text-slate-50 text-6xl font-light">{item.price}</h1>
          </div>
          <div className="text-center text-4xl font-bold px-8 py-3">
            <h1>{item.title}</h1>
          </div>
          <hr />
          <div className="px-8 py-3">
            <h1 className="mt-5 text-2xl font-bold">We Offers</h1>
            {item.compensation.map((i, k) => (
              <ul key={k} className="list-none mt-5 text-xl/loose">
                <li className={`${i.condition || "text-slate-200"}`}>
                  {i.one}
                </li>
                <li className={`${i.condition || "text-slate-200"}`}>
                  {i.two}
                </li>
                <li className={`${i.condition || "text-slate-200"}`}>
                  {i.three}
                </li>
              </ul>
            ))}
          </div>
          <div className="bg-slate-900 text-slate-50 w-fit px-6 py-2 rounded-md cursor-pointer hover:shadow-md mx-auto mt-10">
            Buy Now!
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Course;
