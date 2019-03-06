import React from "react";

function PetfinderResults(props) {
    return (
        <div id="petfinderResults" >
            {props.results.map((result) => (
                <p>Age: {result.age.$t}</p>
            ))}
        </div>
    );
}

export default PetfinderResults;
