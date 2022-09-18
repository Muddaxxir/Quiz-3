import React from "react";
import "./Style.css";


function About() {
  return (
    <div className="container">
      <div className="inner-Conatiner">
        <div className="header-Wrap">
          <div className="header-title">About Me</div>
        </div>
        <div className="links-Btn">
          <div style={{ borderColor: "#fff" }}>About</div>
          <div>Skills</div>
          <div>Services</div>
          <div>Social Media</div>
          <div>Awards</div>
        </div>

        <div className="Content-Section">
          <div className="image-Wrap">
            <img
              src={require("../../Assets/images/arab.gif")}
              alt="svgsec"
              height="98%"
              width="98%"
            />
          </div>
          <div className="about-Content">
            <div className="about-Content-title">
              I CREATE PRODUCTS NOT JUST ART...
            </div>

            <div className="about-Content-detail">
              My name is John Smith. It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here.
            </div>
            <div className="contact-btn">
              <button>Lets Talk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
