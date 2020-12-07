import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { Switch, Route, Link } from "react-router-dom";
import {Home, Breakfast, Lunch, Dinner, AddRecipe} from './pages'

function App() {
  return (
    <div className="App">
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
            <li>
              <Link to="/add-recipe">Add Recipe</Link>
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
          <Route path="/add-recipe">
            <AddRecipe />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default hot(module)(App);
