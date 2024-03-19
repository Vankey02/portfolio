import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useWindowSize } from "../customHooks/useWindowSize";

export default function AboutMe() {
  const windowSize = useWindowSize();
  const [prog, setProg] = useState<number>(220);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const ym = useTransform(scrollYProgress, [0, 1], [220, 1000]);
  useMotionValueEvent(ym, "change", (latest) => {
    console.log("maskSize:", latest);
    setProg(latest);
  });

  return (
    <div
      className="flex flex-col relative  h-[100vh] items-center justify-end   overflow-hidden "
      ref={ref}
    >
      <motion.div
        className="flex relative w-[600px] h-[700px] items-center justify-center "
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
        <h1 className="flex text-red-500 absolute p-8 mt-20 self-center justify-self-center readex-pro">
          dfhsakj jfds jfkdsla fjfjdka jfdakjdf jfdksjakd ffjk fjdk
        </h1>
        <motion.div
          id="photo"
          className="custom-mask inset-0"
          style={{
            maskSize: `${1}px`,
            WebkitMaskPosition: `${50}%  ${38}px`,
          }}
          animate={{
            maskRepeat: "no-repeat",
            WebkitMaskPosition: `${50}%  ${38}px`,
            maskSize: `${prog}px`,
          }}
          transition={{ type: "tween" }}
        >
          <div className="flex relative w-full h-full">
            <img
              src="photo.jpg"
              alt="photo"
              className=" w-full h-full object-cover "
            />
            <h1 className="flex text-white opacity-35 absolute p-8 mt-20 z-40  self-center justify-self-center readex-pro">
              dfhsakj jfds jfkdsla fjfjdka jfdakjdf jfdksjakd ffjk fjdk
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
