import React from 'react';
import "./services.css";
import serviceimg from "../../images/service.png";
import manBalance from "../../images/manBalance.jpg";
import ServiceBox from '../../components/ServiceBox/ServiceBox';
import Serviceboxdata from '../../Data/Serviceboxdata';
export default function Services() {
  return (
    <div className="services">
      <div className="quicklink-intro">
        <img src={serviceimg} alt="" />
        <div className="quicklink-title">
          <span>Services</span>
        </div>
      </div>
      <div className="service-body">
        <div className="service-body-img">
          <img src={manBalance} alt="" />
        </div>
        <div className="service-content">
          <div className="service-body-head">
            Services That Keep Your Business Synchronised
          </div>
          <div className="service-body-text">
            Discover the foundation for your brand and business with B2World,
            your exclusive partner for IT solutions and digital marketing
            services. In today's digital era, certain tools can make your
            product and business go viral. B2World offers a diverse range of
            services that can elevate your brand both directly and indirectly.
            Sometimes, a single service may seem sufficient, but when
            interconnected with others, it completes the business puzzle. Take,
            for instance, a website that attracts various traffic. What makes it
            truly special is the ability to convert that traffic into leads.
            This is where services like UI/UX come into play. We provide a
            comprehensive selection of attractive and customized services
            tailored just for you. Whether you're starting out or looking to
            give your product an extra edge, we're here to discuss and develop
            solutions. We serve as your gateway – just give it a push, and we're
            ready to help you thrive.
          </div>
        </div>
      </div>
      <div className="our-services">
        <div className="all-service">
          {Serviceboxdata.map((item) => (
            <ServiceBox
              key={item.id}
              img={item.img}
              name={item.name}
              intro={item.intro}
              linkTo={item.linkTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}