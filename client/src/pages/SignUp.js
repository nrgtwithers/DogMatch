import React, { Component } from 'react';
import Logo from '../components/Logo'
import SignUpForm from '../components/SignUpForm'
// import UserNav from '../components/UserNav';
// import SearchBreedsBtn from '../components/SearchBreedsBtn';
// import { Col, Row, Container } from "../components/Grid";


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div>
                <Logo />
                <SignUpForm />
            </div>              
                )
            }
        };
        
export default SignUp;