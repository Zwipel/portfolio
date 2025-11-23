import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Experiences } from "./pages/Experiences";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> |
        <Link to="/experiences">Experiences</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};
