import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      // Si sur la page d'accueil alors scroll direct
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    } else {
      // Sinon redirige vers la page d'accueil avec un état
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const menus = [
    { label: "Accueil", link: "home" },
    { label: "À Propos", link: "about" },
    { label: "Compétences", link: "skills" },
    { label: "Projets", link: "projects" },
    { label: "Contact", link: "contact" },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4 font-mono">
      <div className="border-t border-gray-700 my-6" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        {/* Logo */}
        <div className="text-left">
          <div className="text-2xl font-bold tracking-wider mb-2">
            <span className="text-white">&lt;Aina </span>
            <span className="text-blue-500">/&gt;</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Développeur passionné par la création d’expériences numériques
            intuitives et performantes.
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-start space-y-2">
          {menus.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.link}
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-blue-400"
                className="cursor-pointer text-sm transition hover:text-blue-400"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <span
                key={item.link}
                onClick={() => handleNavClick(item.link)}
                className="cursor-pointer text-sm transition hover:text-blue-400"
              >
                {item.label}
              </span>
            )
          )}
        </div>

        {/* Réseaux */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/aina-rakotoarimanana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/aina-rdm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/0347830934"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="flex flex-col space-y-1 text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-blue-400">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-blue-400">
              Site Web sans cookies
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Copyright */}
      <div className="flex justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Aina. Tous droits réservés.</p>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-1 hover:text-blue-400 cursor-pointer"
        >
          <FaArrowUp />
          <span>Haut de page</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
