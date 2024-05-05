import React from 'react';
import "./pricingbox.css";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Pricingbox (props){
  return (
    <div className="pricingbox">
      <div className="pricingbox-head">
        <div className="pricing-type">{props.type}</div>
        {props.id === "2" && <div className="popular">Most Popular</div>}
      </div>
      <div className="pricingbox-price">{props.price}</div>
      <div className="pricingbox-contact">
        <div className="pricingbox-contact-line">{props.priceLine}</div>
        <div className="pricingbox-contact-butt">
          <Link to='/contact'>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="pricingbox-features">
        <div className="features-head">Features</div>
        {props.features.map((item) => (
          <div className="feature-item">
            <div className="feature-tick">
              {item.tick && <FaCheck />}
              {!item.tick && <FaXmark />}
            </div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="pricingbox-extra">
        + Applicable taxes
      </div>
    </div>
  );
}


