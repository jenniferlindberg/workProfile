import React from "react";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
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
  triangleContainer: {
    display: "flex",
    justifyContent: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: "2.5vh solid transparent",
    borderRight: "2.5vh solid transparent",
    borderTop: "4vw solid #DF007A",
  },
  information: {
    color: "white",
    padding: "4vh",
    paddingBottom: "15vh",
    fontFamily: `"PT Sans Caption", sans-serif`,
  },
  paragraph: {
    paddingTop: "3vh",
    paddingBottom: "3vh",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <div className={classes.rectangleContainer}>
        <div className={classes.rectangle}>
          <Typography fontSize="fontSize.medium">WHO AM I?</Typography>
        </div>
      </div>

      <div className={classes.triangleContainer}>
        <div className={classes.triangle}></div>
      </div>

      <div className={classes.informationContainer}>
        <div className={classes.information}>
          <Typography className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Typography>
          <Typography className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Typography>
          <Typography className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Profile;
