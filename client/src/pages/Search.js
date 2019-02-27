import React, { Component } from 'react';
import LogoTwo from '../components/Logo'
import UserNav from '../components/UserNav';
import Jumbotron from '../components/Jumbotron'
import SearchResults from '../components/SearchResults'
import infoPage from '../breed info/joinOutPutThree'

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
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        }, ()=>{
            console.log(this.state)
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log(`The breed your searching is ${this.state.searchQuery}`)
        let searchQuery = this.capitalizeFirstLetter(this.state.searchQuery)
        const results = infoPage.filter(info => info.breed.includes(searchQuery))
        console.log(results)
        this.setState({
            results:results
        })
        // if (error){
        //     alert('There are no search results.')
        // }
    }
    capitalizeFirstLetter=string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (
            <div>
                <UserNav />
                <LogoTwo />
                <Jumbotron>
                    <div className='search-container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1 className="How">Search Breed</h1>
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
                        {/* <SearchResults results={this.state.results} /> */}
                </Jumbotron>
                <SearchResults results={this.state.results} />

            </div>
                )
            }
        };
        
export default Search;