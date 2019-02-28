import React from "react";
import "../style.css";

function Video() {
    return (
        <video autoPlay muted loop id="vidThree">
            <source src="./assets/search.mp4" type="video/mp4" />
        </video>
    );
}

export default Video;