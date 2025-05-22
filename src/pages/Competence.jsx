import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiDart,
  SiTypescript,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

const Competence = () => {
  const skills = [
    { icon: <FaHtml5 className="text-gray-300" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-gray-300" />, name: "CSS3" },
    { icon: <FaJs className="text-gray-300" />, name: "JavaScript" },
    { icon: <SiLaravel className="gray-blue-300" />, name: "Laravel" },
    { icon: <FaReact className="text-gray-300" />, name: "React" },
    { icon: <SiFlutter className="text-gray-300" />, name: "Flutter" },
    { icon: <SiDart className="text-gray-300" />, name: "Dart" },
    { icon: <FaNodeJs className="text-gray-300" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-gray-300" />, name: "Tailwind" },
    { icon: <SiMysql className="text-gray-300" />, name: "MySQL" },
    { icon: <SiPhp className="text-gray-300" />, name: "PHP" },
    { icon: <FaGitAlt className="text-gray-300" />, name: "Git" },
  ];

  return (
    <div
      id="skills"
      className="bg-black text-white px-4 sm:px-10 py-16 font-mono"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="text-5xl transition transform group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-sm mt-2 text-gray-400 group-hover:text-white transition">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competence;
