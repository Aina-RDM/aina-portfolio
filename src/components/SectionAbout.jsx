import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: 1,
    type: "code",
    title: "Informations",
    content: [
      { line: 1, text: "const devInfo = {", color: "text-yellow-400" },
      {
        line: 2,
        text: "  name: \"<span class='text-blue-400'>Aina Fitahina</span>\",",
      },
      {
        line: 3,
        text: "  role: \"<span class='text-blue-400'>Développeur Web & Mobile</span>\",",
      },
      {
        line: 4,
        text: "  location: \"<span class='text-blue-400'>Madagascar</span>\",",
      },
      {
        line: 5,
        text: "  degree: \"<span class='text-blue-400'>Master II</span>\"",
      },
      { line: 6, text: "};", color: "text-yellow-400" },
    ],
  },
  {
    id: 2,
    type: "image",
    title: "Photo",
    src: "/photo_profil.jpg",
    alt: "Photo de Aina",
  },
  {
    id: 3,
    type: "code",
    title: "Divertissements",
    content: [
      { line: 1, text: "const hobbies = [", color: "text-yellow-400" },
      { line: 2, text: '  "Musique",', color: "text-pink-400" },
      { line: 3, text: '  "Echecs",', color: "text-pink-400" },
      { line: 4, text: '  "Jeux vidéo"', color: "text-pink-400" },
      { line: 5, text: "];", color: "text-yellow-400" },
    ],
  },
  {
    id: 4,
    type: "code",
    title: "Liens",
    content: [
      { line: 1, text: "const links = {", color: "text-yellow-400" },
      {
        line: 2,
        text: "  github: \"<a href='https://github.com/aina-rdm' target='_blank' class='underline text-blue-400'>https://github.com/aina-rdm</a>\",",
      },
      {
        line: 3,
        text: "  linkedin: \"<a href='https://linkedin.com/in/aina-rakotoarimanana' target='_blank' class='underline text-blue-400'>https://linkedin.com/in/aina-rakotoarimanana</a>\",",
      },
      {
        line: 4,
        text: "  whatsapp: \"<a href='https://wa.me/0347830934' target='_blank' class='underline text-blue-400'>+261 34 78 309 34</a>\"",
      },
      { line: 5, text: "};", color: "text-yellow-400" },
      { line: 6, text: "", color: "" },
    ],
  },
  {
    id: 5,
    type: "code",
    title: "Description",
    content: [
      {
        line: 1,
        text: 'Je suis <span class="text-blue-400">Aina Fitahina Rakotoarimanana</span>, passionné par le développement <span class="text-pink-400">Web et Mobile</span>.',
      },
      {
        line: 2,
        text: "Diplômé d'un <span class=\"text-blue-400\">Master II en Génie Logiciel</span> à l'IES-AV.",
      },
      {
        line: 3,
        text: 'Je crée des applications avec <span class="text-blue-400">Flutter</span>, <span class="text-blue-400">React.js</span>, <span class="text-blue-400">Node.js</span>, <span class="text-blue-400">Laravel</span> et <span class="text-blue-400">Electron</span>.',
      },
      { line: 4, text: "// Mon objectif ?", color: "text-green-400" },
      {
        line: 5,
        text: 'Construire des interfaces <span class="text-blue-400">élégantes</span>, <span class="text-blue-400">performantes</span> et <span class="text-blue-400">intuitives</span>.',
      },
      {
        line: 6,
        text: "Curieux, motivé et toujours prêt à relever de nouveaux défis.",
      },
    ],
  },
];

const fadeInFrom = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
};

const SectionAbout = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="min-h-screen bg-black text-white px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-mono">
        À propos de moi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            drag={!isMobile}
            dragConstraints={containerRef}
            variants={index % 2 === 0 ? fadeInFrom.left : fadeInFrom.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-white/5 border border-white/20 backdrop-blur-md p-4 cursor-grab ${
              index === 1
                ? "md:col-span-2 h-60 "
                : index === 0
                ? "md:col-span-4 h-60"
                : index === 4
                ? "md:col-span-6 md:h-60"
                : index === 2
                ? "md:col-span-2 h-60"
                : "md:col-span-4 md:h-60"
            }`}
          >
            <div className="flex justify-between items-center mb-2 px-2  rounded-t-md select-none">
              {/* Titre à gauche */}
              <span className="text-md text-gray-500 font-mono">
                {card.title}
              </span>

              {/* Icônes à droite */}
              <div className="flex items-center space-x-2 text-white/40">
                <Minus
                  size={13}
                  className="hover:text-gray-300 cursor-pointer"
                />
                <Square
                  size={13}
                  className="hover:text-gray-300 cursor-pointer"
                />
                <X size={18} className="hover:text-red-500 cursor-pointer" />
              </div>
            </div>

            {/* Contenu */}
            {card.type === "image" ? (
              <img
                src={card.src}
                alt={card.alt}
                className="w-44 h-44 object-cover rounded-full border-2 border-white/20 mx-auto"
              />
            ) : (
              <pre className="font-mono mt-2 overflow-auto max-h-full">
                {card.content.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-gray-500 w-6 select-none flex-shrink-0">
                      {line.line}
                    </span>
                    <span
                      className={`pl-2 ${line.color || ""} whitespace-pre-wrap`}
                      dangerouslySetInnerHTML={{ __html: line.text }}
                    ></span>
                  </div>
                ))}
              </pre>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionAbout;
