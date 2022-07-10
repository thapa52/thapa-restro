import React from "react";
import aboutImg1 from "../images/about/2.webp";
import vmImg from '../images/about/3.jpg';

const AboutIntro = () => {
  return (
    <section className="aboutIntro-section">
      <div className="container">
        <h2 className="section-title">Welcome to Thapa Restro</h2>
        <div className="about-intro">
          <p className="about-intro-text1">
            We are a modern Nepali restaurant in the center of the Kathmandu
            city.
          </p>
          <p className="about-intro-text2">
            We would like to take this opportunity to welcome you to our
            restaurant. We guarantee you the freshest food, delivered daily to
            our dock, prepared to your liking. We can prepare a specific meal by
            request. All our locations are providing a wonderful open-air venue
            to enjoy the meal all year round, we offer both indoor and alfresco
            dining and our focus is on serving.
          </p>
        </div>
        <hr />
        <br /><br />
        <div className="vision-mission">
          <h2 className="vm-title">The beginning</h2>
          <div className="row">
            <div className="col col-lg-6">
              <div className="our-mission">
                <h2>Our Mission</h2>
                <p>Our mission simply stated, is Nourishment Delivered.</p>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="our-vision">
                <h2>Our Vision</h2>
                <p>
                  Nourishing those in need and delivering assistance where and
                  when it is needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
