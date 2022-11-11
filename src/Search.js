import React from "react";

import "./style.css";

export default function Search() {
  return (
    <form className="search-form">
      <input type="text" id="search-city" placeholder="Search a city.." />
      <input type="submit" class="submit" value="🔎" />
    </form>
  );
}
