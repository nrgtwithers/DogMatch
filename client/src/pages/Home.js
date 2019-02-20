import React, { Component } from 'react';
import Video from '../components/Video'
import Logo from '../components/Logo'
// import { Col, Row, Container } from "../components/Grid";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div>
                <Video/>
                <Logo/>
               
            </div>              
                )
            }
        };
        
export default Home;