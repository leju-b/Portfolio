import React from "react";
import './services.css'

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor siam, assumenda voluptas quibusdam, dolorem sit
              officiis consequa
            </p>
            <a href="">learn more</a>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Volpedita ali
            </p>
            <a href="">learn more</a>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur aquam, assumenda voluptas
              quibusdam
            </p>
            <a href="">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
