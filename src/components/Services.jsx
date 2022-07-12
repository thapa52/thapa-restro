import React from "react";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="service-content">
          <h3 className="service-title">Dear Customers,</h3>
          <p>
            Thapa Restro offers homemade hygienic vegetarian as well as
            non-vegetarian dishes. We offer a variety of services and we try to
            put our utmost care & attention. Vegetables are sourced directly
            from the market so that you can have a healthy meal. Any of the
            service you choose is very sumptuous, filling and healthy. For more
            update on catering service and lunchbox services with versatile
            menu.
          </p>
        </div>
        <div className="service-packages">
          <h2>Packages</h2>
            <div class="row row-cols-1 row-cols-md-4 mb-4 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">Lunch Box Service</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                      <p>Have you forgotten to bring your lunch box? No Worries, Thapa RestrO will bring you the Homemade Lunchbox at your doorstep. </p>
                      <h4>Price</h4>
                      <li>Daily - Rs-165</li>
                      <li>Weekly - Rs930</li>
                      <li>Monthly - 3600</li>
                    </ul>
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-dark"
                    >
                      Click to Order
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">Party Pack</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                      <p>Thapa RestrO will pack and deliver the food in the hotcase for the desired number of people. </p>
                      <h4>Packs</h4>
                      <li>A small birthday party.</li>
                      <li>Pasni</li>
                      <li>A kitty party</li>
                      <li>Any other small party.</li>
                    </ul>
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-dark"
                    >
                      Click to Order
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">Catering Service</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <p>Our catering services in Kathmandu will serve hot, fresh food at the venue of your choice. </p>
                    <h4>Types</h4>
                      <li>Live Chaat counters</li>
                      <li>Veg Lunch Catering Services</li>
                      <li>Non-Veg Lunch Catering Services</li>
                      <li>Brunch Catering Services</li>
                    </ul>
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-dark"
                    >
                      Click to Order
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">Homemade Products</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <p>We have the various healthy homemade food product like Pizza Bread, Chilly garlic paste, Green Chilli Pickle, Mango Pickle all prepared at home.</p>
                    <h4>Types</h4>
                      <li>Pizza Bread</li>
                      <li>Chilly Garlic Paste</li>
                      <li>Green Chilly Pickle </li>
                      <li>Mango Lungi Pickle</li>
                    </ul>
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-dark"
                    >
                      Click to Order
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
