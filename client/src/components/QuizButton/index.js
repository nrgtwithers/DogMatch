import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function QuizButton() {
    return (
        <div id="content">
            <Link to="/quiz">
                <button type="button" class="btn btn-light">
                    Take The Quiz
                </button>
            </Link>
        </div>
    );
}

export default QuizButton;
