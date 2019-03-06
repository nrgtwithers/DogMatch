import React, {Component} from "react";
import fetchJsonp from "fetch-jsonp"
// import API from "../utils/API";
// import SearchResults from "../components/Results/index"

class PetFinder extends Component {
  state={
    results:[],
  }
  componentDidMount(){
    fetchJsonp("https://api.petfinder.com/shelter.find?format=json&key=e2e2583221dad933a332d4e10738bf15&location=22303&count=3&animal=dog&callback=callback", {
      jsonpCallbackFunction:"callback"
    })
    .then(res => res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
  }
  
  render(){
    return(
      <div>
        {/* <SearchResults results={this.state.results}/> */}
      </div>
    )
  }
}

export default PetFinder