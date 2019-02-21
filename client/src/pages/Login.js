import React, { Component } from 'react';
import Logo from '../components/Logo'
import UserNav from '../components/UserNav';
import LoginForm from '../components/LoginForm';
// import SearchBreedsBtn from '../components/SearchBreedsBtn';
// import { Col, Row, Container } from "../components/Grid";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div>
                <UserNav />
                <Logo />
                <LoginForm />
            </div>              
                )
            }
        };
        
export default Login;