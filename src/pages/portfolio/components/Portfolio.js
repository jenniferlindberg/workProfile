import React from "react";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@material-ui/core";

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
  return (
    <div className={classes.portfolioContainer}>
      <div className={classes.rectangleContainer}>
        <div className={classes.rectangle}>
          <Typography fontSize="fontSize.medium">PORTFOLIO</Typography>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
