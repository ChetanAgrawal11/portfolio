import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="container"> */} <Home />
      <Skills />
      {/* </div> */}
      <Projects />
    </>
  );
}

export default App;
