import logo from "./images/logo.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const titleRef = useRef();
  const classes = useStyles();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography
          fontSize="fontSize.large"
          fontFamily="fontFamily.georgia"
          fontStyle="fontStyle.italic"
        >
          Jennifer Lindberg
        </Typography>
        <Typography
          fontSize="fontSize"
          fontFamily="fontFamily.georgia"
          sx={{ letterSpacing: 6 }}
        >
          Software Engineer
        </Typography>
        <Typography
          fontSize="fontSize.small"
          fontFamily="fontFamily.georgia"
          sx={{ letterSpacing: 4 }}
          className="description"
        >
          Passionate about building responsive websites
        </Typography>
      </header>

      <div className="container">
        <div className="other">
          <p>Hej</p>
        </div>

        <div className="presentation">
          <Typography
            color="primary.light"
            ref={titleRef}
            fontSize="fontSize.small"
          >
            Hello
          </Typography>
          <Typography color="primary" fontSize="fontSize.main">
            Hello
          </Typography>
          <Typography color="primary.dark" fontSize="fontSize.large">
            Hello
          </Typography>

          <Typography color="secondary.light">Hello</Typography>
          <Typography color="secondary">Hello</Typography>
          <Typography color="secondary.dark">Hello</Typography>
          <button onClick={handleBackClick}>Back</button>
        </div>
      </div>

      <div className="presentation1">
        <Typography
          color="primary.light"
          ref={titleRef}
          fontSize="fontSize.small"
        >
          Hello
        </Typography>
        <Typography color="primary" fontSize="fontSize.main">
          Hello
        </Typography>
        <Typography color="primary.dark" fontSize="fontSize.large">
          Hello
        </Typography>

        <Typography color="secondary.light">Hello</Typography>
        <Typography color="secondary">Hello</Typography>
        <Typography color="secondary.dark">Hello</Typography>
        <button onClick={handleBackClick}>Back</button>
      </div>
    </div>
  );
}

export default App;
