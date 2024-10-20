import React, { useState } from "react";
import ireturn from "../images/ireturn.png";
import PScore from "../images/PSCore.png";
import smartOffice from "../images/smartOffice.png";
import Hardware from "../images/HardwareProject.png";
import nodejs from "../images/nodejs.png";
import travelPlanner from "../images/travelPlanner.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      img: PScore,
      title: "PScore",
      description:
        "Software Graduatian Project,PScore is a comprehensive system for managing sports teams...",
      link: "https://github.com/mohammad13133/PScore",
      details: "",
    },
    {
      img: smartOffice,
      title: "Smart Office",
      description:
        "Smart Office is designed to streamline office management...",
      link: "https://github.com/yourprofile/smartoffice",
    },
    {
      img: ireturn,
      title: "iReturn",
      description:
        "In this App, I added some new features and solved existing problems.",
      link: "https://play.google.com/store/apps/details?id=ireturn.app",
    },
    {
      img: Hardware,
      title: "Hardware Project",
      description:
        "We build a compleate production line using arduino and other Hardware components",
      link: "https://drive.google.com/drive/folders/1VSdZnbPxyvoXnKYyLUlkupl4jWrjexrf?fbclid=IwY2xjawEhV09leHRuA2FlbQIxMAABHdPtPaUPZDfjizL2jCihk6bYkNYV33A7WY_SxtZWSSOwytJ6lE-quBRjrw_aem_Mj2jJdaTRZLz4tdLsMB5wA",
    },
    {
      img: nodejs,
      title: "EcoTrack",
      description:
        "EcoTrack is a Node.js project for tracking ecological impact...",
      link: "https://github.com/mohammad13133/EcoTrack",
    },
    {
      img: travelPlanner,
      title: "travel Planner",
      description: "Uadcity nonodegree Final Project.",
      link: "https://github.com/mohammad13133/capstone-travelApp",
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
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

const Project = ({ img, title, description, link }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-md group reveal-left-projects">
      <img
        src={img}
        className="h-[250px] w-[300px] object-fill transition-transform duration-300 transform group-hover:scale-105"
        alt={title}
      />
      <div className="absolute bottom-0 left-0 text-center w-full h-full flex flex-col justify-center items-center bg-gradient-to-t from-color-2 to-transparent transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
        <p className="font-bold text-white text-4xl">{title}</p>
        <p className="text-white">{description}</p>
        <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center p-4 mt-2">
          <a href={link} target="_blank">
            <i className="ri-external-link-line text-black"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
