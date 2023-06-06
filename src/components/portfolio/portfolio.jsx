import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h2 className="sub-title">My Work</h2>
        <div className="work-list">
          <div className="work">
            <img src="./images/work-1.png" alt=""  className="img"/>
            <div className="layer">
              <h3>Social media app</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from the Play Store.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="./images/work-2.png" alt=""  className="img"/>
            <div className="layer">
              <h3>Social media app</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from the Play Store.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="./images/work-3.png" alt="" className="img" />
            <div className="layer">
              <h3>Social media app</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from the Play Store.
              </p>
              <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="" className="btn">
          more
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
