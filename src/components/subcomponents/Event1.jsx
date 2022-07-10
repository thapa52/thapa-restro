import React from "react";

const Event1 = () => {
  return (
    <section className="event1">
      <div className="container">
        <h2 className="section-title">Our Events</h2>
        <p className="event1-text1">Thapa Restro invites you to events.</p>
        <div className="row">
          <div className="col col-lg-3">
            <div className="event1-firstcol">
              <h3>
                April <span>21</span>,
              </h3>
              <p className="event1-year">2023</p>
            </div>
          </div>
          <div className="col col-lg-4">
          <div className="padd">
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          </div>
          <div className="col col-lg-3">
          <div className="padd">
            <p>Friday</p>
            <p><span>12</span> pm - <span>3</span> pm</p>
            </div>
          </div>
          <div className="col col-lg-2">
            <h4>Details</h4>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-3">
            <div className="event1-firstcol">
              <h3>
                May <span>01</span>,
              </h3>
              <p className="event1-year">2022</p>
            </div>
          </div>
          <div className="col col-lg-4">
          <div className="padd">
            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
          </div>
          <div className="col col-lg-3">
          <div className="padd">
            <p>Thursday</p>
            <p><span>4</span> pm - <span>7</span> pm</p>
          </div>
          </div>
          <div className="col col-lg-2">
            <h4>Details</h4>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-3">
            <div className="event1-firstcol">
              <h3>
                July <span>10</span>,
              </h3>
              <p className="event1-year">2022</p>
            </div>
          </div>
          <div className="col col-lg-4">
          <div className="padd">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          </div>
          <div className="col col-lg-3">
          <div className="padd">
            <p>Whole Day</p>
          </div>
          </div>
          <div className="col col-lg-2">
            <h4>Details</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event1;
