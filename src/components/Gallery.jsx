import React from "react";
import { images2 } from "./subcomponents/Image";
import Gallery2 from "./subcomponents/Gallery2";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-title"> Our Gallery</div>
        <h2>Check Our Gallery</h2>
        <div className="gallery-slider">
          {images2.map((galleryImage, index) => (
            <Gallery2
              key={index}
              id={galleryImage.id}
              img={galleryImage.img}
              title={galleryImage.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
