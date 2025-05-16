import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    type: "code",
    content: [
      { line: 1, text: "const dev = {", color: "text-yellow-400" },
      {
        line: 2,
        text: '  name: "<span class="text-blue-400">Aina Fitahina</span>",',
        color: "",
      },
      {
        line: 3,
        text: '  role: "<span class="text-blue-400">Développeur Web & Mobile</span>",',
        color: "",
      },
      {
        line: 4,
        text: '  location: "<span class="text-blue-400">Madagascar</span>"',
        color: "",
      },
      { line: 5, text: "};", color: "text-yellow-400" },
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
    type: "code",
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
    content: [
      { line: 1, text: "const links = {", color: "text-yellow-400" },
      {
        line: 2,
        text: '  github: "<a href="https://github.com/aina-rdm" target="_blank" class="underline text-blue-400">https://github.com/aina-rdm</a>",',
        color: "",
      },
      {
        line: 3,
        text: '  linkedin: "<a href="https://linkedin.com/in/aina-rakotoarimanana" target="_blank" class="underline text-blue-400">https://linkedin.com/in/aina-rakotoarimanana</a>"',
        color: "",
      },
      { line: 4, text: "};", color: "text-yellow-400" },
    ],
  },
];

const fadeInFrom = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
};

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
          variants={fadeInFrom.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-4 h-56 flex flex-col justify-start text-left cursor-grab font-mono"
        >
          <div className="mt-2">
            {cards[0].type === "code" && (
              <pre>
                {cards[0].content.map((line) => (
                  <div key={line.line} className="flex">
                    <span className="text-gray-500 w-6 select-none ">
                      {line.line}
                    </span>
                    <span
                      className={`pl-2 ${line.color}`}
                      dangerouslySetInnerHTML={{ __html: line.text }}
                    />
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
          variants={fadeInFrom.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-2 h-56 flex items-center justify-center cursor-grab"
        >
          <img
            src={cards[1].src}
            alt={cards[1].alt}
            className="w-40 h-40 object-cover rounded-full border-2 border-white shadow-lg"
          />
        </motion.div>

        {/* Ligne du bas */}
        <motion.div
          key={cards[2].id}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          variants={fadeInFrom.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-2 h-56 flex flex-col justify-start text-left font-mono overflow-hidden cursor-grab"
        >
          <pre>
            {cards[2].content.map((line, i) => (
              <div key={i} className="flex">
                <span className="text-gray-500 w-6 select-none">
                  {line.line}
                </span>
                <span className={`pl-2 ${line.color}`}>{line.text}</span>
              </div>
            ))}
          </pre>
        </motion.div>

        <motion.div
          key={cards[3].id}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          variants={fadeInFrom.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-4 md:col-span-4 h-56 flex flex-col justify-start text-left font-mono overflow-hidden cursor-grab"
        >
          <pre>
            {cards[3].content.map((line, i) => (
              <div key={i} className="flex">
                <span className="text-gray-500 w-6 select-none">
                  {line.line}
                </span>
                <span
                  className={`pl-2 ${line.color}`}
                  dangerouslySetInnerHTML={{ __html: line.text }}
                />
              </div>
            ))}
          </pre>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionAbout;
