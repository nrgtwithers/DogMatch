import React, { Component } from 'react';
import UserNav from '../components/UserNav'
// import LogoTwo from '../components/LogoTwo'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron';

class UserPage extends Component {
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

    updateUser(userObject) {
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
            <div>
                <UserNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                {/* <LogoTwo /> */}
                <Jumbotron>
                    {/* greet user if logged in: */}
                    {this.state.loggedIn &&
                        <h5 class="welcome">Welcome {this.state.email} to DogMatch.com!</h5>}
                </Jumbotron>

            </div>
        )
    }
};

export default UserPage;