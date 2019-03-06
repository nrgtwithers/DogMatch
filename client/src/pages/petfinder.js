import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp"

class PetFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      results: []
    };
  }

  componentDidMount() {
    fetchJsonp("https://api.petfinder.com/shelter.find?format=json&key=e2e2583221dad933a332d4e10738bf15&location=22303&count=3&animal=dog&callback=callback", {
      jsonpCallbackFunction: "callback"
    })
   .then(res => res.json())
   .then(res=> this.setState({
     results: res.petfinder.shelters.shelter
   }, function(){
     console.log(this.state.results)
   }))


  //  .then(data=>console.log(data.petfinder.shelters.shelter))
  //   .catch(err=>console.log(err));
  }

  render() {
    // this.componentDidMount=this.componentDidMount.bind(this);
    // const {results} = this.state;
    return(
        <div>
          {/* {results.map(item=>(
            <h1 key = {item}>
            {item}
            </h1>
          ))} */}
        </div>
      )
    
   
  }
}

export default PetFinder