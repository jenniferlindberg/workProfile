import React from "react";
import Skills from "./components/Skills";
import Profile from "../profile/components/Profile";
import Portfolio from "../portfolio/components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const SplashPage = () => {
  return (
    <div>
      <Skills />
      <Profile />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default SplashPage;
