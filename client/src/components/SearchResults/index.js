import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map((result,index) => (
        <li key={index} className="list-group-item">
          <img alt="Dog" src={result.image} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
