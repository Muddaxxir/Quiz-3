import React from "react";
import "./Style.css";
import {
  FaQuinscape,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <div className="inner-Container">
        <div className="navbar-Wrap">
          <div className="nav-Title-Wrap">
            <FaQuinscape color="#f84153" size={42} />{" "}
            <h1 className="nav-Title">Follio</h1>
          </div>
          <div className="navbar-Links">
            <button style={{color:"#f84153", fontWeight:600, borderBottom:"2px solid #f84153"}}>Home</button>
            <button>About</button>
            <button>Portfolio</button>
            <button>Pages</button>
            <button>Blog</button>
            <button>Contact</button>
          </div>
          <div className="Action-Btn">
            <button>Lets Talk !</button>
          </div>
        </div>
        <div className="section-Wrap">
          <div className="section-Content-Wrap">
            <div className="Section-Contnet-One">
              I'm <span className="span-color-centent">John</span> Smith
            </div>
            <div className="Section-Contnet-Two">Freelance UI/UX Designer</div>
            <div className="Section-Contnet-Socials">
              <div className="social-Btn">
                <FaFacebookF size={20} color="#f84153" />
              </div>
              <div className="social-Btn in-color">
                <FaLinkedinIn size={20} color="#4a73ef" />
              </div>
              <div className="social-Btn inst-color">
                <FaInstagram size={20} color="#d3674a" />
              </div>
            </div>
          </div>

          <div className="section-image-wrap">
            <img
              src={require("../../Assets/images/circle.svg").default}
              alt="mysvg"
              className="image-design"
            />
            <div className="image-absolute">
              <img
                src={require("../../Assets/images/man.png")}
                alt="mypng"
                height="98%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute-block">
        <div className="dashed-border-block">
          <div className="absolute-block-years-num">7</div>
          <div className="absolute-block-years-alpha">
            <div>Years</div>
            <div>Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
