import React from 'react';
import "./accordion.css";
import { FaPlus } from "react-icons/fa";
export default function Accordion(props){

    const[accord,setAccord] = React.useState(false);
    function handleAccord(){
        setAccord(prevState => !prevState);
    }
  return (
    <div
      className={`accord ${accord ? "active-accord" : ""}`}
      onClick={handleAccord}
    >
      <div className="accord-q">
        {props.ques}
        <div className="accord-plus">
          <FaPlus/>
        </div>
      </div>
      <div className="accord-ans">
        {props.body}
      </div>
    </div>
  );
}


