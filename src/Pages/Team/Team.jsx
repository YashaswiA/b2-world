import React from 'react';
import "./team.css";
import team from "../../images/team.png";
import ourteam from "../../images/Team/ourteam.jpg";
import rajnish from "../../images/Team/rajnish.jpg";
import saurabh from "../../images/Team/saurabh.jpg";
import ankit from "../../images/Team/ankit.jpg";
import career from "../../images/Team/career.png";
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div className="team">
      <div className="quicklink-intro">
        <img src={team} alt="" />
        <div className="quicklink-title">
          <span>Team</span>
        </div>
      </div>
      <div className="teams-head">
        <div className="teams-head-title">Meet The Team</div>
        <div className="teams-head-img">
          <img src={ourteam} alt="" />
        </div>
      </div>
      <div className="team-mems">
        <div className="team-mem">
          <div className="team-mem-img">
            <img src={rajnish} alt="" />
          </div>
          <div className="team-mem-name">Rajnish Anand</div>
          <div className="team-mem-desig">Marketing & Technical Analyst</div>
        </div>
        <div className="team-mem">
          <div className="team-mem-img">
            <img src={saurabh} alt="" />
          </div>
          <div className="team-mem-name">Saurabh Kumar</div>
          <div className="team-mem-desig">Software Developer</div>
        </div>
        <div className="team-mem">
          <div className="team-mem-img">
            <img src={ankit} alt="" />
          </div>
          <div className="team-mem-name">Ankit Raj</div>
          <div className="team-mem-desig">Graphic Designer</div>
        </div>
      </div>
      <div className="join-us">
        <div className="join-us-img">
          <img src={career} alt="" />
        </div>
        <div className="join-us-body">
          <div className="join-us-head">
            Build
            <div>Your Career</div>
          </div>
          <div className="join-us-content">
            It's not what you achieve, it's what you overcome. That's what
            defines your career...
          </div>
          <Link to ='/career' className="join-us-butt">
            <button>Join Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}