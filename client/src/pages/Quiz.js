import React, { Component } from 'react';
import Logo from '../components/Logo'
import {allNumericalInfo} from "../breed info/joinOutPutTwo.js";
import "./quiz.css";
// import QuizButton from '../components/QuizButton';
// import SearchBreedsBtn from '../components/SearchBreedsBtn';
// import { Col, Row, Container } from "../components/Grid";


class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    friendMatch() {

        // preventDefault();
        let kids;
        let otherDogs;


        // values pulled from form
        let affectionWant = document.getElementById("cuddle").value;

        let kidBoo = document.querySelector('input[name="kidsY"]:checked').value;

        let dogBoo = document.querySelector('input[name="existDogs"]:checked').value;

        // filtering based on response 

        if (kidBoo === "true") {
            kids = allNumericalInfo.filter(function (friend) {
                return friend.goodWithKids >= 3;
            })
            // console.log(kids);
        } else {
            kids = allNumericalInfo.filter(function (friend) {
                return friend.goodWithKids >= 1;
            })
            console.log(kids);
        }

        // if (dogBoo === "true") {
        //     otherDogs = dogs.filter(function (friend) {
        //         return friend.goodWithDogs >= 3;
        //     })
        //     //    console.log(otherDogs);
        // } else {
        //     otherDogs = dogs.filter(function (friend) {
        //         return friend.goodWithDogs >= 1;
        //     })
        //     //    console.log(otherDogs);
        // }

        // let dogAffection = dogs.filter(function (friend) {
        //     return friend.affectionate >= affectionWant;
        // })


        // console.log(dogAffection);

        // let temperament = otherDogs.concat(dogAffection).concat(kids);

        // // count number of times each object was filtered into new array

        // console.log(temperament);
        // let dogResults = [];

        // for (var i = 0; i < temperament.length; i++) {
        //     console.log(temperament[i].name);
        //     dogResults.push(temperament[i].name);
        // }

        // console.log(dogResults);

        // var counts = {};
        // dogResults.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        // console.log(counts);

    }

    render() {
        console.log(allNumericalInfo);
        return (
            <div id="quiz">
                <Logo />

               <div className="form-control">
                    <label>Do you want a cuddly dog?</label>
                    <input type="range" min="1" max="5" className="slider" id="cuddle"></input>

               </div>
                
                <div className="form-control">
                <label>Do you have kids?</label>
                <input type="radio" name="kidsY" value="true"></input>
                <input type="radio" name="kidsY" value="false"></input>
                </div>

                <div className="form-control">
                <label>Do you already own dogs?</label>
                <input type="radio" name="existDogs" value="true"></input>
                <input type="radio" name="existDogs" value="false"></input>
                </div>


                <button id="next" onClick="">Next</button>


            </div>
        )
    }
};

export default Quiz;