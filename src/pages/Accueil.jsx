import React from "react";
import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/SectionProject";

const Accueil = () => {
  return (
    <div>
      <Header />
      <SectionAbout />
      <SectionProjects />
    </div>
  );
};

export default Accueil;
