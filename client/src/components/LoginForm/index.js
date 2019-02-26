import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
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
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }

            return (
                <div>
                    <h6 className="login">Login</h6>
                    <form className="form-horizontal">
                        <div className="form-group">
                        <div className="row">
							<div className="col-md-4"></div>
                            <div className="col-md-4">
                                <label className="form-label" htmlFor="email">Email:</label>
                            </div>
                            <div className="col-md-12">
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
                                <label className="form-label" htmlFor="password">Password:</label>
                            </div>
                            <div className="col-md-12">
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
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
          }
}

export default LoginForm


