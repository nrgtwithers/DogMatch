import React, { Component } from "react";
import UserNav from '../components/UserNav'
import Jumbotron from '../components/Jumbotron'

import PetfinderResults from "../components/Results"
import API from "../utils/API"
import AdoptionSearch from "../components/AdoptionSearch"

class PetFinder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      AdoptionResults: [],
      search: ''
      // zip: ""
    }
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
		// this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    API.getInfo()
      .then(res => res.json())
      .then(res => this.setState({
        AdoptionResults: res.petfinder.pets.pet
      }, function () {
        console.log(this.state.AdoptionResults)
      }))
  }

  handleInputChange = event => {
    this.setState({
      search: event.target.value
      // zip: event.target.value
    });
  };
//   handleChange(event) {
//     this.setState({
//         [event.target.name]: event.target.value
//     }, () => {
//         console.log(this.state)
//     })
// }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getInputInfo(this.state.search)
  }
  

  render() {
    return (
      <div>
        <UserNav />
        <Jumbotron>
        <AdoptionSearch handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} search={this.state.search} />
        </Jumbotron>
        <PetfinderResults AdoptionResults={this.state.AdoptionResults} />
      </div>
    )


  }
}

export default PetFinder