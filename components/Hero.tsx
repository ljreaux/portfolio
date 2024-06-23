import React from "react";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaArrowCircleDown } from "react-icons/fa";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#F2613F"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#9B3922"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative margin-y-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-amber-100 max-w-80">
            Responsive Design with Next.js
          </h2>
          <TypewriterEffectSmooth
            className="text-center text-[40px] md:text-5xl lg:text-6xl py-8"
            words={"Crafting Seamless Web Experiences with Passion and Precision"
              .split(" ")
              .map((item, idx) => {
                return idx === 5 || idx === 7
                  ? { text: item, className: "text-orange" }
                  : { text: item, className: "dark:text-white text-black" };
              })}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Larry, a Fullstack Web Developer Based in Mississippi.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my Work"
              icon={<FaArrowCircleDown />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
