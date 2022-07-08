import React from "react";

const MenuItem = (props) => {



  return (
    <div className="menu-item">
    <div className="row">
      <div className="col col-md-6">
        <div className="card-menu">
          <div className="card-item">
            <img src={props.img} alt={props.title} />
          </div>
          <div className="card-item">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
            </div>
          </div>
          <div className="card-item">
            <p className="card-price">{props.price}</p>
          </div>
        </div>
      </div>
      <div className="col col-md-6">
      <div className="card-menu">
          <div className="card-item">
            <img src={props.img2} alt={props.title} />
          </div>
          <div className="card-item">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
            </div>
          </div>
          <div className="card-item">
            <p className="card-price">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MenuItem;
