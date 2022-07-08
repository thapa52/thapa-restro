import React from "react";
import Menu from "./Menu";
import Event1 from "./subcomponents/Event1";
import Gallery1 from "./subcomponents/Gallery1";
import Review from "./subcomponents/Review";
import Welcome from "./subcomponents/Welcome";

const Home = () => {
  return (
    <div className="home">
      <div className="heading">
        <h1 className="head-title">
          <span>T</span>hapa Family
        </h1>
      </div>
      <Welcome />
      <Menu />
      <Gallery1 />
      <Event1 />
      <Review />
    </div>
  );
};

export default Home;
