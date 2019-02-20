import React, { Component } from 'react';
import Logo from '../components/Logo'
// import QuizButton from '../components/QuizButton';
// import SearchBreedsBtn from '../components/SearchBreedsBtn';
// import { Col, Row, Container } from "../components/Grid";


class How extends Component {
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
            </div>              
                )
            }
        };
        
export default How;