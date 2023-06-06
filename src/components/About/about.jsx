import React, { useState } from "react";
import './about.css'

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="./images/user.png" alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              similique qui consequatur fugiat excepturi laudantium quisquam
              explicabo. Ipsa odit facere, quod officia velit ut eligendi. Earum
              omnis et voluptatum veniam!
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => showTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => showTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active" : ""}`}
                onClick={() => showTab("education")}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
