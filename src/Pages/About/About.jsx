import React from 'react';
import "./about.css";
import aboutimg from "../../images/about.png";
import MotoBox from '../../components/MotoBox/MotoBox';
import reliability from "../../images/about-best/reliability.jpg";
import innovative from "../../images/about-best/innovative.jpg";
import scalability from "../../images/about-best/scalability.jpg";
import customerfocused from "../../images/about-best/customerfocused.jpg";
import ourmission from "../../images/about-best/mission.png";
import ourvision from "../../images/about-best/vision.png";
import aboutcontact from "../../images/about-best/aboutcontact.png"; 
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <div className="about">
      <div className="quicklink-intro">
        <img src={aboutimg} alt="" />
        <div className="quicklink-title">
          <span>About Us</span>
        </div>
      </div>
      <div className="about-best">
        <div className="about-best-head">
          What Makes Us Best In The Industry?
        </div>
        <div className="best-box">
          <MotoBox
            img={reliability}
            head="Reliability"
            body="At the heart of our service is unwavering reliability. We deliver resilient and trustworthy solutions, guaranteeing businesses a smooth experience with minimal disruptions."
            notMoto={true}
          />
          <MotoBox
            img={customerfocused}
            head="Customer Focused"
            body="We are dedicated to putting our customers at the heart of everything we do. Our main focus is on truly understanding the needs and preferences of our clients."
            notMoto={true}
          />
          <MotoBox
            img={scalability}
            head="Scalability"
            body="Unlocking limitless potential, our cloud-based systems are crafted for seamless business expansion. Embrace scalability effortlessly, ensuring your growth journey remains uninterrupted."
            notMoto={true}
          />
          <MotoBox
            img={innovative}
            head="Revolutionary"
            body="Experience innovation with our game-changing features, designed to elevate your workflows. Propel your business into the future with capabilities that redefine the way you work."
            notMoto={true}
          />
        </div>
      </div>
      <div className="about-content">
        <div className="about-content-intro">
          <div className="content-intro-head">Who Are We?</div>
          <div className="content-intro-body">
            We pave the way for brighter futures with cutting-edge innovation,
            crafting captivating websites and applications! Our passionate team
            comprises highly skilled and dedicated professionals, bringing a
            wealth of experience from the dynamic world of IT.
          </div>
        </div>
        <div className="about-content-main">
          <div className="content-main-box row-span-3">
            <div className="content-main-box-head">Our Mission</div>
            <div className="content-main-box-body">
              At B2World, we're on a bold mission to transform the tech
              landscape through innovative telecommunication services. Our
              passion lies in empowering businesses with tailor-made solutions
              in web development, app development, and digital marketing,
              unlocking growth, enhancing efficiency, and leaving a lasting
              impact. We are steadfast in our commitment to help clients
              redefine customer interactions, bridge gaps, and explore new
              horizons. With a dedicated focus on operational excellence, we aim
              to make their journey to success smooth and fulfilling.
            </div>
            <div className="content-main-img">
              <img src={ourmission} alt="" />
            </div>
          </div>

          <div className="content-main-box row-span-3">
            <div className="content-main-box-head">Our Vision</div>
            <div className="content-main-box-body">
              At B2World, we aspire to be trailblazers in the realm of
              telecommunication services, dedicated to elevating businesses
              through cutting-edge solutions. Our focus spans web development,
              app creation, and digital marketing, delivering innovations that
              amplify productivity and streamline operations. Devoted to our
              clients' success, we are here to revolutionize customer
              interactions, narrow gaps, and broaden horizons. Our mission is to
              be the catalyst for seamless business operations, empowering
              growth and success in the dynamic digital arena.
            </div>
            <div className="content-main-img-2">
              <img src={ourvision} alt="" />
            </div>
          </div>
          <div className="content-main-box">
            <div className="content-main-box-head">Our Values</div>
            <div className="content-main-box-body">
              At B2World, our core principles form the bedrock of our company.
              We champion integrity, transparency, and a customer-first approach
              in all our endeavors. Committed to delivering top-notch service,
              our team is fueled by innovation and a relentless pursuit of
              excellence. Collaboration is woven into our cultural fabric,
              creating a space where creativity thrives, and our clients' needs
              are met with unwavering dedication and enthusiasm. We embrace
              adaptability, staying ahead in the tech landscape to offer optimal
              solutions. Our values light the way on our mission to empower
              businesses in the digital era.
            </div>
          </div>
          <div className="content-main-box">
            <div className="content-main-box-head">Our Culture</div>
            <div className="content-main-box-body">
              At B2World, our culture is a vibrant tapestry woven with threads
              of excellence and innovation. We thrive in a dynamic and inclusive
              atmosphere, where we celebrate teamwork, creativity, and
              collaboration. Our team members are tech enthusiasts dedicated to
              staying ahead in industry trends. We cherish diversity, valuing
              each unique perspective and contribution. Our culture is built on
              honesty, integrity, and open communication—cornerstones ensuring
              trust with clients and partners. With a commitment to continuous
              learning and personal growth, we empower our team to deliver
              outstanding solutions, surpassing client expectations. It's this
              culture that propels our success, as we unite to make a positive
              impact in the digital world. Join us on a journey where passion
              meets innovation!
            </div>
          </div>
        </div>
      </div>
      <div className="about-contact">
        <div className="about-contact-head">Wanna Chat?</div>
        <div className="about-contact-body">
          <div className="about-contact-img">
            <img src={aboutcontact} alt="" />
          </div>
          <div className="about-contact-main">
            <div className="about-contact-contactus">
              <div>
                <IoCall />
              </div>
              <div>+91 7482909107</div>
            </div>
            <div className="about-contact-contactus">
              <MdEmail />
              <div>Info@B2world.Co</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


