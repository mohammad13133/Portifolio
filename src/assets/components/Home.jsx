import React, { useEffect } from "react";
import image from "../images/mohammad.jpg";
function Home() {
  return (
    <section
      id="Home"
      className="bg-color-3 w-full h-[100vh] flex flex-col justify-center items-center lg:flex-row gap-10"
    >
      <div className="flex flex-col items-center lg:items-start reveal-top  w-[600px]">
        <div className="w-[70%] font-medium text-lg flex flex-col items-center justify-center lg:items-start">
          <h3 className="">
            hello <span className="text-color-1">i'm</span>
          </h3>
          <p className="text-3xl reveal-left">
            Mohammad <span className="text-color-1">Khaled</span>
          </p>
          <h3 className="home__education">computer Engineer</h3>
          <p className="text-center text-sm lg:text-start">
            This is My portifolio that i made using react,where to show my
            projects and services.
          </p>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1gXLujNfeIeCbYUljvjtkMuNwClXcSxUi/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 bg-color-1 rounded-md transition-all hover:drop-shadow-[0_8px_10px_rgba(0,204,143,0.3)]"
            >
              My CV
            </a>
          </div>
        </div>
        <div className="mt-8 space-x-5 flex">
          <a
            href="https://github.com/mohammad13133"
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

      {/* Image with attractive shapes and effects */}
      <div className="relative flex justify-center items-center">
        {/* Background shapes */}
        {/* <div className="absolute bg-color-1 w-[250px] h-[250px] rounded-full animate-spin-slow -z-10 opacity-50"></div> */}
        <div className="absolute bg-color-2 w-[220px] h-[220px] rounded-full  z-0 opacity-75"></div>
        {/* Main image */}
        <img
          src={image}
          className="relative object-cover w-[220px] h-[220px] rounded-full border-4 border-color-1 shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}

export default Home;
