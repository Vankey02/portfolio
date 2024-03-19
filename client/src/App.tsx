import "./App.css";
import { useEffect, useRef, useState } from "react";

import AboutMe from "./components/AboutMe";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <motion.div className="relative">
        {/* <Image /> */}
        <AboutMe />
        <motion.div className="flex h-[100vh] bg-black"></motion.div>
      </motion.div>
    </>
  );
}

export default App;
