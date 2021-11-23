import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import natureImage from "../../../images/nature.jpg";
import reactImage from "../../../images/reactLogo.png";
import jsImage from "../../../images/jsLogo.png";
import nodeImage from "../../../images/nodeLogo.png";
import htmlImage from "../../../images/htmlLogo.png";
import cssImage from "../../../images/cssLogo.png";
import pythonImage from "../../../images/pythonLogo.png";
import javaImage from "../../../images/javaLogo.png";
import firebaseImage from "../../../images/firebaseLogo.png";
import githubImage from "../../../images/githubLogo.png";
import wordpressImage from "../../../images/wordpressLogo.png";
import mysqlImage from "../../../images/mysqlLogo.png";
import figmaImage from "../../../images/figmaLogo.png";

const useStyles = makeStyles((theme) => ({
  pres: {
    background: `url(${natureImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    /* overflow: "hidden", */
    minHeight: "100vh",
    color: "white",
    fontFamily: "Helvetica",
  },
  overlay: {
    backgroundColor: "rgba(223, 0, 122, 0.8)",
    left: "0px",
    minHeight: "100vh",
    width: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10vh",
    paddingBottom: "15vh",
  },
  logos: {
    display: "grid",
    /* alignItems: "center",
    gridTemplateColumns: "repeat(2, 1fr)", */
    gridTemplateColumns: "repeat(auto-fill, minmax(20vh, 1fr))",
    gridGap: ".5rem",
    alignItems: "center",
    justifyItems: "center",
    gap: "10px",
    paddingTop: "2vh",
  },
  logo: {
    textAlign: "center",
    padding: "20px 0",
    fontSize: "30px",
    maxHeight: "100px",
    width: "auto",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.pres}>
      <div className={classes.overlay}>
        <Typography fontFamily="fontFamily.georgia" fontSize="fontSize.large">
          Skills
        </Typography>

        {/* TODO: 1. remove code duplication by creating list instead. 2. Add alt for each image. */}
        <div className={classes.logos}>
          <img src={reactImage} className={classes.logo} />
          <img src={jsImage} className={classes.logo} />
          <img src={nodeImage} className={classes.logo} />
          <img src={htmlImage} className={classes.logo} />
          <img src={cssImage} className={classes.logo} />
          <img src={pythonImage} className={classes.logo} />
          <img src={javaImage} className={classes.logo} />
          <img src={firebaseImage} className={classes.logo} />
          <img src={githubImage} className={classes.logo} />
          <img src={wordpressImage} className={classes.logo} />
          <img src={mysqlImage} className={classes.logo} />
          <img src={figmaImage} className={classes.logo} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
