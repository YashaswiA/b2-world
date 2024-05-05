import React from "react";
import "./seo.css";
import seo from "../../images/serviceBox-img/seo.jpg";
import seo2 from "../../images/serviceBox-img/seo2.png";
import Accordion from "../../components/Accordion/Accordion";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function SEO() {
  return (
    <div className="seo">
      <div className="seo-head">SEO Optimization</div>
      <div className="seo-body">
        <div className="seo-body-img">
          <img src={seo} alt="" />
        </div>
        <div className="seo-body-content">
          SEO services revolve around optimizing your webpage or content to
          increase visibility on search engines like Google and Bing. This is
          achieved by strategically placing relevant keywords throughout your
          page, ultimately boosting its ranking. The primary goal of SEO is to
          enhance the quantity of traffic directed to your website, and it is
          recognized as a long-term strategy. As the leading provider of SEO
          services, you have the opportunity to expose your brand to a broader
          audience.
          <span>But Why SEO?</span>Opting for our SEO service transforms your
          business by significantly increasing leads and sales. Your product
          gains visibility on search engines, boosting conversion chances and
          establishing strong customer confidence. With a substantial percentage
          of quality traffic, brand awareness multiplies, considering that 89%
          of the audience prefers online product searches. The need for paid
          advertising diminishes, making SEO a cost-effective approach.
          Operating without SEO is like a train without an engine for your
          business. The stability in ranking and overall satisfaction from a
          well-executed SEO strategy further solidify its indispensable role in
          navigating the digital landscape.
        </div>

        <div className="seo-body-content">
          <span>What Do We Have In Store For You?</span>We begin by engaging in
          a comprehensive discussion to identify the most suitable option for
          enhancing your business prospects. Following this consultation, we
          conduct a thorough analysis of your project to gather essential
          insights. Our focus is on delivering captivating content for both your
          website and products. We enhance the visual appeal of your website
          through careful selection of graphics and fonts. Additionally, we
          optimize keywords to ensure your business prominently appears on
          search engines. Our commitment extends to effective link building
          strategies and keeping your website consistently updated for optimal
          performance.
        </div>
        <div className="seo-body-img">
          <img src={seo2} alt="" />
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
