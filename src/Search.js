import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form className="Search mb-3">
      <div className="row">
        
          <input
            type="search"
            placeholder="Type a city.."
            className="form-control"
            autoComplete="off"
          />
        
        
          <button
            type="submit"
            className="search-btn"> Search </button>
          
        
      </div>
    </form>
  );
}
