import { Sparkles, Lightbulb, Code, Rocket, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Créativité",
    icon: <Sparkles className="w-8 h-8 text-blue-400" />,
    desc: "Des interfaces modernes, conçues avec passion.",
  },
  {
    title: "Solutions sur mesure",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    desc: "Chaque projet est pensé pour répondre à vos besoins.",
  },
  {
    title: "Code de qualité",
    icon: <Code className="w-8 h-8 text-green-400" />,
    desc: "Des pratiques solides, propres et maintenables à long terme.",
  },
  {
    title: "Performance & déploiement",
    icon: <Rocket className="w-8 h-8 text-pink-400" />,
    desc: "Des applications rapides, testées et prêtes à être mises en ligne.",
  },
];

const fadeInFrom = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
};

const OneTouchSection = () => {
  return (
    <div className="bg-black text-white py-20 px-6 font-mono relative z-10 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">En une touche</h2>

      {/* Cards sans animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-md border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default overflow-hidden"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        variants={fadeInFrom.left}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-24 relative max-w-6xl mx-auto bg-white/5 border border-white/20 backdrop-blur-md p-10 md:p-16 shadow-xl flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden"
      >
        <div className="flex-1 text-left z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Vous ayez une idée ou un projet concret ? <br /> Je peux vous
            accompagner.
          </h3>

          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition duration-300"
          >
            Me contacter
          </a>
        </div>

        <motion.div
          className="hidden md:block text-white z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <SendHorizonal size={72} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OneTouchSection;
