import React from "react";
import Skills from "./components/Skills";
import Profile from "../profile/components/Profile";
import Portfolio from "../portfolio/components/Portfolio";
import Footer from "./components/Footer";

const SplashPage = () => {
  return (
    <div>
      <Skills />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default SplashPage;
