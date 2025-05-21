import React from "react";
import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionOnTouch from "../components/SectionOnTouch";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div>
      <Header />
      <SectionAbout />
      <SectionProject />
      <SectionOnTouch />
      <Footer />
    </div>
  );
};

export default Accueil;
