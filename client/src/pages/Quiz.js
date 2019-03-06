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
import SliderLabels from "../components/SliderLabels/index.js";
import "./quiz.css";


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
            secondPlace: '',
            thirdPlace: '', 
            results: [],
            secondResults: [],
            thirdResults: [],
            adoptable: []
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

    componentDidMount() {

    }

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
        let houseSize = this.state.houseSize;
        let houseArr;
        let experienceArr;
        let dogSensitivity = this.state.sensitivity;
        let aloneTolerance = this.state.aloneTime;
        let aloneArr;
        let coldTolerate = this.state.cold;
        let hotTolerate = this.state.hot;
        let sizeArr;
        let dogSize = this.state.dogSize;
        let sheddingArr;
        let grooming = this.state.grooming;
        let health = this.state.healthNeed;
        let healthArr;
        let intensityArr;
        let activityArr;


        // intensity
        if (this.state.intense === "most") {
            intensityArr = allNumericalInfo.filter(function (friend) {
                return friend.intensity >= 5;
            })
        } else if (this.state.intense === "moderate") {
            intensityArr = allNumericalInfo.filter(function (friend) {
                return friend.intensity >= 3;
            })
        } else {
            intensityArr = allNumericalInfo.filter(function (friend) {
                return friend.intensity >= 1;
            })
        }

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
        if (this.state.shedding === "most") {
            sheddingArr = allNumericalInfo.filter(function (friend) {
                return friend.shedding >= 5;
            })
        } else if (this.state.shedding === "moderate") {
            sheddingArr = allNumericalInfo.filter(function (friend) {
                return friend.shedding >= 3;
            })
        } else {
            sheddingArr = allNumericalInfo.filter(function (friend) {
                return friend.shedding >= 1;
            })
        }

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
        if (this.state.activity === "most") {
            activityArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving >= 5;
            })
        } else if (this.state.activity === "moderate") {
            activityArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving >= 3;
            })
        } else {
            activityArr = allNumericalInfo.filter(function (house) {
                return house.apartmentLiving >= 1;
            })
        }

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
        if (this.state.experience === "most") {
            experienceArr = allNumericalInfo.filter(function (friend) {
                return friend.goodForNoviceOwners >= 1;
            })
        } else if (this.state.experience === "moderate") {
            experienceArr = allNumericalInfo.filter(function (friend) {
                return friend.goodForNoviceOwners >= 3;
            })
        } else {
            experienceArr = allNumericalInfo.filter(function (friend) {
                return friend.goodForNoviceOwners >= 5;
            })
        }

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
            for (i in o) {
                vals.push(o[i]);
            }

            var max = Math.max.apply(null, vals);

            for (i in o) {
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

        const { affection, exercise, activity, hasKids, hasDogs, houseSize, experience, sensitivity, aloneTime, cold, hot, dogSize, shedding, grooming, healthNeed, intense } = this.state;

        const isEnabled = affection.length > 0 && exercise.length > 0 && activity.length > 0 && hasKids.length > 0 && hasDogs.length > 0 && houseSize.length > 0 && experience.length > 0 && sensitivity.length && aloneTime.length > 0 && cold.length > 0 && hot.length > 0 && dogSize.length > 0 && shedding.length > 0 && grooming.length > 0 && healthNeed.length > 0 && intense.length > 0;

        return (
            <div>
                <UserNav />


                <form className="form" id="quiz-form">

                    <div className="form-control">
                        <label>
                            <h2>What size dog do you want?</h2>
                            <input
                                type="radio"
                                name="dogSize"
                                value="small"
                                checked={this.state.dogSize === "small"}
                                onChange={this.handleInputChange}
                            />
                            Small (up to 22 pounds)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="dogSize"
                                value="medium"
                                checked={this.state.dogSize === "medium"}
                                onChange={this.handleInputChange}
                            />
                            Medium (23-50 pounds)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="dogSize"
                                value="large"
                                checked={this.state.dogSize === "large"}
                                onChange={this.handleInputChange}
                            />
                            Large (50 pounds or more)
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>Are you willing and able to care for with a pet with genetic health issues?</h2>
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
                        <label><h2>How much time will the dog spend alone?</h2>
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
                            Will have a Dog Walker/Doggie Daycare
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>What is your experience with dogs?</h2></label>
                        <label>
                            <input
                                type="radio"
                                name="experience"
                                value="most"
                                checked={this.state.experience === "most"}
                                onChange={this.handleInputChange}
                            />
                            I've had dogs all my life.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="experience"
                                value="moderate"
                                checked={this.state.experience === "moderate"}
                                onChange={this.handleInputChange}
                            />
                            I dog sit/walk from time to time.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="experience"
                                value="least"
                                checked={this.state.experience === "least"}
                                onChange={this.handleInputChange}
                            />
                            I've never had a dog before.
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>Would you prefer a high intensity or low intensity dog?</h2></label>
                        <label>
                            <input
                                type="radio"
                                name="intense"
                                value="most"
                                checked={this.state.intense === "most"}
                                onChange={this.handleInputChange}
                            />
                            High
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="intense"
                                value="moderate"
                                checked={this.state.intense === "moderate"}
                                onChange={this.handleInputChange}
                            />
                            Indifferent
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="intense"
                                value="least"
                                checked={this.state.intense === "least"}
                                onChange={this.handleInputChange}
                            />
                            Low
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>How chaotic is your life?</h2>
                            <input
                                type="radio"
                                name="sensitivity"
                                value="very"
                                checked={this.state.sensitivity === "very"}
                                onChange={this.handleInputChange}
                            />
                            So much I forget where my keys are!
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="sensitivity"
                                value="moderately"
                                checked={this.state.sensitivity === "moderately"}
                                onChange={this.handleInputChange}
                            />
                            My life is productive, but manageable.
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="sensitivity"
                                value="little"
                                checked={this.state.sensitivity === "little"}
                                onChange={this.handleInputChange}
                            />
                            I have nothing going on in my life, that's why I want an awesome dog!
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>How much shedding would you be able to handle?</h2>
                            <input
                                type="radio"
                                name="shedding"
                                value="very"
                                checked={this.state.shedding === "very"}
                                onChange={this.handleInputChange}
                            />
                            I don't mind going everywhere with a layer of dog hair on my clothing.
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="shedding"
                                value="moderate"
                                checked={this.state.shedding === "moderate"}
                                onChange={this.handleInputChange}
                            />
                            I don't mind lint rolling my clothes as long as its not overwhelming amounts of dog hair.
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="shedding"
                                value="least"
                                checked={this.state.shedding === "least"}
                                onChange={this.handleInputChange}
                            />
                            I'd prefer a dog that doesn't shed.
                        </label>
                    </div>




                    <div className="form-control">
                        <label><h2>What is your current living arrangement?</h2>
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
                        <label><h2>Do you live with children?</h2>
                            <input
                                type="radio"
                                name="hasKids"
                                value="true"
                                checked={this.state.hasKids === "true"}
                                onChange={this.handleInputChange}
                            />
                            Yes
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="hasKids"
                                value="false"
                                checked={this.state.hasKids === "false"}
                                onChange={this.handleInputChange}
                            />
                            No
                        </label>
                    </div>
                    <div className="form-control">
                        <label><h2>Do you live with other dogs?</h2>
                            <input
                                type="radio"
                                name="hasDogs"
                                value="true"
                                checked={this.state.hasDogs === "true"}
                                onChange={this.handleInputChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="hasDogs"
                                value="false"
                                checked={this.state.hasDogs === "false"}
                                onChange={this.handleInputChange}
                            />
                            No
                        </label>
                    </div>




                    <div className="form-control">
                        <label><h2>How active are you?</h2>
                            <input
                                type="radio"
                                name="activity"
                                value="most"
                                checked={this.state.activity === "most"}
                                onChange={this.handleInputChange}
                            />
                            Extremely
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="activity"
                                value="moderate"
                                checked={this.state.activity === "moderate"}
                                onChange={this.handleInputChange}
                            />
                            Somewhat
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="activity"
                                value="least"
                                checked={this.state.activity === "least"}
                                onChange={this.handleInputChange}
                            />
                            Not at all
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>How playful would you like your dog to be?</h2>
                            <input
                                type="radio"
                                name="playful"
                                value="highest"
                                checked={this.state.playful === "highest"}
                                onChange={this.handleInputChange}
                            />
                            Extremely playful
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="playful"
                                value="middle"
                                checked={this.state.playful === "middle"}
                                onChange={this.handleInputChange}
                            />
                            Moderately playful
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="playful"
                                value="lowest"
                                checked={this.state.playful === "lowest"}
                                onChange={this.handleInputChange}
                            />
                            More low key
                        </label>
                    </div>

                    <div className="form-control">
                        <label><h2>Affectionate?</h2></label>
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
                        <SliderLabels />
                    </div>

                    <div className="form-control">
                        <label><h2>Exercise needs?</h2></label>
                        <input
                            value={this.state.exercise}
                            name="exercise"
                            onChange={this.handleInputChange}
                            type="range"
                            className="slider"
                            min="1"
                            max="5"
                            placeholder="Exercise Needs"
                        />
                        <SliderLabels />
                    </div>

                    <div className="form-control">
                        <label><h2>How easy should grooming be?</h2></label>
                        <input
                            value={this.state.grooming}
                            name="grooming"
                            onChange={this.handleInputChange}
                            type="range"
                            className="slider"
                            min="1"
                            max="5"
                        />
                        <SliderLabels />
                    </div>

                    <div className="form-control">
                        <label><h2>Is cold weather common where you are?</h2></label>
                        <input
                            value={this.state.cold}
                            name="cold"
                            onChange={this.handleInputChange}
                            type="range"
                            className="slider"
                            min="1"
                            max="5"
                        />
                        <SliderLabels />
                    </div>

                    <div className="form-control">
                        <label><h2>Is hot weather common where you are?</h2></label>
                        <input
                            value={this.state.hot}
                            name="hot"
                            onChange={this.handleInputChange}
                            type="range"
                            className="slider"
                            min="1"
                            max="5"
                        />
                        <SliderLabels />
                    </div>

                    <button id="quizButton"
                        onClick={this.handleFormSubmit}>Submit</button>
                </form>

                {/* {React.cloneElement(this.props.children, { results: this.state.results, setData: this.updateData })} */}

                <FirstResult results={this.state.results} />
                <SecondResult secondResults={this.state.secondResults} />
                <ThirdResult thirdResults={this.state.thirdResults} />


            </div>
        );
    }
}

export default Form;