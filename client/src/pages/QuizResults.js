// import React, { Component } from 'react';
// import UserNav from '../components/UserNav'
// import axios from 'axios'
// import FirstResult from '../components/FirstResult';
// import SecondResult from "../components/SecondResult";
// import ThirdResult from "../components/ThirdResult";
// import { results, secondResults, thirdResults} from './Quiz'

// class QuizResults extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             loggedIn: false,
//             email: null,
//             results: [],
//             secondResults: [],
//             thirdResults: []
//         }

//         this.getUser = this.getUser.bind(this)
//         this.componentDidMount = this.componentDidMount.bind(this)
//         this.updateUser = this.updateUser.bind(this)
//     }

//     componentDidMount() {
//         this.getUser()
//     }

//     updateUser(userObject) {
//         this.setState(userObject)
//     }

//     getUser() {
//         axios.get('/user/').then(response => {
//             console.log('Get user response: ')
//             console.log(response.data)
//             if (response.data.user) {
//                 console.log('Get User: There is a user saved in the server session: ')

//                 this.setState({
//                     loggedIn: true,
//                     email: response.data.user.email
//                 })
//             } else {
//                 console.log('Get user: no user');
//                 this.setState({
//                     loggedIn: false,
//                     email: null
//                 })
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <UserNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

//                 <FirstResult results={this.state.results} />
//                 <SecondResult secondResults={this.state.secondResults} />
//                 <ThirdResult thirdResults={this.state.thirdResults} />

//             </div>
//         )
//     }
// };

// export default QuizResults;