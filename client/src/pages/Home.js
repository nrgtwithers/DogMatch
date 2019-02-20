import React, { Component } from 'react';
import Video from '../components/Video'
import Logo from '../components/Logo'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'Puppy - 4740.mp4'
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