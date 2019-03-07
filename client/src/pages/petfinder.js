import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import UserNav from '../components/UserNav';

// import API from "../utils/API"
// import AdoptionSearch from "../components/AdoptionSearch"

// import Quiz from "./Quiz";

import Jumbotron from '../components/Jumbotron'
import PetfinderResults from "../components/Results"

class PetFinder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      AdoptionResults: [],
      // search: ''
      // // zip: ""
    }
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
  }
  componentWillMount() {
    this.search();
  }

  componentDidMount() {

  }

  componentWillReceiveProps() {

  }

  componentWillUpdate() {

  }

  componentWillUnmount() {

  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  search(query = "Scottish Terrier") {
    fetchJsonp(`https://api.petfinder.com/pet.find?format=json&key=e2e2583221dad933a332d4e10738bf15&count=3&breed=${query}&location=22303`, {
      jsonpCallbackFunction: "callback"
    }).then(res => res.json())
      .then(res => this.setState({
        AdoptionResults: res.petfinder.pets.pet
      }, function () {
        console.log(this.state.AdoptionResults)
      }))
  }

  // componentDidMount() {
  //   API.getInputInfo(this.state.search)
  //     .then(res => res.json())
  //     .then(res => this.setState({
  //       AdoptionResults: res.petfinder.pets.pet
  //    }, function () {
  //       console.log(this.state.AdoptionResults)
  //     }))
  // }

  // handleInputChange = event => {
  //   this.setState({
  //     search: event.target.value
  //     // zip: event.target.value
  //   });
  // };
  //   handleChange(event) {
  //     this.setState({
  //         [event.target.name]: event.target.value
  //    }, () => {
  //         console.log(this.state)
  //     })
  // }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getInputInfo(this.state.search)

  // }


  render() {
    return (
      <div>

        <UserNav/>
       <Jumbotron>
        <form action="/action_page.php" method="get">
          <input ref="query" onChange={(e) => { this.updateSearch(); }} list="breeds" name="breed" />
          <datalist id="breeds">
            {/* <option value="Affenpinscher" /> */}
            <option value="Affenpinscher" />
            <option value="Afghan Hound" />
            <option value="Airedale Terrier" />
            <option value="Akita" />
            <option value="Alaskan Klee Kai" />
            <option value="Alaskan Malamute" />
            <option value="American Bulldog" />
            <option value="American English Coonhound" />
            <option value="American Eskimo Dog" />
            <option value="American Foxhound" />
            <option value="American Pit Bull Terrier" />
            <option value="American Staffordshire Terrier" />
            <option value="American Water Spaniel" />
            <option value="Anatolian Shepherd Dog" />
            <option value="Appenzeller Sennenhunde" />
            <option value="Australian Cattle Dog" />
            <option value="Australian Kelpie" />
            <option value="Australian Shepherd" />
            <option value="Australian Terrier" />
            <option value="Azawakh" />
            <option value="Barbet" />
            <option value="Basenji" />
            <option value="Basset Hound" />
            <option value="Beagle" />
            <option value="Bearded Collie" />
            <option value="Bedlington Terrier" />
            <option value="Belgian Malinois" />
            <option value="Belgian Sheepdog" />
            <option value="Belgian Tervuren" />
            <option value="Berger Picard" />
            <option value="Bernedoodle" />
            <option value="Bernese Mountain Dog" />
            <option value="Bichon Frise" />
            <option value="Black and Tan Coonhound" />
            <option value="Black Mouth Cur" />
            <option value="Black Russian Terrier" />
            <option value="Bloodhound" />
            <option value="Blue Lacy" />
            <option value="Bluetick Coonhound" />
            <option value="Boerboel" />
            <option value="Bolognese" />
            <option value="Border Collie" />
            <option value="Border Terrier" />
            <option value="Borzoi" />
            <option value="Boston Terrier" />
            <option value="Bouvier des Flandres" />
            <option value="Boxer" />
            <option value="Boykin Spaniel" />
            <option value="Bracco Italiano" />
            <option value="Briard" />
            <option value="Brittany" />
            <option value="Brussels Griffon" />
            <option value="Bull Terrier" />
            <option value="Bulldog" />
            <option value="Bullmastiff" />
            <option value="Cairn Terrier" />
            <option value="Canaan Dog" />
            <option value="Cane Corso" />
            <option value="Cardigan Welsh Corgi" />
            <option value="Catahoula Leopard Dog" />
            <option value="Caucasian Shepherd Dog" />
            <option value="Cavalier King Charles Spaniel" />
            <option value="Cesky Terrier" />
            <option value="Chesapeake Bay Retriever" />
            <option value="Chihuahua" />
            <option value="Chinese Crested" />
            <option value="Chinese Shar-Pei" />
            <option value="Chinook" />
            <option value="Chow Chow" />
            <option value="Clumber Spaniel" />
            <option value="Cockapoo" />
            <option value="Cocker Spaniel" />
            <option value="Collie" />
            <option value="Coton de Tulear" />
            <option value="Curly-Coated Retriever" />
            <option value="Dachshund" />
            <option value="Dalmatian" />
            <option value="Dandie Dinmont Terrier" />
            <option value="Doberman Pinscher" />
            <option value="Dogo Argentino" />
            <option value="Dogue de Bordeaux" />
            <option value="Dutch Shepherd" />
            <option value="English Cocker Spaniel" />
            <option value="English Foxhound" />
            <option value="English Setter" />
            <option value="English Springer Spaniel" />
            <option value="English Toy Spaniel" />
            <option value="Entlebucher Mountain Dog" />
            <option value="Field Spaniel" />
            <option value="Finnish Lapphund" />
            <option value="Finnish Spitz" />
            <option value="Flat-Coated Retriever" />
            <option value="Fox Terrier" />
            <option value="French Bulldog" />
            <option value="German Pinscher" />
            <option value="German Shepherd Dog" />
            <option value="German Shorthaired Pointer" />
            <option value="German Wirehaired Pointer" />
            <option value="Giant Schnauzer" />
            <option value="Glen of Imaal Terrier" />
            <option value="Goldador" />
            <option value="Golden Retriever" />
            <option value="Goldendoodle" />
            <option value="Gordon Setter" />
            <option value="Great Dane" />
            <option value="Great Pyrenees" />
            <option value="Greater Swiss Mountain Dog" />
            <option value="Greyhound" />
            <option value="Harrier" />
            <option value="Havanese" />
            <option value="Ibizan Hound" />
            <option value="Icelandic Sheepdog" />
            <option value="Irish Red and White Setter" />
            <option value="Irish Setter" />
            <option value="Irish Terrier" />
            <option value="Irish Water Spaniel" />
            <option value="Irish Wolfhound" />
            <option value="Italian Greyhound" />
            <option value="Jack Russell Terrier" />
            <option value="Japanese Chin" />
            <option value="Japanese Spitz" />
            <option value="Korean Jindo Dog" />
            <option value="Karelian Bear Dog" />
            <option value="Keeshond" />
            <option value="Kerry Blue Terrier" />
            <option value="Komondor" />
            <option value="Kooikerhondje" />
            <option value="Kuvasz" />
            <option value="Labradoodle" />
            <option value="Labrador Retriever" />
            <option value="Lagotto Romagnolo" />
            <option value="Lakeland Terrier" />
            <option value="Lancashire Heeler" />
            <option value="Leonberger" />
            <option value="Lhasa Apso" />
            <option value="Lowchen" />
            <option value="Maltese" />
            <option value="Maltese Shih Tzu" />
            <option value="Maltipoo" />
            <option value="Manchester Terrier" />
            <option value="Mastiff" />
            <option value="Miniature Pinscher" />
            <option value="Miniature Schnauzer" />
            <option value="Mudi" />
            <option value="Mutt" />
            <option value="Neapolitan Mastiff" />
            <option value="Newfoundland" />
            <option value="Norfolk Terrier" />
            <option value="Norwegian Buhund" />
            <option value="Norwegian Elkhound" />
            <option value="Norwegian Lundehund" />
            <option value="Norwich Terrier" />
            <option value="Nova Scotia Duck Tolling Retriever" />
            <option value="Old English Sheepdog" />
            <option value="Otterhound" />
            <option value="Papillon" />
            <option value="Peekapoo" />
            <option value="Pekingese" />
            <option value="Pembroke Welsh Corgi" />
            <option value="Petit Basset Griffon Vendeen" />
            <option value="Pharaoh Hound" />
            <option value="Plott" />
            <option value="Pocket Beagle" />
            <option value="Pointer" />
            <option value="Polish Lowland Sheepdog" />
            <option value="Pomeranian" />
            <option value="Pomsky" />
            <option value="Poodle" />
            <option value="Portuguese Water Dog" />
            <option value="Pug" />
            <option value="Puggle" />
            <option value="Puli" />
            <option value="Pyrenean Shepherd" />
            <option value="Rat Terrier" />
            <option value="Redbone Coonhound" />
            <option value="Rhodesian Ridgeback" />
            <option value="Rottweiler" />
            <option value="Saint Bernard" />
            <option value="Saluki" />
            <option value="Samoyed" />
            <option value="Schipperke" />
            <option value="Schnoodle" />
            <option value="Scottish Deerhound" />
            <option value="Scottish Terrier" />
            <option value="Sealyham Terrier" />
            <option value="Shetland Sheepdog" />
            <option value="Shiba Inu" />
            <option value="Shih Tzu" />
            <option value="Siberian Husky" />
            <option value="Silken Windhound" />
            <option value="Silky Terrier" />
            <option value="Skye Terrier" />
            <option value="Sloughi" />
            <option value="Small Munsterlander Pointer" />
            <option value="Soft Coated Wheaten Terrier" />
            <option value="Stabyhoun" />
            <option value="Staffordshire Bull Terrier" />
            <option value="Standard Schnauzer" />
            <option value="Sussex Spaniel" />
            <option value="Swedish Vallhund" />
            <option value="Tibetan Mastiff" />
            <option value="Tibetan Spaniel" />
            <option value="Tibetan Terrier" />
            <option value="Toy Fox Terrier" />
            <option value="Treeing Tennessee Brindle" />
            <option value="Treeing Walker Coonhound" />
            <option value="Vizsla" />
            <option value="Weimaraner" />
            <option value="Welsh Springer Spaniel" />
            <option value="Welsh Terrier" />
            <option value="West Highland White Terrier" />
            <option value="Whippet" />
            <option value="Wirehaired Pointing Griffon" />
            <option value="Xoloitzcuintli" />
            <option value="Yorkipoo" />
            <option value="Yorkshire Terrier" />
          </datalist>
        </form>
        </Jumbotron>


        <PetfinderResults AdoptionResults={this.state.AdoptionResults} />
      </div>
    )


  }
}

export default PetFinder