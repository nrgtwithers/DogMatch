import React from "react";
import "./style.css";

function PetfinderResults(props) {
    return (
        // <div id="petfinderResults" >
        <ul className="list-group search-results" style={{paddingRight: 50, paddingLeft: 50 }}>
            {props.AdoptionResults.map((result, index) => (
                <li key={index} className="list-group-item">
                    <div className="row">
                    <div className="col-4"></div>
                        <div className="col-1 image">
                            <img alt="dog" src={result.media.photos.photo[0].$t} />
                        </div>
                        <div className="col-4 info">
                            <h3 className="breed">{result.name.$t}</h3>
                            <p><strong>Age:</strong> {result.age.$t}</p>
                            <p><strong>Breed:</strong> {result.breeds.breed.$t}</p>
                            <p><strong>Contact:</strong> {result.contact.email.$t}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PetfinderResults;
