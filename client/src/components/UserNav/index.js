import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-12" >
                        {loggedIn ? (
                            <nav className="navbar navbar-trans navbar-expand-lg navbar-light bg-clear">
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
            
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" onClick={this.logout} className="nav-link">Logout</Link>
                                    </li>
                                </ul>
            
                            </div>
                        </nav>
                            // <section className="navbar-section">
                            //     <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                            //         <span className="text-secondary">Logout</span></Link>

                            // </section>
                        ) : (
                            <nav className="navbar navbar-trans navbar-expand-lg navbar-light bg-clear">
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
            
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link">Sign up</Link>
                                    </li>
                                </ul>
            
                            </div>
                        </nav>

                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        {/*<img src='https://github.com/nrgtwithers/DogMatch/blob/master/client/public/D.png?raw=true' className="App-logo" alt="logo" />
                        */}
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar