import React from "react";

import "./Footer.css";
export default function Footer() {
  return (
    <small className="code-link">
      {" "}
      Coded by Anastasiya Smyslova,
      <a
        href="https://github.com/AnastasiyaSmyl/weather-react"
        className="git-link"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-sourced{" "}
      </a>{" "}
    </small>
  );
}
