import React from "react";

const Review = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="section-title">Review</div>
        <h2 className="review-title">Food Review by Customer</h2>
        <div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div>
                  <p>Thapa RestrO is great platform for foodies who want healthy
                    hygienic home cooked food delivered at you doorstep. MCKS
                    Pranic Nepal Trust has been taking Thapa RestrO services
                    since 2015 and we are very satisfied and would love to
                    recommend Thapa RestrOfor Delicious food and on time
                    delivery.</p>
                  <h3>MCKS Pranic Healing Trust</h3>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <p>Services which Thapa RestrO offer are amazing. Their
                    preordered food or tiffin services is just up to mark .. And
                    my whole family is fond of pizza bases we take from them !!
                    Super crunchy and super fresh .. !!</p>
                  <h3>Ishaníka Bhangar</h3>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <p>
                    Fantastic and delicious veg and non-veg options at a very
                    low price, very filling and satisfied. Been using their
                    service for 1+ years for our 20+ happy staffs, Thank You !!
                  </p>
                  <h3>Gandaki International Travels, Durbarmarg</h3>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <p>Thapa RestrO has been providing us a very reliable
                    solution to our office with healthy, fresh Indian fusion
                    meals that we all enjoy.</p>
                  <h3>Nishant Raj Kolachapati, Laxmi Bank, Teku</h3>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true">
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true">
                </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
