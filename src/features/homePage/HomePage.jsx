import React from "react";
import Header from "../header/Header";
import homePageClasses from "./homePageClasses";

const HomePage = () => {
  const classes = homePageClasses();
  return (
    <div className={classes.body}>
      <Header />
      <div></div>
    </div>
  );
};

export default HomePage;
