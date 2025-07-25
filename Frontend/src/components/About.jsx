import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="my-20 text-4xl text-center"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl py-6 my-2">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
