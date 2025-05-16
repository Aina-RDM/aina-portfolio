import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const words = ["Web", "Mobile"];

export default function Accueil() {
  useEffect(() => {
    document.title = "Accueil | Portfolio";
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl w-full"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-mono">
          Salut, je suis Aina Fitahina
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mb-6 font-mono">
          Développeur <span className="text-blue-400">{words[index]}</span> passionné par le design, les interactions humaines et les expériences numériques fluides.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-white text-black rounded-full font-mono hover:bg-gray-300 transition"
          >
            Voir mes projets
          </a>
          <a
            href="/CV_Aina_Fitahina.pdf"
            download
            className="inline-block px-6 py-3 border border-white text-white rounded-full font-mono hover:bg-white hover:text-black transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </div>
  );
}
