import "./App.css";
import { useEffect, useRef, useState } from "react";

import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

function Image() {
  const [prog, setProg] = useState<number>(220);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const ym = useTransform(scrollYProgress, [0, 1], [220, 1200]);
  useMotionValueEvent(ym, "change", (latest) => {
    console.log(latest);
    setProg(latest);
  });

  return (
    <div
      className="flex flex-col relative h-[100vh] items-center  overflow-hidden "
      ref={ref}
    >
      <motion.div
        className="flex relative w-[40vw] h-[100vh] items-center justify-center "
        style={{ y: y }}
      >
        <img
          src="photo.jpg"
          alt="photo"
          className="relative w-full h-full object-cover -z-20"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0c090a , #0c090adc , #0c090a)",
          }}
        ></div>
        <motion.div
          id="photo"
          className="custom-mask inset-0"
          style={{
            maskSize: `${prog}px`,
            WebkitMaskPosition: `${50}%  ${20}%`,
          }}
          animate={{
            maskRepeat: "no-repeat",
            WebkitMaskPosition: `${50}%  ${20}%`,
            maskSize: `${prog}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <img
            src="photo.jpg"
            alt="photo"
            className=" w-full h-full object-cover relative"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <>
      <motion.div className="relative">
        <Image />
        <motion.div className="flex h-[120vh] bg-black"></motion.div>
      </motion.div>
    </>
  );
}

export default App;
