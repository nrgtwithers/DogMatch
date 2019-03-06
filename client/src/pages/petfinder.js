import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import PetfinderResults from "../components/Results/index";

class PetFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetchJsonp("https://api.petfinder.com/pet.find?format=json&key=e2e2583221dad933a332d4e10738bf15&location=22303&count=3&breed=Affenpinscher", {
      jsonpCallbackFunction: "callback"
    })
   .then(res => res.json())
   .then(res=> this.setState({
     results: res.petfinder.pets.pet
   }, function(){
     console.log(this.state.results)
   }))


  //  .then(data=>console.log(data.petfinder.shelters.shelter))
  //   .catch(err=>console.log(err));
  }

  render() {
    return(
        <div>
         <PetfinderResults results={this.state.results}/>
        </div>
      )
    
   
  }
}

export default PetFinder