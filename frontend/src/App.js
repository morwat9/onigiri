import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { Switch, Route, Link } from "react-router-dom";
import {
  Home,
  Breakfast,
  Lunch,
  Dinner,
  AddRecipe,
  EditRecipe,
  DetailRecipe,
} from "./pages";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {},
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
        {/* <nav>
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
        </nav> */}
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ textDecoration: "none", color: "#ededed" }}>
              <Typography variant="h6">Welcome to Onigiri</Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Container>
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
            <Route path="/edit-recipe/:id">
              <EditRecipe />
            </Route>
            <Route path="/detail/:id">
              <DetailRecipe />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </div>
  );
}

export default hot(module)(App);
