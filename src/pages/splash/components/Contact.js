import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  rectangleContainer: {
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
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
  contactContainer: {
    backgroundColor: "white",
    padding: "0.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  information: { width: "80%" },
  contactForm: { width: "80%" },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <div className={classes.rectangleContainer}>
        <div className={classes.rectangle}>
          <Typography fontSize="fontSize.medium">CONTACT</Typography>
        </div>
      </div>

      <div className={classes.triangleContainer}>
        <div className={classes.triangle}></div>
      </div>
      <div className={classes.information}>
        <Typography fontSize="fontSize.main">
          Hello this is my contact form!
        </Typography>
      </div>
      <div className={classes.contactForm}>
        <Typography>Bye</Typography>
      </div>
    </div>
  );
};

export default Contact;
