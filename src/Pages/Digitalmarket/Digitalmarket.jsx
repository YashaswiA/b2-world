import React from "react";
import "./digitalmarket.css";
import marketing from "../../images/serviceBox-img/marketing.jpg";
import marketing2 from "../../images/serviceBox-img/marketing2.png";
import Accordion from "../../components/Accordion/Accordion";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Digitalmarket() {
  return (
    <div className="digitalmarket">
      <div className="digitalmarket-head">Digital Marketing</div>
      <div className="digitalmarket-body">
        <div className="digitalmarket-body-img">
          <img src={marketing} alt="" />
        </div>
        <div className="digitalmarket-body-content">
          <span>We Grasp Your Market As A Growing Digital Agency.</span>B2world
          stands out as a pioneering force in digital marketing, elevating
          businesses to new heights. We delve deep into understanding your
          product before tailoring our input. Proudly your preferred digital
          marketing company, we urge business owners to consider leveraging our
          services (SEO, SEM, SMM) for effective promotion. As the foremost
          digital marketing agency, B2world intricately connects the dots within
          your niche. We prioritize engaging and lucrative content to secure a
          lasting place in the hearts of your audience, ensuring recognition for
          your product. Equipped with specialized strategies for your market,
          B2world propels your business forward, facilitating growth. Our
          exceptional team is the driving force behind keeping you delighted in
          the ever-evolving market landscape.
        </div>

        <div className="digitalmarket-body-content">
          <span>Trendsetting Digital Marketing Company Is Here</span>
          In the dynamic landscape of online connectivity, establishing a robust
          digital presence is crucial for effectively reaching your target
          audience. The competition in the digital sphere is fierce, making it
          imperative for you to seize the opportunity and take action.
          Leveraging marketing tools like SEO and SEM can prove instrumental in
          enhancing your visibility. This presents a favorable opportunity to
          cater to your specific niche audience, allowing you to run and monitor
          campaigns tailored to their preferences. Furthermore, by focusing on
          return on investments (ROI), you not only gain exposure but also reap
          a portion of what you've invested, making your digital marketing
          endeavors a strategic and rewarding venture.
        </div>
        <div className="digitalmarket-body-img">
          <img src={marketing2} alt="" />
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
            <input type="text" name="Name" placeholder="Your Name"  required/>
            <input type="email" name ="Email" placeholder="Your e-mail" required />
            <textarea type="text" name="Message" placeholder="Message"  required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
