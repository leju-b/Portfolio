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
              𝐋𝐞𝐣𝐮 𝐛 <br />(𝐀𝐬𝐩𝐢𝐫𝐢𝐧𝐠 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 | 𝐈𝐎𝐓 | 𝐀𝐈 | ) <br /> Welcome to my profile! I'm an tech enthusiastic and motivated student pursuing a degree in computer science and engineering, with a focus on 𝐈𝐎𝐓, 𝐀𝐈/𝐌𝐋, and 𝐟𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬. As a fresher in the field, I'm eager to apply my knowledge, passion, and creativity to contribute to a dynamic team as part of an internship opportunity and to learn more. 😊🚀
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => showTab("skills")}
              >
                Skills
              </p>
              {/* <p
                className={`tab-links ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => showTab("experience")}
              >
                Experience
              </p> */}
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
                  <span>Web Development</span>
                  <br />
                  Responsive Web Development
                </li>
                <li>
                  <span>Programming</span>
                  <br />
                  Python,C,Java
                </li>
              </ul>
            </div>
        {/* <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
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
            </div> */}
            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul>
                <li>
                  <span>COLLEGE</span>
                  <br />               
                  Stella Mary's College of Engineering<br />
                  Bachelor of Engineering in Computer Science <br />
                  2021 - 2025
                </li>
                <li>
                  <span>SCHOOL</span>
                  <br />                 
                  St. Mary's Higher Secondary School, Vizhinjam, Trivandrum <br />
                  +2, Bio-science with Maths, 2018 - 2020 <br />
                  Grade: 72%
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
