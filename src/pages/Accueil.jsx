import React from "react";
import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionOnTouch from "../components/SectionOnTouch";
import Contact from "./Contact";
import Competence from "./Competence";

const Accueil = () => {
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
