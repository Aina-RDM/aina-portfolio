import { motion } from "framer-motion";
import { useEffect } from "react";

const cards = [
  {
    id: 1,
    type: "code",
    content: [
      { line: 1, text: "const dev = {", color: "text-yellow-400" },
      { line: 2, text: '  name: "Aina Fitahina",', color: "text-green-400" },
      {
        line: 3,
        text: '  role: "Développeur Web & Mobile",',
        color: "text-blue-400",
      },
      { line: 4, text: '  location: "Madagascar"', color: "text-purple-400" },
      { line: 5, text: "};", color: "text-yellow-400" },
      { line: 6, text: "", color: "" },
      { line: 7, text: "", color: "" },
    ],
  },
  {
    id: 2,
    type: "image",
    src: "/photo_profil.jpg",
    alt: "Photo de Aina",
  },
  {
    id: 3,
    type: "text",
    content:
      "Toujours curieux, j'améliore mes compétences en UI/UX et technologies modernes pour créer des expériences mémorables.",
  },
  {
    id: 4,
    type: "text",
    content:
      "Je crois en l'élégance du code bien structuré et en l'expérience utilisateur intuitive.",
  },
];

const SectionAbout = () => {
  return (
    <div id="about" className="min-h-screen bg-black text-white py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-mono">
        À propos de moi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {/* Ligne du haut */}
        <motion.div
          key={cards[0].id}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-4 h-56 flex flex-col justify-start text-left cursor-grab"
        >
          <div className="mt-2 text-sm font">
            {cards[0].type === "code" && (
              <pre>
                {cards[0].content.map((line) => (
                  <div key={line.line} className="flex">
                    <span className="text-gray-500 w-6 select-none ">
                      {line.line}
                    </span>
                    <span className={`pl-2 ${line.color}`}>{line.text}</span>
                  </div>
                ))}
              </pre>
            )}
          </div>
        </motion.div>

        <motion.div
          key={cards[1].id}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-2 h-56 flex items-center justify-center cursor-grab"
        >
          <img
            src={cards[1].src}
            alt={cards[1].alt}
            className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-lg"
          />
        </motion.div>

        {/* Ligne du bas */}
        <motion.div
          key={cards[2].id}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-2 h-56 flex items-center justify-center text-center cursor-grab"
        >
          <p className="text-sm text-gray-200 font-mono">{cards[2].content}</p>
        </motion.div>

        <motion.div
          key={cards[3].id}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-4 h-56 flex items-center justify-center text-center cursor-grab"
        >
          <p className="text-sm text-gray-200 font-mono">{cards[3].content}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionAbout;
