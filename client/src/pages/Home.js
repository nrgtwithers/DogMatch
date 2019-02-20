import React, { Component } from 'react';
import Video from '../components/Video'

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
            </div>              
                )
            }
        };
        
export default Home;