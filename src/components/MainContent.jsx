import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { Techs } from "./Techs";

export const MainContent = () => {
  const github = "https://github.com/HenriqueLopes-dev";
  return (
    <main className="flex-1 p-8 min-h-screen bg-gradient-to-br from-gray-700 via-gray-800  to-gray-900">
      <h1 className="text-4xl font-bold">Henrique Lopes</h1>
      <h2 className="text-green-400 text-2xl mb-4">Desenvolvedor Back-end</h2>

      <p className="text-gray-300 mb-6">
        Desenvolvedor de software desde 2023, com 1 ano de estudos focados em
        desenvolvimento Back-end Java. Estudante de Ciência da computação
        ingressado na PUC Minas, atualmente estou no sexto período. Tenho
        experiência prática no ecossistema Spring (Spring Boot, Spring Data,
        Spring Security), construção de APIs RESTful, integração com bancos de
        dados (MySQL, PostgreSQL, MongoDB), cache com Redis e conteinerização
        com Docker. Busco minha primeira oportunidade profissional para aplicar
        meus conhecimentos e contribuir com soluções robustas e escaláveis.
      </p>

      <a
        className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400
        hover:to-emerald-500 text-white font-semibold py-2 px-6 rounded-full shadow-xl
        hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out w-43"
        href={github}
        target="_blank"
      >
        <SiGithub className="inline mr-2" />
        Ver Projetos
      </a>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Meus conhecimentos:</h2>
        <p className="text-gray-300 mb-6">
          Conheça as tecnologias que conheço:
        </p>

        <Techs />
      </section>
    </main>
  );
};
