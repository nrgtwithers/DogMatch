import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function SearchBreedBtn() {
    return (
        <div id="content1">
            <Link to="/search">
                <button type="button" class="btn btn-light">
                    Search Breeds
                </button>
            </Link>
        </div>
    );
}

export default SearchBreedBtn;
