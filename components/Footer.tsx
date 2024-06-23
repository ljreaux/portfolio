import React from "react";
import MagicButton from "./ui/MagicButton";
import { CiMail } from "react-icons/ci";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-24 min-h-64">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking to enhance <span className="text-orange">your</span>{" "}
          company&apos;s digital footprint?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me to transform your vision into reality!
        </p>
        <a href="mailto:larryreaux@gmail.com" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<CiMail />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Larry Reaux
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={profile.link}
              target="_blank"
            >
              <img
                src={profile.img}
                alt={`${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
