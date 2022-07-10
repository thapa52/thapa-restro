import React from "react";
import Menu1 from "./Menu1";
import Banner from "./subcomponents/Banner";
import Event1 from "./subcomponents/Event1";
import Gallery1 from "./subcomponents/Gallery1";
import Review from "./subcomponents/Review";
import Welcome from "./subcomponents/Welcome";

const Home = () => {
  return (
    <div className="home">
    <Banner /> 
      <div className="heading">
        <h1 className="head-title">
          <span>T</span>hapa RestrO
        </h1>
      </div>
      <Welcome />
      <Menu1 />
      <Gallery1 />
      <Event1 />
      <Review />
    </div>
  );
};

export default Home;
