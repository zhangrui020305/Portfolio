import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";
import { SiNestjs } from "react-icons/si";

function Technologies() {
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="pb-24 mt-20 border-b border-neutral-800">
      <motion.h1
        className="my-20 text-4xl text-center m"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(3.0)}
          initial="initial"
          animate="animate"
        >
          <SiNestjs className="text-white text-7xl "/>
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
        >
          <FaJava className="text-white-400 text-7xl" />
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(4.0)}
          initial="initial"
          animate="animate"
        >
          <SiSpring className="text-green-400 text-7xl" />
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(4.5)}
          initial="initial"
          animate="animate"
        >
          <SiMysql className="text-blue-400 text-7xl "/>
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(5.0)}
          initial="initial"
          animate="animate"
        >
          <RiJavascriptFill className="text-yellow-400 text-7xl"/>
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(5.5)}
          initial="initial"
          animate="animate"
        >
          <FaHtml5 className="text-orange-400 text-7xl"/>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
