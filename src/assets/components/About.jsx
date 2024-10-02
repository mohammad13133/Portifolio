import React from "react";
import image from "../images/mohammad.jpg";

function About() {
  return (
    <section
      id="About"
      className="bg-color-4 w-full h-[100vh] flex flex-col justify-center items-center lg:flex-row gap-10"
    >
      {/* Image with attractive shapes and effects */}
      <div className="relative flex justify-center items-center reveal-left-about">
        {/* Background shapes */}
        <div className="absolute bg-color-2 w-[220px] h-[220px] rounded-full animate-bounce  z-0 opacity-75"></div>
        {/* Main image */}
        <img
          src={image}
          className="relative object-cover w-[220px] h-[220px] rounded-full border-4 border-color-1 shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start w-[600px]">
        <div className="font-medium text-lg flex flex-col items-center justify-center lg:items-start">
          <h3 className="text-5xl reveal-top-about">
            About <span className="text-color-1">Me</span>
          </h3>
          <p className="">Computer Engineer.</p>
          <p className="text-center text-sm lg:text-start">
            I am Mohammad Khaled, a Computer Engineering graduate with a solid
            foundation in software development and hardware integration. I have
            hands-on experience with technologies such as React, React Native,
            Node.js, and have worked on multiple projects where I designed,
            implemented, and troubleshooted full-stack applications.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="px-4 py-2 bg-color-1 rounded-md transition-all hover:drop-shadow-[0_8px_10px_rgba(0,204,143,0.3)]"
            >
              contact
            </a>
          </div>
        </div>
        <div className="mt-8 space-x-5 flex">
          <a
            href=""
            target="_blank"
            className="clip-custom bg-color-2 flex flex-row items-center transition-transform hover:-translate-y-3"
          >
            <i className="ri-github-fill text-[24px] px-2 py-1 "></i>
          </a>
          <a
            href=""
            target="_blank"
            className="clip-custom bg-color-2 flex flex-row items-center transition-transform hover:-translate-y-3"
          >
            <i className="ri-youtube-fill text-[24px] px-2 py-1 "></i>
          </a>
          <a
            href=""
            target="_blank"
            className="clip-custom bg-color-2 flex flex-row items-center transition-transform hover:-translate-y-3"
          >
            <i className="ri-linkedin-box-fill text-[24px] px-2 py-1 "></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
