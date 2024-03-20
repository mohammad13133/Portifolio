import React from "react";

function Link({ children }) {
  return (
    <a
      href={`#${children}`}
      className="transition-colors duration-500 hover:text-color-1"
    >
      {children}
    </a>
  );
}

export default Link;
