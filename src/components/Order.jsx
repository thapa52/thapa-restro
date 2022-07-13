import React from "react";

const Order = () => {
  return (
    <section className="order">
      <div className="container">
        <h2 className="section-title">Order Your Food</h2>
        <p className="first-text">Please fill up details in order to place an online order!</p>
        <p className="second-text">MAKE SURE YOU YOUR CONTACT NUMBER IS VALID!</p>
        <form class="row g-3 col-lg-12">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="First Name" />
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Last Name" />
          </div>
          <div class="col-md-4">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="col-md-4">
            <input
              type="number"
              class="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Your Address"
            />
          </div>
          <div className="col-md-4">
            <select class="form-select" aria-label="Default select example">
              <option selected>- select -</option>
              <option value="1">Vegetarian</option>
              <option value="2">Non-Vegeterian</option>
              <option value="3">Regular</option>
            </select>
          </div>
          <div className="col-md-2">
            <input type="number" class="form-control" placeholder="Quantity" />
          </div>
          <div className="col-md-3">
            <input type="date" class="form-control" placeholder="Date" />
          </div>
          <div className="col-md-3">
            <input type="time" class="form-control" placeholder="Time" />
          </div>
          <div className="col-md-6">
            <textarea
              class="form-control"
              rows={4}
              placeholder="Customize your food"
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-outline-danger">
              Order Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Order;
