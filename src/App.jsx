import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Competence from "./pages/Competence";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Politique from "./pages/Politique";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/skills" element={<Competence />} />
        <Route path="/projects" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Politique />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
