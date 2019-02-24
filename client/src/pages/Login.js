import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import UserNav from '../components/UserNav'
import UserHome from '../components/UserHome'
import Jumbotron from '../components/Jumbotron';
import Logo from '../components/Logo'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          email: response.data.user.email
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <UserNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Jumbotron>
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <h5>Welcome {this.state.email} to DogMatch.com!</h5>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={UserHome} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <SignUpForm/>}
        />
        </Jumbotron>
      </div>
    );
  }
}

export default Login;
