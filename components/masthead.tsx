import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { url } from "inspector";
import { ScrollContext } from "./scroll-observer";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="
        min-h-screen 
        flex 
        flex-col 
        items-center 
        justify-center
        bg-pack-train
        bg-cover
        bg-no-repeat 
        bg-center
        sticky
        top-0
        -z-10
        "
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
        <Image src="/secrethorse.svg" width={700 / 2} height={150 / 2} alt="logo" />
      </div>

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(255,255,255,0.3)] text-center flex-1 flex items-center justify-center flex-col">
        <h2 className="mb-4 text-4xl xl:text-4xl tracking-tight">In a mechanized world, we have a need for living horsepower.</h2>
      </div>
      <div
        className={`flex-grow-0 items-center justify-center pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image src="/chevron-white.svg" width={100 / 3} height={80 / 3} alt="scroll down" onLoad={handleImageLoaded} />
      </div>
    </div>
  );
};

export default Masthead;
