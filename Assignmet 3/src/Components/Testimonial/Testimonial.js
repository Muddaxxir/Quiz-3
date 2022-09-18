import React from "react";
import "./Styles.css";
import { FaQuoteRight, FaUserAstronaut, FaQuoteLeft } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="Container">
      <div className="inner-Block">
        <img
          src={require("../../Assets/images/wav2.svg").default}
          alt="svgerror"
          height="98%"
          width="100%"
        />
        <div className="Section-Wrapper">
          <div className="section-title">Testimonial</div>
          <div className="divider-Wrap">
            <div className="divider-left" />
            <div className="divider-Right" />
          </div>
          <div className="list-Wrap">
            <div className="list-Block">
              <div className="user-Wrap">
                <FaUserAstronaut size={42} color="#f84153" />
              </div>

              <div className="user-name">Zamaan</div>
              <div className="user-Detail">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </div>
              <span style={{ marginTop: "30px" }}>
                <FaQuoteRight color="#f84153" size={28} />
              </span>
            </div>

            <div
              className="list-Block"
              style={{
                boxShadow: " 0px 0px 76px -10px #f84153",
                height: "380px",
                border: "2px solid rgba(248, 65, 83, 0.7)",
              }}
            >
              <div className="user-Wrap">
                <FaUserAstronaut size={42} color="#f84153" />
              </div>

              <div className="user-name">Ahmed Ali</div>
              <div className="user-Detail">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </div>
              <span style={{ marginTop: "30px" }}>
                <FaQuoteRight color="#f84153" size={28} />
              </span>
            </div>

            <div className="list-Block">
              <div className="user-Wrap">
                <FaUserAstronaut size={42} color="#f84153" />
              </div>

              <div className="user-name">Hammid</div>
              <div className="user-Detail">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </div>
              <span style={{ marginTop: "30px" }}>
                <FaQuoteRight color="#f84153" size={28} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
