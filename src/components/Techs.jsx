import React from "react";
import { Icon } from "./Icon";
import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiMysql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { Skill } from "./Skill";

export const Techs = () => {
  const techsFrontEnd = [
    { imp: SiJavascript, title: "JavaScript", color: "text-yellow-400" },
    { imp: SiReact, title: "React", color: "text-blue-400" },
    { imp: SiHtml5, title: "HTML5", color: "text-orange-600" },
    { imp: SiCss3, title: "CSS3", color: "text-blue-500" },
    { imp: SiTailwindcss, title: "Tailwind", color: "text-blue-300" },
  ];

  const techsBackEnd = [
    {
      imp: "",
      title: "Java",
      color: "devicon-java-plain text-white-500",
      devicon: true,
    },
    { imp: SiSpring, title: "Spring", color: "text-green-600" },
    { imp: SiSpringboot, title: "SpringBoot", color: "text-green-600" },
    { imp: SiRedis, title: "Redis", color: "text-red-500" },
  ];

  const techsDatabase = [
    { imp: SiMysql, title: "MySql", color: "text-blue-500" },
    { imp: SiPostgresql, title: "PostgreSql", color: "text-blue-600" },
    { imp: SiMongodb, title: "MongoDB", color: "text-green-600" },
  ];

  const tools = [
    { imp: SiGit, title: "Git", color: "text-orange-600" },
    { imp: SiGithub, title: "Github", color: "text-white" },
    { imp: SiDocker, title: "Docker", color: "text-blue-500" },
    { imp: SiPostman, title: "Postman", color: "text-orange-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Skill title={"Back-end"} techs={techsBackEnd} />
      <Skill title={"Bancos de dados"} techs={techsDatabase} />
      <Skill title={"Front-end"} techs={techsFrontEnd} />
      <Skill title={"Ferramentas"} techs={tools} />
    </div>
  );
};
