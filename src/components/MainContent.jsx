import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMysql,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { Techs } from "./Techs";

export const MainContent = () => {
  return (
    <main className="flex-1 p-8 min-h-screen bg-gradient-to-br from-gray-700 via-gray-800  to-gray-900">
      <h1 className="text-4xl font-bold">Henrique Lopes</h1>
      <h2 className="text-green-400 text-2xl mb-4">Desenvolvedor Back-end</h2>

      <p className="text-gray-300 mb-6">
        Prazer, sou estudante de ciência da computação ingressado na PUC Minas,
        atualmente estou no sexto período...
      </p>

      <button
        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400
        hover:to-emerald-500 text-white font-semibold py-2 px-6 rounded-full shadow-xl
        hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Ver Projetos
      </button>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Meus conhecimentos:</h2>
        <p className="text-gray-300 mb-6">Conheça as tecnologias que domino:</p>

        <Techs />
      </section>
    </main>
  );
};
