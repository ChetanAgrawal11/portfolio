// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import { Contact } from "./components/Contact";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
    </>
  );
}

export default App;
