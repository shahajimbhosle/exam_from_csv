import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Exam from "./components/Exam";
import Home from "./components/Home";
import Result from "./components/Result";

// eslint-disable-next-line
export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/exam">
        <Exam />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>
    </Switch>
  </Router>
);
