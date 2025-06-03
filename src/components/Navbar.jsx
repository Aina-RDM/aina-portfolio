import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      // On est sur la page d'accueil → scroll direct
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
      });
    } else {
      // Sinon, redirige vers la page d'accueil avec un état
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
    <nav className="fixed w-full bg-black bg-opacity-90 backdrop-blur-md text-white z-50 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold tracking-wider">
            <span className="text-white">&lt;Aina </span>
            <span className="text-blue-500">/&gt;</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-10">
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
                  className="cursor-pointer text-md transition hover:text-blue-400"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <span
                  key={item.link}
                  onClick={() => handleNavClick(item.link)}
                  className="cursor-pointer text-md transition hover:text-blue-400"
                >
                  {item.label}
                </span>
              )
            )}
          </div>

          {/* Menu mobile toggle */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 flex flex-col items-center space-y-2 animate-fade-in-down">
            {menus.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-blue-400"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-white hover:text-blue-400 transition text-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
