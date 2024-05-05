import React from 'react';
import "./footer.css";
import logo from "../../images/B2worldLogo.png"
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Footer(){
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-up">
          <div className="foot-brand">
            <div className="brand-img">
              <img src={logo} alt="" />
            </div>
            <div className="brand-punch-line">
              At B2World, our enthusiasm for technology and its capacity to
              revolutionize businesses is truly captivating. As a dynamic and
              pioneering startup, we are dedicated to harnessing the power of
              innovation.
            </div>
            <div className="brand-social">
              <Link style={{ color: "#333" }}>
                <IoLogoInstagram />
              </Link>
              <Link style={{ color: "#333" }}>
                <IoLogoFacebook />
              </Link>
              <Link style={{ color: "#333" }}>
                <IoLogoYoutube />
              </Link>
              <Link style={{ color: "#333" }}>
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <div className="foot-company">
            <div className="foot-sub-head">Company</div>
            <div className="sub-head-items">
              <Link to="/" className="sub-item-link">
                Home
              </Link>
              <Link to="/about" className="sub-item-link">
                About
              </Link>
              <Link to="/service" className="sub-item-link">
                Services
              </Link>
              <Link to="/pricing" className="sub-item-link">
                Pricing
              </Link>
              <Link to="/team" className="sub-item-link">
                Team
              </Link>
              <Link to="/career" className="sub-item-link">
                Career
              </Link>
              <Link to="/contact" className="sub-item-link">
                Contact
              </Link>
            </div>
          </div>
          <div className="foot-company">
            <div className="foot-sub-head">Services</div>
            <div className="sub-head-items">
              <Link to="/webdev" className="sub-item-link">
                Website Development
              </Link>
              <Link to="/appdev" className="sub-item-link">
                Android Development
              </Link>
              <Link to="/digitalmarketing" className="sub-item-link">
                Digital Marketing
              </Link>
              <Link to="/aiml" className="sub-item-link">
                AIML
              </Link>
              <Link to="/seo" className="sub-item-link">
                SEO Optimization
              </Link>
              <Link to="/branding" className="sub-item-link">
                Design and Branding
              </Link>
            </div>
          </div>
          <div className="foot-company">
            <div className="foot-sub-head">Reach Out</div>
            <div className="sub-head-items">
              <div className="sub-head-item">
                <div className="sub-icon">
                  <FaLocationDot />
                </div>
                <span>
                  M/S BTOW Pvt. Ltd. , Shivam Market, Dalsingsarai, Samastipur
                  (848114), Bihar, IN
                </span>
              </div>
              <div className="sub-head-item">
                <div className="sub-icon">
                  <IoCall />
                </div>
                <span>+91 7482909107</span>
              </div>
              <div className="sub-head-item">
                <div className="sub-icon">
                  <IoMdMail />
                </div>
                <span>contact@b2world.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-down">
          <div>© Copyright 2024 All Rights Reserved by BTOW Pvt. Ltd.</div>
        </div>
      </div>
    </div>
  );
}
