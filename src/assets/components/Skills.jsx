import React from "react";
import HTML from "../images/skills/HTML.png";
import CSS from "../images/skills/CSS.png";
import REACT from "../images/skills/REACT.png";
import JS from "../images/skills/JS.png";
import TS from "../images/skills/TS.png";
import ReactNative from "../images/skills/ReactNative.png";
import tailwind from "../images/skills/tailwind.png";
import NodeJs from "../images/skills/NodeJS.png";
import GitHub from "../images/skills/GitHub.png";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen flex flex-col items-center justify-center bg-color-3 max-sm:py-10"
    >
      <p className="text-5xl mb-10 reveal-top-projects">
        My <span className="text-color-1">Skills</span>
      </p>
      <p>front End</p>
      <div className="flex gap-2 flex-wrap items-center justify-center mt-2">
        <Card img={HTML} name={"HTML"} />
        <Card img={CSS} name={"CSS"} />
        <Card img={JS} name={"java script"} />
        <Card img={REACT} name={"React"} />
        <Card img={ReactNative} name={"React Native"} />
        <Card img={tailwind} name={"tailwind"} />

        <Card img={TS} name={"type script"} />
      </div>
      <p>others</p>
      <div className="flex gap-2 flex-wrap items-center justify-center mt-2">
        <Card img={NodeJs} name={"Node Js"} />
        <Card img={GitHub} name={"Git Hub"} />
      </div>
    </section>
  );
};
const Card = ({ img, name }) => {
  return (
    <div className="bg-color-4 flex flex-col justify-center items-center p-4 w-[150px] hover:scale-105 transition-transform">
      <img className="w-[75px] h-[75px] object-contain" src={img} />
      <p>{name}</p>
    </div>
  );
};
export default Skills;
