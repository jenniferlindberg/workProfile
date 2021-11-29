import logo from "./images/logo.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import React, { useRef } from "react";

import SplashPage from "./pages/splash/SplashPage";
import ProfilePage from "./pages/profile/ProfilePage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";

function App() {
  const titleRef = useRef();

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
      {/* <div className={classes.pres}>
        <div className={classes.overlay}></div>
      </div> */}
      <SplashPage />
    </div>
  );
}

export default App;
