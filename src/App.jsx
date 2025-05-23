import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Competence from "./pages/Competence";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <div className="mx-4 sm:mx-[5%]">
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/skills" element={<Competence />} />
        <Route path="/projects" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
