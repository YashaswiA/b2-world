import React from 'react';
import "./career.css";
import Jobs from '../../Data/Jobs';
import CareerBox from '../../components/CareerBox/CareerBox';

export default function Career(){
  return (
    <div className="career">
      <div className="career-head">
        <div className="career-head-intro">
            Find Your Passion, Build Your <span>Career</span>
        </div>
        <p>Welcome to B2World! your gateway to a thriving career. We blend passion with profession, offering a dynamic environment that values innovation, diversity, and continuous learning. Whether you're starting your journey or advancing your career, join us in redefining success together. Your future begins now at B2World </p>
      </div>
      <div className="career-jobs">
        <div className="career-jobs-head">Explore Our Latest Job Openings</div>
        <div className="carrer-openings">
          {Jobs.map((item)=>(
            <CareerBox key = {item.id} jobsData = {item}/>
          ))}
        </div>
      </div>
    </div>
  )
}
