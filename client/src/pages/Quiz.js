import React, { Component } from "react";
import {allNumericalInfo} from "../breed info/joinOutPutTwo";

class Form extends Component {

    
        // Assign state itself, and a default value for items
        state = {
            affection: "",
            exercise: "",
            activity: ""
          };
  

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {

    event.preventDefault();
    console.log(this.state.affection);

    this.setState({
      affection: "",
      exercise: "",
      activity: ""
    });

    if (kidBoo === "true") {
        kids = allNumericalInfo.filter(function(friend) {
           return friend.kidFriendlyDogs >= 3;
       })
       console.log(kids);
   } else {
       kids = allNumericalInfo.filter(function(friend) {
           return friend.kidFriendlyDogs >= 1;
       })
       console.log(kids);
   }

   if (dogBoo === "true") {
       otherDogs = allNumericalInfo.filter(function(friend) {
          return friend.dogFriendly >= 3;
      })
      console.log(otherDogs);
  } else {
      otherDogs = allNumericalInfo.filter(function(friend) {
          return friend.dogFriendly >= 1;
      })
      console.log(otherDogs);
  }
  };

  render() {

    return (
      <div>
        
        <form className="form">

        <div className="form-control">
          <label>Kids?</label>
              <input
                value={this.state.kidBoo}
                name="kidsBoo"
                onChange={this.handleInputChange}
                type="radio"
                placeholder="Affection needs"
              />
          </div>

          <label>Do you have kids?</label>
        <input type="radio" name="kidsY" value="true">
        <input type="radio" name="kidsY" value="false">
        <br>



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
