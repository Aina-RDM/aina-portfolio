import { motion } from "framer-motion";

const projects = [
  {
    title: "Application d'une commande en ligne",
    techs: ["Flutter", "Open Street Map", "API"],
    image: "/captures/command_app.png",
    link: "https://github.com/Aina-RDM/E-kaly",
  },
  {
    title: "Dashboard de gestion restaurant",
    techs: ["EJS", "Node.js", "MySQL", "Electron.js"],
    image: "/captures/restaurant_dashboard.png",
    link: "https://github.com/Aina-RDM/e_kaly_electron",
  },
  {
    title: "Site cosmétique solide",
    techs: ["React.js", "TailwindCSS"],
    image: "/captures/mogly.png",
    link: "https://mogly.vercel.app",
  },
  {
    title: "Site cosmétique solide",
    techs: ["React.js", "TailwindCSS"],
    image: "/captures/raffya.png",
    link: "https://raf-fy-a.vercel.app",
  },
];

const fadeInFrom = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
};

const SectionProject = () => {
  return (
    <div id="projects" className="min-h-screen py-10 bg-black text-white px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-mono">
        Mes projets
      </h2>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto font-mono">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center bg-white/5 border border-white/20 backdrop-blur-md p-6 shadow-md hover:scale-[1.01] transition-all duration-300"
            variants={index % 2 === 0 ? fadeInFrom.left : fadeInFrom.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Texte */}
            <div className="md:w-2/3 w-full text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-white/20">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 border border-blue-400/30 text-sm font-mono px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image avec effet */}
            <motion.div
              className="md:w-1/3 w-full flex justify-center relative group"
              whileHover={{ rotateZ: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute top-2 left-2 w-full max-w-xs aspect-[4/3] bg-white/10 rounded-lg z-0"
                whileHover={{ rotateZ: -2, x: 1, y: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
              <motion.div
                className="absolute top-4 left-4 w-full max-w-xs aspect-[4/3] bg-white/5 rounded-lg z-0"
                whileHover={{ rotateZ: -1, x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full max-w-xs aspect-[4/3] object-cover rounded-lg border border-white/30 shadow-lg relative z-10"
                whileHover={{ rotateZ: -3, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/aina-rdm"
          target="_blank"
          className="inline-block px-6 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition font-mono"
        >
          Voir tout
        </a>
      </div>
    </div>
  );
};

export default SectionProject;
