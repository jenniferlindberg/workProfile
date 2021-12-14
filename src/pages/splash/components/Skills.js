import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import natureImage from "../../../images/nature30.jpg";
import reactImage from "../../../images/reactLogo.png";
import jsImage from "../../../images/jsLogo.png";
import tsImage from "../../../images/tsLogo.svg";
import nodeImage from "../../../images/nodeLogo.png";
import htmlImage from "../../../images/htmlLogo.png";
import cssImage from "../../../images/cssLogo.png";
import pythonImage from "../../../images/pythonLogo.png";
import javaImage from "../../../images/javaLogo.png";
import firebaseImage from "../../../images/firebaseLogo.png";
import gitImage from "../../../images/gitLogo.png";
import wordpressImage from "../../../images/wordpressLogo.png";
import mysqlImage from "../../../images/mysqlLogo.png";
import figmaImage from "../../../images/figmaLogo.png";

const useStyles = makeStyles((theme) => ({
  pres: {
    background: `url(${natureImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
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
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
}));

const logos = [
  { link: javaImage, alt: "Java" },
  { link: pythonImage, alt: "Python" },
  { link: gitImage, alt: "Git" },
  { link: mysqlImage, alt: "MySQL" },
  { link: reactImage, alt: "React" },
  { link: jsImage, alt: "JavaScript" },
  { link: tsImage, alt: "TypeScript" },
  { link: nodeImage, alt: "Node" },
  { link: htmlImage, alt: "HTML" },
  { link: cssImage, alt: "CSS" },
  { link: firebaseImage, alt: "Firebase" },
  { link: wordpressImage, alt: "Wordpress" },
  { link: figmaImage, alt: "Figma" },
];

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
          {logos.map((l) => (
            <img
              src={l.link}
              alt={l.alt}
              className={classes.logo}
              key={l.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
