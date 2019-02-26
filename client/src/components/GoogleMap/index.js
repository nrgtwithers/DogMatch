import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function NearMeButton() {
    return (
        <div id="content2">
            <Link to="/nearme">
                <button type="button" class="btn btn-light">
                    Near Me
                </button>
            </Link>
        </div>
    );
}

export default NearMeButton;
