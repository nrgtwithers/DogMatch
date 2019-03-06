import React from "react";

function PetfinderResults(props) {
    return (
        <div id="petfinderResults" >
            {props.results.map((result) => (
                <li>Name: {result.name.$t} 
                    <div id="resultImage">
                    <img alt="dog" src={result.media.photos.photo[0].$t}/>
                    </div>
                    <p>Age: {result.age.$t} </p>
                    <p>Breed: {result.breeds.breed.$t} </p>
                    <p>Contact: {result.contact.email.$t} </p>

                
                </li>

            ))}
        </div>
    );
}

export default PetfinderResults;
