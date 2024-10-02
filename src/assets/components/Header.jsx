import React, { useEffect, useState } from "react";

import Link from "./Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
function Header() {
  const [navigation, setNavigation] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    setActiveSection("Home");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Services", "Projects", "Contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust this if needed

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Check if the scroll position is within the section's top boundary
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-20 bg-color-3 w-full h-[70px] flex items-center">
      <nav className="flex flex-row w-full items-center justify-between">
        <a className="text-lg px-3 font-semibold">
          Mohammad <span className="text-color-1">khaled</span>
        </a>
        <div>
          <ul
            className={`hidden flex-row space-x-12 px-3 text-lg font-semibold lg:flex`}
          >
            <li>
              <Link isActive={activeSection === "Home"}>Home</Link>
            </li>
            <li>
              <Link isActive={activeSection === "About"}>About</Link>
            </li>
            <li>
              <Link isActive={activeSection === "Services"}>Services</Link>
            </li>
            <li>
              <Link isActive={activeSection === "Projects"}>Projects</Link>
            </li>
            <li>
              <Link isActive={activeSection === "Contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <button
          className={`lg:hidden ${navigation ? "" : "hidden"}`}
          onClick={() => {
            setNavigation(!navigation);
          }}
        >
          <Bars3Icon className="h-6 w-6 mr-3 " />
        </button>
      </nav>
      <div
        className={`lg:hidden  fixed w-[60%] top-0 h-full bg-color-3/60 z-50 backdrop-blur-lg transition-right ${
          navigation ? "right-[-100%]" : " right-0"
        }`}
      >
        <div className="flex flex-col items-start pt-16 px-3 text-lg font-semibold lg:flex">
          <ul className="space-y-8">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <button
          className="fixed top-0 right-0 mt-4"
          onClick={() => setNavigation(!navigation)}
        >
          <XMarkIcon className="h-6 w-6 mr-3" />
        </button>
      </div>
    </header>
  );
}

export default Header;
