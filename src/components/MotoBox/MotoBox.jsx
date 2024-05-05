import React from 'react';
import "./motoBox.css";


export default function MotoBox(props){
  return (
    <div className={`motoBox ${props.notMoto ? "motoBox-2" : ""}`}>
      <div className="motoBox-img">
        <img src={props.img} alt="" />
      </div>
      <div className="motoBox-title">{props.head}</div>
      <div className="motoBox-body">{props.body}</div>
    </div>
  );
}


