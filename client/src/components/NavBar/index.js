import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="overlay">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">How it Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Sign up</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;
