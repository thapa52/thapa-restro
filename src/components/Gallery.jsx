import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { images2 } from "./subcomponents/Image";
import Gallery2 from "./subcomponents/Gallery2";
import Review from "./subcomponents/Review";
import Clients from "./Clients";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-title"> Our Gallery</div>
        <h3>Check Our Gallery</h3>
        <div className="gallery-slider">
        <OwlCarousel 
                  className="owl-theme"
          items={4}
          margin={8}
          loop
          nav
          autoPlay={true}
        >
          {images2.map((galleryImage, index) => (
            <Gallery2
              key={index}
              id={galleryImage.id}
              img={galleryImage.img}
              title={galleryImage.title}
            />
          ))}
          </OwlCarousel>
        </div>
      </div>
      <Review />
      <Clients />
    </section>
  );
};

export default Gallery;
