import React, { Component } from 'react';
import LogoTwo from '../components/Logo'
import UserNav from '../components/UserNav';
import Jumbotron from '../components/Jumbotron'
// import { Col, Row, Container } from "../components/Grid";


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
          searchQuery: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(`The breed your searching is ${this.state.searchQuery}`)
		event.preventDefault()
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
                                        <span><input className='form-control' placeholder='ex: German Shepherd, Bichon Frise, Lab.' type='text' onChange={this.handleChange} value={this.state.searchQuery} />
                                            <button onClick={this.state.handleSubmit} className='signButton'>
                                            Search <i class="fas fa-search"></i>
                                            </button></span>
        </form>
      </div>
                                </div>
                            </div>
                        </div>

                </Jumbotron>
            </div>
                )
            }
        };
        
export default Search;