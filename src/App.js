import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Switch>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;
