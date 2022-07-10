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
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={wcImg1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={wcImg2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={wcImg3} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
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
