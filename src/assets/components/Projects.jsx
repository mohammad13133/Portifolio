import React from "react";
import ireturn from "../images/ireturn.png";
import PScore from "../images/PSCore.png";
import smartOffice from "../images/smartOffice.png";
import Hardware from "../images/HardwareProject.png";
import nodejs from "../images/nodejs.png";

function Projects() {
  const projectData = [
    {
      img: PScore,
      title: "PScore",
      description: "This is PScore",
    },
    {
      img: smartOffice,
      title: "Smart Office",
      description: "An intelligent office management system",
    },
    {
      img: ireturn,
      title: "iReturn",
      description: "A project focusing on efficient returns",
    },
    {
      img: Hardware,
      title: "Hardware Project",
      description: "A project focusing on efficient returns",
    },
    {
      img: nodejs,
      title: "EcoTrack",
      description: "A project focusing on efficient returns",
    },
  ];

  return (
    <div
      id="Projects"
      className="flex flex-col items-center justify-center bg-color-4 min-h-screen py-10"
    >
      <p className="text-5xl mb-10 reveal-top-projects">
        My <span className="text-color-1">Projects</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

const Project = ({ img, title, description }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-md group reveal-left-projects">
      {/* <div className="absolute inset-0 z-10 bg-black opacity-30"></div> */}

      <img
        src={img}
        className="h-[250px] w-[300px] object-fill transition-transform duration-300 transform group-hover:scale-105"
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-t from-color-2 to-transparent transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
        <p className="font-bold text-white text-4xl">{title}</p>
        <p className="text-white">{description}</p>
        <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center p-4 mt-2">
          <i className="ri-external-link-line text-black"></i>
        </div>
      </div>
    </div>
  );
};

export default Projects;
