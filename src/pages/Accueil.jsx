import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionOnTouch from "../components/SectionOnTouch";
import Contact from "./Contact";
import Competence from "./Competence";

const Accueil = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Scroll automatiquement vers la section souhaitée
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  }, [location]);

  return (
    <div>
      <Header />
      <SectionAbout />
      <Competence />
      <SectionProject />
      <SectionOnTouch />
      <Contact />
    </div>
  );
};

export default Accueil;
