import React from "react";
import Clients from "./Clients";
import menuImg from "./images/menu/1.jpg";
import Menu1 from "./subcomponents/Menu1";
import Event1 from "./subcomponents/Event1";
import Review from "./subcomponents/Review";

const Menu = () => {
  return (
    <div className="menu">
      <img src={menuImg} alt="menu-img" />
        <Menu1 />
        <Event1 />
        <Review />
        <Clients />
    </div>
  );
};

export default Menu;
