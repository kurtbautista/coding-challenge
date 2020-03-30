import React from "react";
import style from "./Home.module.scss";
import CaseStudy from "../components/CaseStudy";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <CaseStudy />
    </div>
  );
};

Home.propTypes = {};

export default Home;
