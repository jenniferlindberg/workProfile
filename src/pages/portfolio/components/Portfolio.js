import React from "react";
import Typography from "@mui/material/Typography";
import proj1Image from "../../../images/projects/proj1.jpg";
import pigImage from "../../../images/projects/pig.jpg";
import blossomImage from "../../../images/projects/blossom.jpg";
import starsImage from "../../../images/projects/stars.jpg";

import { makeStyles } from "@material-ui/core";

import "./Portfolio.css";

const useStyles = makeStyles((theme) => ({
  portfolioContainer: {
    backgroundColor: "#282c34",
  },
  rectangleContainer: {
    display: "flex",
    justifyContent: "center",
  },
  rectangle: {
    height: "8vh",
    width: "40vw",
    backgroundColor: "#DF007A",
    color: "white",
    fontFamily: `"PT Sans Caption", sans-serif`,
    marginTop: "-8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const happy = () => {
    console.log("happy");
  };
  return (
    <div className={classes.portfolioContainer}>
      <div className={classes.rectangleContainer}>
        <div className={classes.rectangle}>
          <Typography fontSize="fontSize.medium">PORTFOLIO</Typography>
        </div>
      </div>

      <div className="gallery">
        <div className="item">
          <div className="item-content">Project 1</div>
        </div>
        <div className="item">
          <div className="item-content">Project 2</div>
        </div>
        <div className="item">
          <div className="item-content">Project 3</div>
        </div>
        <div className="item">
          <div className="item-content">Project 4</div>
        </div>
        <div className="item">
          <div className="item-content">Project 5</div>
        </div>
        <div className="item">
          <div className="item-content">Project 6</div>
        </div>
        <div className="item">
          <div className="item-content">Project 7</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
