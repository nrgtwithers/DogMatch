import React, { Component } from "react";
import { allNumericalInfo } from "../breed info/joinOutPutTwo";


class Form extends Component {


    // Assign state itself, and a default value for items
    state = {
        affection: "",
        exercise: "",
        activity: "",
        hasKids: "",
        hasDogs: "",
        houseSize: "",
        experience: "",
        sensitivity: "",
        aloneTime: "",
        cold: "",
        hot: ""
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
            hasDogs: "",
            houseSize: "",
            experience: "",
            sensitivity: "",
            aloneTime: "",
            cold: "",
            hot: ""
        });


        console.log(this.state.hasKids);
        let kids;
        let otherDogs;
        let familyAffection = this.state.affection;
        let exercise = this.state.exercise;
        let activity = this.state.activity;
        let houseSize = this.state.houseSize;
        let houseArr;
        let experience;
        let sensitivity;
        let aloneTolerance = this.state.aloneTime;
        let aloneArr;
        let coldTolerate = this.state.cold;
        let hotTolerate = this.state.hot;

        // houseSize
        if (houseSize === "houseYard") {
            houseArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving >= 1;
            })
        } else if (houseSize = "houseNoYard") {
            houseArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving >= 3;
            })
        } else {
            houseArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving >= 5;
            })
        }

        // the activity level
        let activityArr = allNumericalInfo.filter(function (activityNeed) {
            return activityNeed.energyLevel >= activity;
        })

        // the exercise level
        let exerciseArr = allNumericalInfo.filter(function (exerciseNeed) {
            return exerciseNeed.exerciseNeeds >= exercise;
        });

        // cold weather
        let coldTolerance = allNumericalInfo.filter(function(res) {
            return res.toleratesColdWeather >= coldTolerate;
        })

        // hot weather
        let hotTolerance = allNumericalInfo.filter(function(res) {
            return res.toleratesHotWeather >= hotTolerate;
        })

        // the affection

        let dogAffection = allNumericalInfo.filter(function (friend) {
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

        // experience level
        let experienceArr = allNumericalInfo.filter(function (exp) {
            return exp.goodForNoviceOwners >= experience;
        })

        // sensitivity - how chaotic
        let sensitivityArr = allNumericalInfo.filter(function (sens) {
            return sens.sensitivityLevel <= sensitivity;
        })

        // time alone
        if (aloneTolerance === "fullTime") {
            aloneArr = allNumericalInfo.filter(function (res) {
                return res.toleratesBeingAlone <= 1;
            })
        } else if (aloneTolerance === "partTime") {
            aloneArr = allNumericalInfo.filter(function (res) {
                return res.toleratesBeingAlone <= 3;
            })
        } else {
            aloneArr = allNumericalInfo.filter(function (res) {
                return res.toleratesBeingAlone <= 5;
            })
        }


        let temperament = otherDogs.concat(kids).concat(dogAffection).concat(activityArr).concat(exerciseArr).concat(houseArr).concat(experienceArr).concat(sensitivityArr).concat(aloneArr).concat(coldTolerance).concat(hotTolerance);

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
                        <label>Is cold weather common where you are?</label>
                        <input
                            value={this.state.cold}
                            name="cold"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                        />
                    </div>

                    <div className="form-control">
                        <label>Is hot weather common where you are?</label>
                        <input
                            value={this.state.hot}
                            name="hot"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                        />
                    </div>

                    <div className="form-control">
                        <label>Time alone?
                            <input
                                type="radio"
                                name="aloneTime"
                                value="fullTime"
                                checked={this.state.aloneTime === "fullTime"}
                                onChange={this.handleInputChange}
                            />
                            Full-Time (40+ hours)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="aloneTime"
                                value="partTime"
                                checked={this.state.aloneTime === "partTime"}
                                onChange={this.handleInputChange}
                            />
                            Part Time (less than 40 hours)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="aloneTime"
                                value="dogcare"
                                checked={this.state.aloneTime === "dogcare"}
                                onChange={this.handleInputChange}
                            />
                            Dog Care (whether doggy daycare or staying at home)
                        </label>
                    </div>

                    <div className="form-control">
                        <label>Dog experience?</label>
                        <input
                            value={this.state.experience}
                            name="experience"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                        />
                    </div>

                    <div className="form-control">
                        <label>How hectic is your life? REPHRASE</label>
                        <input
                            value={this.state.sensitivity}
                            name="sensitivity"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                        />
                    </div>


                    <div className="form-control">
                        <label>
                            <input
                                type="radio"
                                name="houseSize"
                                value="houseYard"
                                checked={this.state.houseSize === "houseYard"}
                                onChange={this.handleInputChange}
                            />
                            House with a yard
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="houseSize"
                                value="houseNoYard"
                                checked={this.state.houseSize === "houseNoYard"}
                                onChange={this.handleInputChange}
                            />
                            House with no yard
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="houseSize"
                                value="apartment"
                                checked={this.state.houseSize === "apartment"}
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
