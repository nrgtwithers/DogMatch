import React, { Component } from 'react'
import axios from 'axios'

class SignUpForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
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
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}

export default SignUpForm


// import React, { Component } from "react";

// class SignUpForm extends Component {
//   // Setting the initial values of this.state.username and this.state.password
//   state = {
//     username: "",
//     password: ""
//   };

//   // handle any changes to the input fields
//   handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//     const { name, value } = event.target;

//     // Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, prevent the default event and alert the username and password
//   handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
//     this.setState({ username: "", password: "" });
//   };

//   render() {
//     return (
//       <form>
//         <p>Username: {this.state.username}</p>
//         <p>Password: {this.state.password}</p>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//         />
//         <button onClick={this.handleFormSubmit}>Submit</button>
//       </form>
//     );
//   }
// }

// export default SignUpForm;
