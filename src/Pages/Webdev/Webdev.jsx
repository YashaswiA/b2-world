import React from 'react';
import "./webdev.css";
import webDev from "../../images/serviceBox-img/webDev.jpg";
import webDev2 from "../../images/serviceBox-img/webDev2.png";
import Accordion from '../../components/Accordion/Accordion';
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Webdev(){
  return (
    <div className="webdev">
      <div className="webdev-head">Website Development</div>
      <div className="webdev-body">
        <div className="webdev-body-img">
          <img src={webDev} alt="" />
        </div>
        <div className="webdev-body-content">
          As the leading website development company, B2world is passionate
          about crafting the perfect website for your business. Our dedication
          ensures the creation of a SEO-friendly website that not only captures
          attention but also serves as the true identity card of your business.
          Your journey into understanding the intricacies of web designing and
          development concludes here.
          <span>Make Your Business Unmissable</span>A website is more than just
          a virtual presence; it's the unmistakable identity of your business.
          We excel in capturing the attention of viewers, ensuring that your
          webpage stands out.
          <span>Customized Excellence</span>
          Your ideas shape our creations. Feel free to share your unique
          requirements, and we'll bring your dreams to life. At B2world , we
          tailor-make websites that align perfectly with your business vision.
        </div>

        <div className="webdev-body-content">
          <span>Elevate Your Online Presence with B2world</span>Your Premier Web
          Development Partner! At B2world, we don't just build websites; we
          craft digital experiences that captivate and resonate with your
          audience. As the leading web development company , we seamlessly blend
          creativity with robust UX technology and employ the perfect color
          combinations to ensure your website not only stands out but is also
          adored by your target audience. Because, in the digital realm, first
          impressions matter the most.
          <span>Accelerate Your Business</span> With B2world, you're not just
          getting a website; you're setting the stage for your business to
          skyrocket. Our tailor-made websites are designed to propel your brand
          to new heights.
          <span>Synchronize Your Business and Brand</span>
          Whether you're starting a new venture or looking to establish a
          powerful online presence for your existing offline store, our team of
          skilled web designers is eager and excited to assist you. We believe
          in creating websites that seamlessly synchronize with your business
          and elevate your brand.
        </div>
        <div className="webdev-body-img">
          <img src={webDev2} alt="" />
        </div>
      </div>
      <div className="faq">
        <div className="faq-head">FAQ's</div>
        <div className="faq-accordion">
          <Accordion
            ques="How much will it cost?"
            body=" Curious about the investment for your project? Reach out for a
              quick chat! Share your vision, the site's interactivity, design
              preferences, and more. We'll provide you with an initial estimate
              over the phone. If you're intrigued, we'll take the next step –
              visiting your business to craft a precise and tailored quote.
              Let's turn your ideas into reality!"
          />
          <Accordion
            ques="How much time does the design process typically require?"
            body=" We understand that time is of the essence for your project! While
              the assignment's timeframe is typically set by the client, we're
              committed to accommodating your preferred deadline. The primary
              factor that can influence the speed of website development is the
              timely submission of content by the client. Let's work together to
              create an impressive website within your desired timeframe!"
          />
          <Accordion
            ques="How Can I Join Forces with B2World?"
            body="Kickstart the journey by reaching out to us with your needs. Your
              aspirations become our focal point as we meticulously assess them,
              ensuring a swift and tailored response crafted just for you."
          />
          <Accordion
            ques="How can you improve the professional look of my current site?"
            body="Our team carefully assesses your requirements, providing
              personalized insights. Through collaborative discussions, select
              an engagement model tailored to your preferences. With this
              foundation, our development process commences. Reach out via call
              or email at your convenience—your vision, our commitment."
          />
          <Accordion
            ques="When do I pay?"
            body="Payment is due prior to the start of the project, following the
              agreement of our service terms. Details and milestones will be
              outlined in our agreement for your reference. If you have any
              questions about payments, feel free to reach out to our team."
          />
        </div>
      </div>
      <div className="lets-talk">
        <div className="talk-title">
          <div className="talk-head">
            Let's <span>Talk</span>
          </div>
          <div className="talk-direct">
            <span>Reach out to us directly..</span>
            <div className="direct-contacts">
              <div className="direct-contact">
                <IoCallOutline />
                +91 7482909107
              </div>
              <div className="direct-contact">
                <IoMailOutline />
                Info@B2world.Co
              </div>
            </div>
          </div>
        </div>
        <div className="talk-form">
          <div className="form-head">
            Fill up the form and we will get in touch with you shortly.
          </div>
          <form action="https://formspree.io/f/mgegzgna" method="POST">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="Email"
              placeholder="Your e-mail"
              required
            />
            <textarea
              type="text"
              name="Message"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}


