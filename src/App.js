import React from "react";

import "./style.css";

export default function App() {
  return (
    <div className="App">
          <h1 id="current-city">Omaha</h1>
          <h3 id="current-temp">60°C</h3>
        <span class="weather-extra">
          <img src="" alt="weather icon" id="icon" />
          <p id="temp-description" />
          <p>
            {" "}
            Wind:
            <span id="wind" />
            <br />
            Humidity:
            <span id="humidity" />
          </p>
        </span>
    </div>
  );
}
