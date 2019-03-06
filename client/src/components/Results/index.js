import React from "react";

function PetfinderResults(props) {
    return (
        <div id="petfinderResults" >
            {props.results.map((result) => (
                <p>Name: {result.name.$t}</p>
            ))}
        </div>
    );
}

export default PetfinderResults;
