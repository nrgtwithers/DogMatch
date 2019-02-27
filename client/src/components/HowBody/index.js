import React from "react";
import "./style.css";
// import { Link } from 'react-router-dom';

function howBody() {
    return (
        <div id="how-container">
        <h1 className="How">How Dog Match Works!</h1>
        <p>Welcome to Dog Match! We understand that finding your perfect furry mate can seem overwhelming. Often times we forget account for factors that may lead to a difficult transition for us and our new pets.  For example:  </p>
        <ul className = "questions">
                <li className="question">
                Will I have enough time or energy to keep my new pet entertained?
                </li>
                <li className="question">
                Do I have the right living space?
                </li>
                <li className="question">
                Does this breed require a lot medical attention?
                </li>
                <li className="question">
                Does this breed have a hard time being alone for long periods of time?
                </li>
            </ul>
            <p>Our website is designed to help you choose the breed that best fits your lifestyle or to help you make the necessary changes to fit your new pet’s needs. Just follow the instructions below and good luck on your journey! </p>
            <ol className = "instructions">
                <li className="directions"><h3>Optional: Create an account.</h3>
                </li>
                <li className="directions"><h3>Take the quiz.</h3>
                </li>
                <li className="directions">
                <h3>Review quiz results.</h3>
                </li>
                <li className="directions">
                <h3>Optional: Save results to your account.</h3>
                </li>
                <li className="directions">
                <h3>Optional: Check out the suggested locations for your breed.</h3> 
                </li>
            </ol>
            <hr />
            <h1 className="How">Watch the instructional video!</h1>
        </div>
    );
}

export default howBody;