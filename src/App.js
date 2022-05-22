import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components.js/Home";
import About from "./Components.js/About";
import Contact from "./Components.js/Contact";
import Cards from "./Components.js/Cards";
import Errorr from "./Components.js/Error";

import "./Style.css";
import Card from "./Components.js/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="*" element={<Errorr />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
