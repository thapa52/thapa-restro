import React from "react";

const Gallery2 = (props) => {
  return (
    <div className="gallery-items">
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default Gallery2;
