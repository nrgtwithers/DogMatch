import React from "react";
import "../style.css";

function Video() {
    return (
        <video autoPlay muted loop id="vidOne">
            <source src="./assets/signUp.mp4" type="video/mp4" />
        </video>
    );
}

export default Video;