import React from "react";
import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionOnTouch from "../components/SectionOnTouch";

const Accueil = () => {
  return (
    <div>
      <Header />
      <SectionAbout />
      <SectionProject />
      <SectionOnTouch />
    </div>
  );
};

export default Accueil;
