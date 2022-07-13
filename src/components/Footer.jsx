import React from "react";

const Footer = () => {
  return (
    <section className="footer navbar-expand-lg bg-dark">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 footer-item">
            <h2 className="footer-title">Address</h2>
            <p>8500, Lorem Street, Ipsum,</p>
            <p>IL, 55030</p>
          </div>
          <div className="col col-lg-3 footer-item">
          <h2 className="footer-title">Phone</h2>
            <p>Online Reservation</p>
            <p>0 800 555 44 11</p>
            <p>0 800 555 40 11</p>
          </div>
          <div className="col col-lg-3 footer-item">
          <h2 className="footer-title">Working Hour</h2>
            <p>Breakfast 6am - 9am</p>
            <p>Lunch 11:30am - 2:30pm</p>
            <p>Dinner 5:30am - 10pm</p>
          </div>
          <div className="col col-lg-3 footer-item">
          <h2 className="footer-title">Email</h2>
            <p>name@rxample.com</p>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
