import React, { Component } from "react";
import {allNumericalInfo} from "../breed info/joinOutPutTwo";

class Form extends Component {
  // Setting the component's initial state
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

    this.setState({
      affection: "",
      exercise: "",
      activity: ""
    });
  };

  render() {

    // console.log(allNumericalInfo);

    return (
      <div>
        
        <form className="form">

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
