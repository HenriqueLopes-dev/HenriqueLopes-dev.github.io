import React from "react";
import FotoProfile from "../assets/profile.jpeg";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const Sidebar = () => {
  const linkedin = "https://www.linkedin.com/in/henrique-luiz-almeida-lopes";

  return (
    <aside className="bg-gradient-to-b from-gray-950 via-gray-900 to-emerald-900 md:w-1/3 lg:w-1/4 p-6 flex flex-col items-center top-0 md:min-h-screen shadow-xl">
      <img
        src={FotoProfile}
        alt="Henrique Lopes"
        className="rounded-full w-40 h-40 object-cover border-4 border-green-600 mb-4 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
      />
      <h2 className="text-center font-bold text-lg mb-2">
        Sou o Henrique Lopes e sou <br />
        <span className="text-green-500">Desenvolvedor Back-end Java!</span>
      </h2>

      <div className="mt-4 text-center">
        <p className="font-semibold text-sm text-gray-300">LinkedIn</p>
        <div className="flex justify-center gap-4 text-2xl text-blue-400 mt-1">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-semibold text-sm text-gray-300">Meus contatos:</p>
        <p className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-400">
          <FaEnvelope className="text-green-400" /> ohenriquelopes.dev@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <FaPhone className="text-green-400" /> +55 35 99871-0499
        </p>
      </div>
    </aside>
  );
};
