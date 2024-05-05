import React from 'react';
import "./serviceBox.css";
import { Link } from 'react-router-dom';

export default function ServiceBox(props){
  return (
    <div className="serviceBox">
      <div className="service-img">
        <img src={props.img} alt="" />
      </div>
      <div className="service-name">
        <span>{props.name}</span>
      </div>
      <div className="service-intro">
        <span>
          {props.intro}
        </span>
      </div>
      <Link to ={props.linkTo} className="service-box-link">Explore</Link>
    </div>
  );
}


