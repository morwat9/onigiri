import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  jumboDisplay: {
    height: "40vh",
    width: "100%",
    margin: "5vh 0 5vh 0",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1492739159057-7d1896b3c63f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "brightness(60%)",
  },
  jumboText: {
    fontSize: "3vh",
    textAlign: "right",
    width: "inherit",
    height: "inherit",
    color: "white",
    verticalAlign: "text-bottom"
  }
}));

export function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.jumboDisplay}>
        <div className={classes.jumboText}>
          Organizing Your Recipes, Made Easy.
        </div>
      </div>
      <Grid container spacing={5} justify="center">
        <Grid item xs={10} sm={8} md={4}>
          <Link to="/breakfast" style={{ textDecoration: "none" }}>
            <Card>
              <CardMedia
                image="https://cdn.pixabay.com/photo/2019/05/28/00/14/breakfast-4234067_960_720.jpg"
                className={classes.media}
              />
              <CardContent>
                <Typography align="center" component="p">
                  Breakfast
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={10} sm={8} md={4}>
          <Link to="/lunch" style={{ textDecoration: "none" }}>
            <Card>
              <CardMedia
                image="https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455_960_720.jpg"
                className={classes.media}
              />
              <CardContent>
                <Typography align="center" component="p">
                  Lunch
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={10} sm={8} md={4}>
          <Link to="/dinner" style={{ textDecoration: "none" }}>
            <Card>
              <CardMedia
                image="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg"
                className={classes.media}
              />
              <CardContent>
                <Typography align="center" component="p">
                  Dinner
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
