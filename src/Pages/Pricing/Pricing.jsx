import React from 'react';
import "./pricing.css";
import pricing from "../../images/Pricing.png";
import Pricingbox from '../../components/Pricingbox/Pricingbox';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(true);
  const lite = [
    { name: "Landing Pages", tick: true },
    { name: "Domain + Hoisting", tick: false },
    { name: "01-05 Pages", tick: true },
    { name: "Cross-browser Support", tick: true },
    { name: "Digital Marketing", tick: false },
    { name: "SEO Service", tick: false },
    { name: "Email Marketing", tick: false },
    { name: "24*7 Support", tick: true },
    { name: "Admin Panel", tick: false },
    { name: "Business Email", tick: false }
  ];
  const pro = [
    { name: "Landing Pages", tick: true },
    ...(isAnnual ? [{ name: "Responsive Layout", tick: false }] : []),
    { name: "Domain + Hoisting", tick: false },
    ...(isAnnual
      ? [{ name: "01-10 Pages", tick: true }]
      : [{ name: "01-05 Pages", tick: true }]),
    { name: "Cross-browser Support", tick: true },
    { name: "Digital Marketing", tick: false },
    { name: "SEO Service", tick: false },
    ...(isAnnual
      ? [{ name: "Facebook & Email Marketing", tick: false }]
      : [{ name: "Email Marketing", tick: false }]),
    { name: "24*7 Support", tick: true },
    { name: "Admin Panel", tick: false },
    { name: "Business Email", tick: false },
  ];

  const ultimate = [
    { name: "Landing Pages", tick: true },
    ...(isAnnual
      ? [{ name: "Admin + Customer Panel", tick: true }]
      : [{ name: "Domain + Hoisting", tick: true }]),
    ...(isAnnual
      ? [{ name: "E-commerce", tick: true }]
      : [{ name: "01-05 Pages", tick: true }]),
    { name: "Cross-browser Support", tick: true },
    { name: "Digital Marketing", tick: true },
    { name: "SEO Service", tick: true },
    { name: "Email Marketing", tick: true },
    { name: "24*7 Support", tick: true },
    { name: "Admin Panel", tick: true },
    { name: "Business Email", tick: true },
  ];
  return (
    <div className="pricing">
      <div className="quicklink-intro">
        <img src={pricing} alt="" />
        <div className="quicklink-title">
          <span>Pricing</span>
        </div>
      </div>
      <div className="pricing-body">
        <div className="pricing-head grid-span-col-3">
          <div className="pricing-title">
            Our Pricing Designed For Your Business
          </div>
          <div className="pricing-headline">
            Pick a plan that's right for you
          </div>
          <div className="pricing-head-butt">
            <button
              className={`${isAnnual ? "give-color" : ""}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually (Save 20%)
            </button>
            <button
              className={`${!isAnnual ? "give-color" : ""}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        <Pricingbox
          id="1"
          type="Lite"
          price={`${isAnnual ? "$240/year" : "$20/month"}`}
          priceLine="Get organized and set up simple sales processes."
          features = {lite}
        />
        <Pricingbox
          id="2"
          type="Pro"
          price={`${isAnnual ? "$480/year" : "$30/month"}`}
          priceLine="Everything you need to boost performance and revenue."
          features = {pro}
        />
        <Pricingbox
          id="3"
          type="Ultimate"
          price={`${isAnnual ? "$720/year" : "$80/month"}`}
          priceLine="Customize without limits and access unrivaled support."
          features = {ultimate}
        />
      </div>
    </div>
  );
}