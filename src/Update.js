import React from "react";

import "./Update.css";

export default function Update(props) {
  return (
    <li>
      {" "}
      Last update: {props.day} {props.time}
    </li>
  );
}
