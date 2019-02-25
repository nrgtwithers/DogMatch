import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import How from "./pages/How"
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import {allNumericalInfo} from "./breed info/joinOutPutTwo";
// import NavBar from "./components/NavBar";

function App() {
  console.log(allNumericalInfo);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/how" component={How} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/results" component={QuizResults} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search/results" component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
