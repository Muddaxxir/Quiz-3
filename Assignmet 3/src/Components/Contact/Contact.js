import React from "react";
import "./Style.css";
import { FaGlobe, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="main-Container">
      <div className="body-Wrap">
        <div className="header-Title">Let's Talk</div>
        <div className="Content-Section-Wrap">
          <div className="left-Col-Wrap">
            <input type="text" placeholder="Name" className="input-wrap" />
            <input type="email" placeholder="Email" className="input-wrap" />
            <input type="text" placeholder="Subject" className="input-wrap" />
            <textarea
              placeholder="Message"
              className="input-wrap"
              rows={3}
              cols={3}
            ></textarea>
          </div>
          <div className="right-Col-Wrap">
            <div className="Grid-wrap">
              <div className="address-title">25 North Street, Dubai</div>
              <div className="address-subtitle">
                <FaGlobe color="#f84153" size={20} />
                <div className="address-subtitle-txt">Office Address</div>
              </div>
            </div>
            <div className="Grid-wrap">
              <div className="address-title">infoAlpha@theme.com</div>
              <div className="address-subtitle">
                <FaEnvelope color="#f84153" size={20} />
                <div className="address-subtitle-txt">Official Mail</div>
              </div>
            </div>
            <div className="Grid-wrap">
              <div className="address-title">+92 300-4567890</div>
              <div className="address-subtitle">
                <FaPhoneSquareAlt color="#f84153" size={20} />
                <div className="address-subtitle-txt">Official Phone</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
