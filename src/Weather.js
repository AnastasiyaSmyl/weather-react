import React from "react";
import Search from "./Search";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Update from "./Update";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="App">
      <div className="Weather">
        <Search />
        <div className="overview">
          <h1> Kyiv </h1>
          <ul>
            <Update day="Monday" time="10:00" />
            <li> Sunny </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                className="weather-symbol"
              />
              <div className="float-left">
                <strong className="currently-temperature"> 19 </strong>
                <span className="unit">
                  <a href="/"> ℃ </a>|<a href="/"> ℉ </a>
                </span>
              </div>
            </div>
          </div>
          <div className="clo-6">
            <ul>
              <Humidity value="80" />
              <Wind value="10" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
