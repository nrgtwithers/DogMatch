// to do

// make sure all questions are giving right answers
    // done
    /*
        affection: "", ---
        exercise: "", ---
        activity: "", ---
        hasKids: "", ---
        hasDogs: "", ---
        houseSize: "", ---
        experience: "", ---
        sensitivity: "", ---
        aloneTime: "", ---
        cold: "",
        hot: "",
        dogSize: "",
        shedding: "",
        grooming: "",
        healthNeed: "", ---
        playful: "",
        intense: "" ---

        CHECKER
        console.log(aloneTolerance);
        console.log(allNumericalInfo);
        console.log(aloneArr);
    */
// add all questions from dataset
// split results up by the size of the dog
    // have a final result divided by size of dogs
    // have option for dogs of other sizes if there's not enough good matches outside of dog size
// take top 3-4 results, send breed name to petfinder and get a couple results back
// split quiz questions into separate file for cleanliness' sake

import React, { Component } from "react";
// import { Route, Redirect } from 'react-router-dom'
import { allNumericalInfo } from "../breed info/joinOutPutTwo";
// import { func } from "prop-types";
import UserNav from "../components/UserNav";
import infoPage from '../breed info/joinOutPutThree';
import FirstResult from '../components/FirstResult';
import SecondResult from "../components/SecondResult";
import ThirdResult from "../components/ThirdResult";


