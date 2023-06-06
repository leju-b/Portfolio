import React from "react";
import './git.css'

const Contact = () => {
  return (
    <div id="git">
      <div className="container">
        <h1 className="sub-title">Get In Touch</h1>
        <div className="row">
          <div className="contact-left">
            <a href="">
              <p>
                <i className="fa-solid fa-paper-plane"></i> contact@example.com
              </p>
            </a>
            <a href="">
              <p>
                <i className="fa-solid fa-square-phone"></i> 0123456789
              </p>
            </a>
            <div className="social-icons">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a href="" className="btn btn1 btn2">
              <i className="fa-regular fa-circle-down"></i> Download CV
            </a>
          </div>
          <div className="contact-right">
            <form action="">
              <input type="text" name="Name" placeholder="Name" required />
              <input type="email" name="mail" placeholder="Mail id" required />
              <textarea name="Message" id="" rows="2" placeholder="Message"></textarea>
              <button type="submit" className="btn btn2">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
