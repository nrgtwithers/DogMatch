import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import PetfinderResults from "../components/Results/index";

// import Quiz from "./Quiz";

class PetFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AdoptionResults: [],
    };
  }

  componentDidMount() {
    fetchJsonp("https://api.petfinder.com/pet.find?format=json&key=e2e2583221dad933a332d4e10738bf15&location=22303&count=3&breed=Affenpinscher", {
      jsonpCallbackFunction: "callback"
    })
   .then(res => res.json())
   .then(res=> this.setState({
     AdoptionResults: res.petfinder.pets.pet
   }, function(){
     console.log(this.state.AdoptionResults)
   }))
  }
  

  render() {
    return(
        <div>
         <PetfinderResults AdoptionResults={this.state.AdoptionResults}/>
        </div>
      )
    
   
  }
}

export default PetFinder