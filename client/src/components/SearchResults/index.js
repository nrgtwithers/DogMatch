import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map((result,index) => (
        <li key={index} className="list-group-item">
        <div className="row">
        <div className="col-4 image">
          <img alt="Dog" src={result.image} className="img-fluid" />
          </div>
          <div className="col-8 info">
          <h3 className="breed">{result.breed}</h3>
          <p><strong>Life Expectancy:</strong> {result.lifeSpan}</p>
          <p><strong>Weight:</strong> {result.weight}</p>
          <p><strong>Height:</strong> {result.height}</p>
          <p><strong>Description:</strong> {result.Description}</p>
          </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
