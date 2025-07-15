import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";

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
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-green-500 text-7xl" />
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(4.5)}
          initial="initial"
          animate="animate"
        >
          <DiRedis className="text-red-700 text-7xl" />
        </motion.div>
        <motion.div
          className="p-4 border-4 rounded-2xl border-neutral-800"
          variants={iconVariant(5.5)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-green-400 text-7xl" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
