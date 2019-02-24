import React, { Component } from "react";
import { allNumericalInfo } from "../breed info/joinOutPutTwo";


class Form extends Component {


    // Assign state itself, and a default value for items
    state = {
        affection: "",
        exercise: "",
        activity: "",
        hasKids: "false",
        hasDogs: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {

        event.preventDefault();

        this.setState({
            affection: "",
            exercise: "",
            activity: "",
            hasKids: "",
            hasDogs: ""
        });


        console.log(this.state.hasKids);
        let kids;
        let otherDogs;
        let familyAffection = this.state.affection;
        let exercise = this.state.exercise;
        let activity = this.state.activity;


        // the activity level
        let activityArr = allNumericalInfo.filter(function(activityNeed) {
            return activityNeed.energyLevel >= activity;
        })

        // the exercise level
        let exerciseArr = allNumericalInfo.filter(function(exerciseNeed) {
            return exerciseNeed.exerciseNeeds >= exercise;
        });

        // the affection

            let dogAffection = allNumericalInfo.filter(function(friend) {
                return friend.affectionateWFamily >= familyAffection;
            });

        // if they have kids
        if (this.state.hasKids === "true") {
            kids = allNumericalInfo.filter(function (friend) {
                return friend.kidFriendlyDogs >= 4;
            })
            console.log(kids);
        } else {
            kids = allNumericalInfo.filter(function (friend) {
                return friend.kidFriendlyDogs >= 1;
            })
            console.log(kids);
        }

        // if they have other dogs
        if (this.state.hasDogs === "true") {
            otherDogs = allNumericalInfo.filter(function (friend) {
                return friend.dogFriendly >= 3;
            })
            console.log(otherDogs);
        } else {
            otherDogs = allNumericalInfo.filter(function (friend) {
                return friend.dogFriendly >= 1;
            })
            console.log(otherDogs);
        }

        let temperament = otherDogs.concat(kids).concat(dogAffection).concat(activityArr).concat(exerciseArr);

        let dogResults = [];

        for (var i = 0; i < temperament.length; i++) {
            // console.log(temperament[i].breed);
            dogResults.push(temperament[i].breed);
        }

        console.log(dogResults);

        var counts = {};
        dogResults.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        console.log(counts);
    };

    render() {

        return (
            <div>

                <form className="form">

                <div className="form-control">
                        <label>What type of residence do you live in?
                            <input
                                type="radio"
                                name="hasKids"
                                value="true"
                                checked={this.state.hasKids === "true"}
                                onChange={this.handleInputChange}
                            />
                            House w/ yard
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="hasKids"
                                value="false"
                                checked={this.state.hasKids === "false"}
                                onChange={this.handleInputChange}
                            />
                            House without yard
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="hasKids"
                                value="false"
                                checked={this.state.hasKids === "false"}
                                onChange={this.handleInputChange}
                            />
                            Apartment
                        </label>
                    </div>

                    <div className="form-control">
                        <label>
                            <input
                                type="radio"
                                name="hasKids"
                                value="true"
                                checked={this.state.hasKids === "true"}
                                onChange={this.handleInputChange}
                            />
                            I have kids
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="hasKids"
                                value="false"
                                checked={this.state.hasKids === "false"}
                                onChange={this.handleInputChange}
                            />
                            I don't have kids
                        </label>
                    </div>

                    <div className="form-control">
                        <label>
                            <input
                                type="radio"
                                name="hasDogs"
                                value="true"
                                checked={this.state.hasDogs === "true"}
                                onChange={this.handleInputChange}
                            />
                            I have dogs
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="hasDogs"
                                value="false"
                                checked={this.state.hasDogs === "false"}
                                onChange={this.handleInputChange}
                            />
                            I don't have dogs
                        </label>
                    </div>


                    <div className="form-control">
                        <label>Affectionate?</label>
                        <input
                            value={this.state.affection}
                            name="affection"
                            onChange={this.handleInputChange}
                            type="range"
                            className="slider"
                            min="1"
                            max="5"
                            placeholder="Affection needs"
                        />
                    </div>

                    <div className="form-control">
                        <label>Exercise needs?</label>
                        <input
                            value={this.state.exercise}
                            name="exercise"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                            placeholder="Exercise Needs"
                        />
                    </div>

                    <div className="form-control">
                        <label>General activity level?</label>
                        <input
                            value={this.state.activity}
                            name="activity"
                            onChange={this.handleInputChange}
                            type="range"
                            className="slider"
                            min="1"
                            max="5"
                            placeholder="Activity needs"
                        />
                    </div>

                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