class Form extends Component {
    constructor(props) {
        super(props);

    // Assign state itself, and a default value for items
    this.state = {
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
        healthNeed: "",
        intense: "",
        firstPlace: "",
        secondPlace:'',
        thirdPlace:'',
        results: [],
        secondResults: [],
        thirdResults: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    }
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
            healthNeed: "",
            intense: ""

        });

        let kids;
        let otherDogs;
        let familyAffection = this.state.affection;
        let exercise = this.state.exercise;
        let activity = this.state.activity;
        let houseSize = this.state.houseSize;
        let houseArr;
        let dogExperience = this.state.experience
        let dogSensitivity = this.state.sensitivity;
        let aloneTolerance = this.state.aloneTime;
        let aloneArr;
        let coldTolerate = this.state.cold;
        let hotTolerate = this.state.hot;
        let sizeArr;
        let dogSize = this.state.dogSize;
        let shed = this.state.shedding;
        let grooming = this.state.grooming;
        let health = this.state.healthNeed;
        let healthArr;
        let intenseRating = this.state.intense;


        // intensity
        let intensityArr = allNumericalInfo.filter(function (res) {
            return res.intensity >= intenseRating;
        })

        // general health
        if (health === "yes") {
            healthArr = allNumericalInfo.filter(function (res) {
                return res.generalHealth === 1;
            })
        } else if (health === "somewhat") {
            healthArr = allNumericalInfo.filter(function (res) {
                return res.generalHealth >= 2;
            })
        } else {
            healthArr = allNumericalInfo.filter(function (res) {
                return res.generalHealth >= 4;
            })
        }

        // grooming
        let groomingArr = allNumericalInfo.filter(function (res) {
            return res.easyGrooming >= grooming;
        })

        // shedding
        let sheddingArr = allNumericalInfo.filter(function (res) {
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
        let coldTolerance = allNumericalInfo.filter(function (res) {
            return res.toleratesColdWeather >= coldTolerate;
        })

        // hot weather
        let hotTolerance = allNumericalInfo.filter(function (res) {
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
                return friend.dogFriendly >= 4;
            })
        } else {
            otherDogs = allNumericalInfo.filter(function (friend) {
                return friend.dogFriendly >= 1;
            })
        }

        // experience level
        let experienceArr = allNumericalInfo.filter(function (exp) {
            return exp.goodForNoviceOwners >= dogExperience;
        })

        // sensitivity - how chaotic
        let sensitivityArr = allNumericalInfo.filter(function (res) {
            return res.sensitivityLevel < dogSensitivity;
        })

        // time alone
        if (dogSensitivity === "very") {
            sensitivityArr = allNumericalInfo.filter(function (res) {
                return res.sensitivityLevel <= 2;
            })
        } else if (dogSensitivity === "moderately") {
            sensitivityArr = allNumericalInfo.filter(function (res) {
                return res.sensitivityLevel <= 4;
            })
        } else {
            sensitivityArr = allNumericalInfo.filter(function (res) {
                return res.sensitivityLevel <= 5;
            })
        }

        // time alone
        if (aloneTolerance === "fullTime") {
            aloneArr = allNumericalInfo.filter(function (res) {
                return res.toleratesBeingAlone >= 5;
            })
        } else if (aloneTolerance === "partTime") {
            aloneArr = allNumericalInfo.filter(function (res) {
                return res.toleratesBeingAlone >= 2;
            })
        } else {
            aloneArr = allNumericalInfo.filter(function (res) {
                return res.toleratesBeingAlone >= 5;
            })
        }

        // size of dog
        if (dogSize === "large") {
            sizeArr = allNumericalInfo.filter(function (res) {
                return res.size === 5;
            })
        } else if (dogSize === "medium") {
            sizeArr = allNumericalInfo.filter(function (res) {
                return res.size === 3 || res.size === 4;
            })
        } else {
            sizeArr = allNumericalInfo.filter(function (res) {
                return res.size === 1 || res.size === 2;
            })
        }

        // maybe use size to split the array of dogs into three groups, that way the results are clearer

        // weighting more important issues
        sizeArr = sizeArr.concat(sizeArr).concat(sizeArr).concat(sizeArr).concat(sizeArr).concat(sizeArr).concat(sizeArr);

        healthArr = healthArr.concat(healthArr).concat(healthArr).concat(healthArr).concat(healthArr).concat(healthArr).concat(healthArr);

        houseArr = houseArr.concat(houseArr).concat(houseArr).concat(houseArr).concat(houseArr).concat(houseArr).concat(houseArr);

        aloneArr = aloneArr.concat(aloneArr).concat(aloneArr).concat(aloneArr).concat(aloneArr).concat(aloneArr).concat(aloneArr);

        kids = kids.concat(kids).concat(kids).concat(kids).concat(kids).concat(kids).concat(kids);


        let temperament = intensityArr.concat(healthArr).concat(groomingArr).concat(sheddingArr).concat(houseArr).concat(activityArr).concat(exerciseArr).concat(coldTolerance).concat(hotTolerance).concat(dogAffection).concat(kids).concat(otherDogs).concat(experienceArr).concat(sensitivityArr).concat(aloneArr).concat(sizeArr);

        let dogResults = [];

        for (var i = 0; i < temperament.length; i++) {
            dogResults.push(temperament[i].breed);
        }

        var counts = {};
        dogResults.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });



        // console.log(counts);

        function getFirst(o) {
            var vals = [];
            for ( i in o) {
                vals.push(o[i]);
            }

            var max = Math.max.apply(null, vals);

            for ( i in o) {
                if (o[i] === max) {
                    return i;
                }
            }
        }

        // top three values, but they are currently limited to alphabetical order, so there could be dogs later in the alphabet with the same score
        let firstPlace = getFirst(counts);
        delete counts[firstPlace];
        let secondPlace = getFirst(counts);
        delete counts[secondPlace];
        let thirdPlace = getFirst(counts);

        console.log(counts);
        console.log(firstPlace);
        console.log(secondPlace);
        console.log(thirdPlace);

    
        // console.log(`Your best matches are ${firstPlace}, ${secondPlace}, and ${thirdPlace} `)
        const results = infoPage.filter(result => result.breed.includes(firstPlace))
        console.log(results)
        this.setState({
            results: results
        })

        const secondResults = infoPage.filter(result => result.breed.includes(secondPlace))
        console.log(secondResults)
        this.setState({
            secondResults: secondResults
        })
        const thirdResults = infoPage.filter(result => result.breed.includes(thirdPlace))
        console.log(thirdResults)
        this.setState({
            thirdResults: thirdResults
        })
    };

    render() {

        return (
            <div>
                <div id="quiz-header">
                    <UserNav />
                </div>

                <form className="form" id="quiz-form">

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
                        <label>Are you willing and able to to care for with a pet with genetic health issues?
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
                        <label>Intensity level?</label>
                        <input
                            value={this.state.intense}
                            name="intense"
                            onChange={this.handleInputChange}
                            type="range"
                            class="slider"
                            min="1"
                            max="5"
                        />
                    </div>

                    <div className="form-control">
                        <label>How chaotic is your life?
                            <input
                                type="radio"
                                name="sensitivity"
                                value="very"
                                checked={this.state.sensitivity === "very"}
                                onChange={this.handleInputChange}
                            />
                            Very
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="sensitivity"
                                value="moderately"
                                checked={this.state.sensitivity === "moderately"}
                                onChange={this.handleInputChange}
                            />
                            Moderately
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="sensitivity"
                                value="little"
                                checked={this.state.sensitivity === "little"}
                                onChange={this.handleInputChange}
                            />
                            Little
                        </label>
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
                        <label>General energy level?</label>
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

                    <div className="form-control">
                        <label>Playfulness?
                            <input
                                type="radio"
                                name="playful"
                                value="highest"
                                checked={this.state.playful === "highest"}
                                onChange={this.handleInputChange}
                            />
                            Super playful
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="playful"
                                value="middle"
                                checked={this.state.playful === "middle"}
                                onChange={this.handleInputChange}
                            />
                            average playfulness
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="playful"
                                value="lowest"
                                checked={this.state.playful === "lowest"}
                                onChange={this.handleInputChange}
                            />
                            not very playful
                        </label>

                    
                    </div>

                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
               
            <FirstResult results={this.state.results} />
            <SecondResult secondResults={this.state.secondResults} />
            <ThirdResult thirdResults={this.state.thirdResults} />

              
            </div>
        );
    }
}

export default Form;