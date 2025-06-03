import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const words = ["Web", "Mobile"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayLetters, setDisplayLetters] = useState([]);
  const [phase, setPhase] = useState("in");

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let timeout;
    let interval;

    if (phase === "in") {
      setDisplayLetters([]);
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          setDisplayLetters((prev) => {
            const next = currentWord[prev.length];
            if (!next) {
              clearInterval(interval);
              timeout = setTimeout(() => setPhase("out"), 2000);
              return prev;
            }
            return [...prev, next];
          });
        }, 200);
      }, 30); // délai pour laisser le DOM vider l'affichage
    }

    if (phase === "out") {
      interval = setInterval(() => {
        setDisplayLetters((prev) => {
          if (prev.length === 0) {
            clearInterval(interval);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setPhase("in");
            return [];
          }
          return prev.slice(0, -1);
        });
      }, 150);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [phase, currentWord]);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl w-full"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-mono mt-2">
          Salut, je suis Aina Fitahina
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mb-6 font-mono">
          Développeur{" "}
          <span className="text-blue-400">
            {displayLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>{" "}
          j’aime transformer des idées en expériences numériques uniques et
          fluides.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-white text-black font-mono hover:bg-gray-300 transition"
          >
            Voir mes projets
          </a>
          <a
            href="/CV_Aina_Fitahina.pdf"
            download
            className="inline-block px-6 py-3 border border-white text-white font-mono hover:bg-white hover:text-black transition"
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
};

export default Header;
