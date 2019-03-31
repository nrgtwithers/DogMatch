import React, { Component } from 'react';
import Video from '../components/Video'
import QuizButton from '../components/QuizButton';
import SearchBreedsBtn from '../components/SearchBreedsBtn';
import NavBar from "../components/NavBar";
// import NearMeButton from '../components/GoogleMap';


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
                <NavBar />
                <Video />
                <QuizButton />
                <SearchBreedsBtn />
                {/* <NearMeButton /> */}
            </div>              
                )
            }
        };
        
export default Home;