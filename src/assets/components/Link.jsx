import React from "react";

function Link({ children, isActive }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(children);
    const headerHeight = 50; // Adjust this value based on your header's height

    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`transition-colors duration-500 cursor-pointer ${
        isActive ? "text-color-1" : "hover:text-color-1"
      }`}
    >
      {children}
    </a>
  );
}

export default Link;
