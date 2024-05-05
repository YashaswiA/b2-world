import React from "react";
import "./appdev.css";
import appDev from "../../images/serviceBox-img/appDev.jpg";
import appDev2 from "../../images/serviceBox-img/appDev2.png";
import Accordion from "../../components/Accordion/Accordion";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Appdev() {
  return (
    <div className="appdev">
      <div className="appdev-head">Android App Development</div>
      <div className="appdev-body">
        <div className="appdev-body-img">
          <img src={appDev} alt="" />
        </div>
        <div className="appdev-body-content">
          <span>Why you need Mobile Apps</span>
          In the digital era, mobile apps have become essential for businesses,
          offering a myriad of benefits. They enhance user engagement, increase
          accessibility, and provide a competitive edge by boosting brand
          visibility. Mobile apps foster customer loyalty through personalized
          experiences and offer valuable data insights for strategic decisions.
          Additionally, they streamline internal processes, improving
          operational efficiency. By expanding market reach, businesses can tap
          into new audiences, unlocking growth opportunities. Embrace the
          transformative power of mobile apps with Webgrid to redefine customer
          interactions and elevate your brand's success. Connect with us to
          explore the full potential of mobile apps for your business.
        </div>

        <div className="appdev-body-content">
          <span>Business in your pocket, go digital</span>
          In the modern business landscape, success hinges on talent,
          enthusiasm, and adaptability. B2worls, synonymous with the synergy
          between an apk and Android, is your premier partner for mobile
          application development. Our expert team crafts tailored Android, iOS,
          and Hybrid applications, backed by thorough testing. From e-commerce
          to news apps, our portfolio boasts satisfied clients. Connect with us,
          the top Android app development company, to bring your mobile app
          vision to life. Whether you're a startup or an established enterprise,
          B2worls offers concise innovative solutions to elevate your brand in
          the digital realm. Choose us for success in a competitive market.
        </div>
        <div className="appdev-body-img">
          <img src={appDev2} alt="" />
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
