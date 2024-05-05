import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import B2World from "../../images/B2worldLogo.png";
export default function Navbar(){
  return (
    <div  className="navbar">
      <div  className="logo">
        <NavLink to="/"> <img src={B2World} alt="" /></NavLink>
       
      </div>
      <div  className="nav-pages">
        <NavLink to='/'   className='nav-page'>Home</NavLink>
        <NavLink to='/service'   className='nav-page'>Services</NavLink>
        <NavLink to='/about'   className='nav-page'>About Us</NavLink>
        <NavLink to='/team'   className='nav-page'>Team</NavLink>
        <NavLink to='/contact'   className='nav-page'>Contact Us</NavLink>
        <NavLink to='/pricing'   className='nav-page'>Pricing</NavLink>
      </div>
    </div>
  );
}


