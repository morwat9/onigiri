import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Dinner from './pages/Dinner'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/breakfast">Breakfast</Link>
              </li>
              <li>
                <Link to="/lunch">Lunch</Link>
              </li>
              <li>
                <Link to="/dinner">Dinner</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/breakfast">
              <Breakfast />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default hot(module)(App);
