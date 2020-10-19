import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form" id="search-form">
        <input type="search" placeholder="  Enter city" id="city-input" />
        <button className="btn btn-primary" type="submit" id="searchButton">
          Search
        </button>
        <button className="btn btn-primary" type="submit" id="currentButton">
          Current city
        </button>
      </form>
    </div>
  );
}