import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function UserNav() {
    return (
        <div id="overlay">
            <nav className="navbar navbar-trans navbar-expand-lg navbar-light bg-clear">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/howitworks" className="nav-link">How it Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api/saved" className="nav-link">Saved Picks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Sign out</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default UserNav;
