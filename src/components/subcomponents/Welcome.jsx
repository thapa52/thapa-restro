import React from "react";
import wcImg1 from "../images/wc/1.jpg";
import wcImg2 from "../images/wc/2.jpg";
import wcImg3 from "../images/wc/3.jpg";
import wcImg4 from "../images/wc/4.jpg";

const Welcome = () => {
  return (
    <section className="wc-section">
      <div className="container">
        <h2 className="section-title">Welcome to Thapa Restro</h2>
        <div className="row">
          <div className="col col-lg-8">
            <p className="wc-text-1">
              We are a modern Nepali restaurant in the center of the Kathmandu
              city.
            </p>
            <p className="wc-text-2">
              We would like to take this opportunity to welcome you to our
              restaurant. We guarantee you the freshest food, delivered daily to
              our dock, prepared to your liking. We can prepare a specific meal
              by request. All our locations are providing a wonderful open-air
              venue to enjoy the meal all year round, we offer both indoor and
              alfresco dining and our focus is on serving.
            </p>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={wcImg1} className="d-block w-100" alt="wcImg3" />
                </div>
                <div className="carousel-item">
                  <img src={wcImg2} className="d-block w-100" alt="wcImg3" />
                </div>
                <div className="carousel-item">
                  <img src={wcImg3} className="d-block w-100" alt="wcImg3" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="wc-img4">
              <img src={wcImg4} alt="wcImg4" />
            </div>
            <div className="wc-contact mt-50">
              <h3>Contacts</h3>
              <div className="wc-p">
                <p>8500, Lorem Street, Ipsum,</p>
                <p>IL, 55030</p>
                <p>sawmill@site.com</p>
                <p>+977 985752561</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
