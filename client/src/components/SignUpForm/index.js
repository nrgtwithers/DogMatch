import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignUpForm extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			location: '',
			email: '',
			password: '',
			// confirmPassword: '',

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
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new email/password
		axios.post('/user/', {
			name: this.state.name,
			location: this.state.location,
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('There is an account with that email address. Please use another email address.')
					alert("There is an account with that email address. Please use another email address.")
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		const { redirectTo } = this.state;

		if (redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h6>Sign up</h6>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="row">
							<div className="col-md-4"></div>
							<div className="col-md-4">
								<label className="form-label" htmlFor="email">Name:</label>
							</div>
							<div className="col-12">
								<input className="form-input"
									type="text"
									id="name"
									name="name"
									placeholder=""
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="row">
							<div className="col-md-4"></div>
							<div className="col-md-4">
								<label className="form-label" htmlFor="email">Location:</label>
							</div>
							<div className="col-12">
								<input className="form-input"
									type="text"
									id="location"
									name="location"
									placeholder=""
									value={this.state.location}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="row">
							<div className="col-md-4"></div>
							<div className="col-md-4">
								<label className="form-label" htmlFor="email">Email:</label>
							</div>
							<div className="col-12">
								<input className="form-input"
									type="text"
									id="email"
									name="email"
									placeholder=""
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="row">
							<div className="col-md-4"></div>
							<div className="col-md-4">
								<label className="form-label" htmlFor="password">Password: </label>
							</div>
							<div className="col-12">
								<input className="form-input"
									placeholder=""
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-group ">
						<div className="col-6"></div>
						<button
							className="signButton"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default SignUpForm;