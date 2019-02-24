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
        hot: "",
        dogSize: "",
        shedding: "",
        grooming: "",
        healthNeed: ""
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
            hot: "",
            dogSize: "",
            shedding: "",
            grooming: "",
            healthNeed: ""

        });

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
        let sizeArr;
        let sizeArrMult;
        let dogSize = this.state.dogSize;
        let shed = this.state.shedding;
        let grooming = this.state.grooming;
        let health = this.state.healthNeed;
        let healthArr;

        // general health
        if (health === "yes") {
            healthArr = allNumericalInfo.filter(function(res) {
                return res.generalHealth === 1;
            })
        } else if (health === "somewhat") {
            healthArr = allNumericalInfo.filter(function(res) {
                return res.generalHealth >= 2;
            })
        } else {
            healthArr = allNumericalInfo.filter(function(res) {
                return res.generalHealth >= 4;
            })
        }

        healthArr = healthArr.concat(healthArr).concat(healthArr).concat(healthArr).concat(healthArr);

        // grooming
        let groomingArr = allNumericalInfo.filter(function(res) {
            return res.easyGrooming >= grooming;
        })

        // shedding
        let sheddingArr = allNumericalInfo.filter(function(res) {
            return res.shedding >= shed;
        })

        // houseSize
        if (houseSize === "houseYard") {
            houseArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving <= 2;
            })
        } else if (houseSize === "houseNoYard") {
            houseArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving <= 4;
            })
        } else {
            houseArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving === 5;
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
        } else {
            kids = allNumericalInfo.filter(function (friend) {
                return friend.kidFriendlyDogs >= 1;
            })
        }

        // if they have other dogs
        if (this.state.hasDogs === "true") {
            otherDogs = allNumericalInfo.filter(function (friend) {
                return friend.dogFriendly >= 3;
            })
        } else {
            otherDogs = allNumericalInfo.filter(function (friend) {
                return friend.dogFriendly >= 1;
            })
        }

        // experience level
        let experienceArr = allNumericalInfo.filter(function (exp) {
            return exp.goodForNoviceOwners >= experience;
        })

        // sensitivity - how chaotic
        let sensitivityArr = allNumericalInfo.filter(function (sens) {
            return sens.sensitivityLevel <= sensitivity;
        })

        sensitivityArr = sensitivityArr.concat(sensitivityArr).concat(sensitivityArr).concat(sensitivityArr).concat(sensitivityArr);

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

        // size of dog
        if (dogSize === "large") {
            sizeArr = allNumericalInfo.filter(function(res) {
                return res.size === 5;
            })
        } else if (dogSize === "medium") {
            sizeArr = allNumericalInfo.filter(function(res) {
                return res.size === 3 || res.size === 4;
            })
        } else {
            sizeArr = allNumericalInfo.filter(function(res) {
                return res.size === 1 || res.size === 2;
            })
        }

        // tripling names of dogs that fit the size need, because it should be weighed heavier as a qualifier for pet owners
        sizeArrMult = sizeArr.concat(sizeArr).concat(sizeArr).concat(sizeArr).concat(sizeArr);


        let temperament = otherDogs.concat(kids).concat(dogAffection).concat(activityArr).concat(exerciseArr).concat(houseArr).concat(experienceArr).concat(sensitivityArr).concat(aloneArr).concat(coldTolerance).concat(hotTolerance).concat(sizeArrMult).concat(sheddingArr).concat(groomingArr).concat(healthArr);

        let dogResults = [];

        for (var i = 0; i < temperament.length; i++) {
            dogResults.push(temperament[i].breed);
        }

        var counts = {};
        dogResults.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        console.log(counts);
    };

    render() {

        return (
            <div>

                <form className="form">

                <div className="form-control">
                        <label>
                            <input
                                type="radio"
                                name="dogSize"
                                value="large"
                                checked={this.state.dogSize === "large"}
                                onChange={this.handleInputChange}
                            />
                            Large
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="dogSize"
                                value="medium"
                                checked={this.state.dogSize === "medium"}
                                onChange={this.handleInputChange}
                            />
                            Medium
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="dogSize"
                                value="small"
                                checked={this.state.dogSize === "small"}
                                onChange={this.handleInputChange}
                            />
                            Small
                        </label>
                    </div>
                
                    <div className="form-control">
                        <label>
                            <input
                                type="radio"
                                name="healthNeed"
                                value="yes"
                                checked={this.state.healthNeed === "yes"}
                                onChange={this.handleInputChange}
                            />
                            Yes
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="healthNeed"
                                value="somewhat"
                                checked={this.state.healthNeed === "somewhat"}
                                onChange={this.handleInputChange}
                            />
                            Somewhat
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="healthNeed"
                                value="no"
                                checked={this.state.healthNeed === "no"}
                                onChange={this.handleInputChange}
                            />
                            No
                        </label>
                    </div>

                

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
                        <label>How chaotic is your life? (Daily routine, childcare, noise level)</label>
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
                        <label>How much shedding can you handle?</label>
                        <input
                            value={this.state.shedding}
                            name="shedding"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                        />
                    </div>

                    <div className="form-control">
                        <label>How easy should grooming be?</label>
                        <input
                            value={this.state.grooming}
                            name="grooming"
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
