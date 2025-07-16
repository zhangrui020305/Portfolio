import React from "react";
import logo from "../assets/RuiZhangLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img className="h-12 ml-8 w-25" src={logo} alt=""></img>
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};
