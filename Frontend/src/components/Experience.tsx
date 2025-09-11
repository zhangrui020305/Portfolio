import React, { useEffect, useState } from "react";
// import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import axios from "axios"

function Experience() {
  const [experience, setExperience] = useState<any>(null);
  
  useEffect(() =>{
    axios.get("http://localhost:3000/experience")
      .then(res => setExperience(res.data))
      .catch(err => console.error("Error fetching experience:",err));
  }, [])

  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h1
        className="my-20 text-4xl text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Experience
      </motion.h1>
      <div>
        {experience.map((exp, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
            >
              <p>{exp.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
            >
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-100">
                  {exp.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{exp.description}</p>
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
