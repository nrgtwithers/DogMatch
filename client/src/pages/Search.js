import React, { Component } from 'react';
import axios from "axios";
import UserNav from '../components/UserNav';
import Jumbotron from '../components/Jumbotron'
import SearchResults from '../components/SearchResults'
import infoPage from '../breedInfo/joinOutPutThree'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
          searchQuery: '',
          results: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        var userEmail = localStorage.getItem(`userEmail`)
       this.setState({
           email: userEmail
       })
    }
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        }, ()=>{
            console.log(this.state)
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        let searchQuery = this.capitalizeFirstLetter(this.state.searchQuery)
        const results = infoPage.filter(info => info.breed.includes(searchQuery))
        this.setState({
            results:results
        });
    
    }
  
    capitalizeFirstLetter=string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    saveFavorite = (dog) => {
        let information = {
            favorite:dog,
            userEmail: this.state.email
        }
        axios.post('/breed/dog', information).then((res) => console.log(res));
    }
    render() {
        return (
            <div>
        <UserNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                <Jumbotron>
                    <div className='search-container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h4 className="How">Search Breed</h4>
                            </div>
                        </div>
                        <div className='row'>
                        <div className="col-md-3"></div>
                            <div className='col-md-6'>
                                <div className='search-box'>
                                    <form className='search-form'>
                                        <span><input className='form-control' placeholder='ex: German Shepherd, Bichon Frise, Lab...' type='text' name='searchQuery' value={this.state.searchQuery} onChange={this.handleChange} />
                                            <button onClick={this.handleSubmit} className='signButton'>
                                            Search <i className="fas fa-search"></i>
                                            </button></span>
        </form>
      </div>
                                </div>
                            </div>
                        </div>
                </Jumbotron>
                <SearchResults handleFormSubmit={this.saveFavorite} results={this.state.results} />

            </div>
                )
            }
        };
        
export default Search;