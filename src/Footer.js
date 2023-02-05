import React from "react";

import "./Footer.css";
export default function Footer() {
  return (
    <small className="code-link">
      <a
        href="https://github.com/AnastasiyaSmyl/weather-react"
        className="git-link"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Open-source code,{" "}
      </a>{" "}
      by Anastasiya Smyslova
    </small>
  );
}
