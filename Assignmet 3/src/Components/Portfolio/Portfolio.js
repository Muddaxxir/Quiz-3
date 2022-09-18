import React from "react";
import "./Style.css";


function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="container-inner">
        <div className="left-Section-Wrap">
          <div className="sec-title">Portfolio</div>
          <div className="work-block-one">
            <div className="work-block-content">
              <div className="work-block-content-title">Minimalism</div>
              <div className="work-block-content-des">
                illustration - Art Direction
              </div>
              <div className="work-block-content-Action">
                <button>View Work</button>
              </div>
            </div>
            <div className="work-block-img">
              <img
                src={require("../../Assets/images/expo.png")}
                alt="giff"
                height="85%"
              />
            </div>
          </div>

          <div className="work-block-one">
            <div
              className="work-block-img"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                background: "rgba(0, 68, 175,0.6)",
              }}
            >
              <img
                src={require("../../Assets/images/aware.png")}
                alt="giff"
                height="85%"
              />
            </div>
            <div className="work-block-content">
              <div className="work-block-content-title">3D - Projects</div>
              <div className="work-block-content-des">
                illustration - Art Direction
              </div>
              <div className="work-block-content-Action">
                <button>View Work</button>
              </div>
            </div>
          </div>
        </div>

        <div className="left-Section-Wrap">
          <div className="work-block-one">
            <div className="work-block-content">
              <div className="work-block-content-title">Abstract Art</div>
              <div className="work-block-content-des">
                illustration - Art Direction
              </div>
              <div className="work-block-content-Action">
                <button>View Work</button>
              </div>
            </div>
            <div
              className="work-block-img"
              style={{ backgroundColor: "rgba(0, 107, 115, 0.6)" }}
            >
              <img
                src={require("../../Assets/images/cyb.png")}
                alt="giff"
                height="85%"
              />
            </div>
          </div>

          <div className="work-block-one">
            <div
              className="work-block-img"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                background: "rgba(246, 153, 50,0.6)",
              }}
            >
              <img
                src={require("../../Assets/images/marg.png")}
                alt="giff"
                height="85%"
              />
            </div>
            <div className="work-block-content">
              <div className="work-block-content-title">Modern BG</div>
              <div className="work-block-content-des">
                illustration - Art Direction
              </div>
              <div className="work-block-content-Action">
                <button>View Work</button>
              </div>
            </div>
          </div>

          <div
            className="sec-title"
            style={{
              alignSelf: "flex-end",
              fontSize: "24px",
              textDecorationLine: "underline",
              cursor: "pointer",
              paddingTop: "3rem",
            }}
          >
            See more work ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
