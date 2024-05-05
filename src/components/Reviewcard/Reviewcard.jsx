import React from "react";
import "./reviewcard.css";
export default function Reviewcard(props) {
  return (
    <div className="review-card">
      <div className="review-img">
        <img src={props.img} alt="" />
      </div>
      <div className="review-name">{props.name}</div>
      <div className="review-desig">{props.desig}</div>
      <div className="review-body">
        {props.body}
      </div>
    </div>
  );
}
