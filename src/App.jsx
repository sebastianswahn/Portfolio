import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouteNotFound } from "./Pages/RouteNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <RouteNotFound />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
