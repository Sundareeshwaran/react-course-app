import React from "react";
import { motion } from "motion/react";
import { links } from "../assets/list";

const Links = () => {
  return (
    <div className="mx-auto mt-20 w-fit">
      {links.map((item) => (
        <motion.div
          whileHover={{ translateY: -2, scale: 1.1 }}
          whileTap={{ scale: 1 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          key={item.id}
          className="bg-white w-[700px] mb-3 rounded-lg"
        >
          <div className="flex px-6 py-3 gap-5">
            <div className="w-[150px] h-[70px] bg-gradient-to-tl from-cyan-500 to-blue-500 flex justify-center items-center rounded-lg">
              <svg
                class="drop-shadow-xl fill-slate-200"
                width="30"
                height="30"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z"
                ></path>
              </svg>
            </div>
            <a href={item.link} target="_blank">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <p className="font-light text-slate-400">Video description</p>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Links;
