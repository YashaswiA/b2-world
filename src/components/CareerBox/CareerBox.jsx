import React from 'react';
import "./careerbox.css";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CareerBox (props){
  const aboutJob = props.jobsData;
  return (
    <div className='careerbox'>
      <span className='blue-line'></span>
      <div className="career-role">{props.jobsData.title}</div>
      <div className="role-type">
        <div className="role-category">
            <b>Role Category :</b> {props.jobsData.category}
        </div>
        <div className="role-area">
            <b>Business Area : </b>Technology
        </div>
      </div>
      <div >
        <Link to ='/job' state = {{data:aboutJob}} className="role-apply"><button>Apply <IoIosArrowRoundForward/></button> </Link>
      </div>
    </div>
  )
}


