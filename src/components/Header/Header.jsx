import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
export default function Header() {
  return (
    <div className="header">
      <div className="mobile-num header-display">
        <div className="header-display">
          <div className="header-display">
            <IoIosCall />
          </div>
          <span>+91-7482909107</span>
        </div>
        <div className="header-display">
          <div className="header-display">
            <IoIosCall />
          </div>
          <span>+91-8581958165</span>
        </div>
      </div>
      <div className="mail header-display">
        <div className="header-display">
          <IoIosMail />
        </div>
        <span>b2worldcompany@gmail.com</span>
      </div>
      <div className="socials header-display">
        <Link style={{ color: "grey" }} to="https://www.whatsapp.com/">
          <IoLogoWhatsapp />
        </Link>
        <Link style={{ color: "grey" }} to="https://www.linkedin.com/">
          <IoLogoLinkedin />
        </Link>
        <Link style={{ color: "grey" }} to="https://www.twitter.com/">
          <IoLogoTwitter />
        </Link>
        <Link style={{ color: "grey" }} to="https://www.instagram.com/">
          <IoLogoInstagram />
        </Link>
      </div>
      <Link to = "/contact" >
        <button className="consult-butt">Free Consultation</button>
      </Link>
    </div>
  );
}
