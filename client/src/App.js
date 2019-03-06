import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserPage from './pages/UserPage'
import How from "./pages/How"
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Search from "./pages/Search";
import NearMe from "./pages/NearMe";
import PetFinder from "./pages/Petfinder";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
   
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/how" component={How} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/results" component={QuizResults} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/nearme" component={NearMe} />
          <Route exact path="/petfinder" component = {PetFinder}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
