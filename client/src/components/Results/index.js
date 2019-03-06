import React from "react";

function PetfinderResults(props) {
    return (
        <div id="petfinderResults" style={{ paddingRight: 50, paddingLeft: 50 }}>
            {props.results.map((result) => (
                <p>{result.address1.$t}</p>
            ))}
        </div>
    );
}

export default PetfinderResults;
