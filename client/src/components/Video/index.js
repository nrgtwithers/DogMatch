import React from "react";

function Video() {
    return (
        <video autoplay muted loop id="myVideo">
            <source src="Puppy - 4740.mp4" type="video/mp4" />
        </video>
    );
}

export default Video;