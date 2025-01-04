import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const saveState = (state) => {
    console.log(state);
    setState(state);
  };

  useEffect(() => {
    // Check if the device is Android and add the 'android' class to the body element
    if (/android/i.test(navigator.userAgent)) {
      document.body.classList.add("android");
    }
  }, []);

  return (
    <>
      <Header saveState={saveState} />
      <Home state={state} />
      <About />
      <Skills />
      <Project state={state} />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
