import React from "react";
import "./style.css";

function SecondResult(props) {
  return (
    <ul className="list-group quiz-results" style={{paddingRight: 50, paddingLeft: 50 }}>
      {props.secondResults.map((result,index) => (
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
          <div className="row">
          <div className="col-7"></div>
          <div className="col-2"><button id="quiz" onClick={()=>props.handleFormSubmit(result)} className="Save">Save as Favorite</button></div>
          {/* <div className="col-3"><button id="quiz" onClick={props.handleFormSubmit} className="Find">Find Rescue/Breeder</button></div> */}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SecondResult;
