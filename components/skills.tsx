import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl med:text-5xl lg:text-6xl tracking-tight font-semibold text-left">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <br />
          <div className={`${s.skillText} inline-block after:content-['_']`} style={{ opacity: opacityForBlock(progress, 1) }}>
            Nulla eu orci faucibus, vestibulum elit id, interdum est. Maecenas sodales sagittis auctor. Nullam bibendum et sapien
            in semper.
            <br />
            <br />
          </div>
          <div className={`${s.skillText} inline-block `} style={{ opacity: opacityForBlock(progress, 2) }}>
            Mauris euismod semper nisi. Nulla risus mi, egestas vel mauris id, convallis semper mi <strong>1,943</strong> massa.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
