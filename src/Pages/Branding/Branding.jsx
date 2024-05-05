import React from "react";
import "./branding.css";
import branding from "../../images/serviceBox-img/branding.jpg";
import branding2 from "../../images/serviceBox-img/branding2.png";
import Accordion from "../../components/Accordion/Accordion";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Branding() {
  return (
    <div className="branding">
      <div className="branding-head">Design & Branding</div>
      <div className="branding-body">
        <div className="branding-body-img">
          <img src={branding} alt="" />
        </div>
        <div className="branding-body-content">
          B2World as the emerging UI design agency, with its talented team of
          designers ensures that you as the prime user are more than comfortable
          enough to navigate & get the experience like never before. What we
          primarily focus on is designing the visual elements of the product’s
          digital interface. Whether you are using a smartphone or a PC to view
          the same website, the appearance & the layout of the webpage should be
          soothing to the eye with ease of accessibility.
          <span>UX Designing</span>Discover exceptional designs that set your
          product apart. Were you aware that UX stands for "User Experience,"
          serving as a crucial link between the user and the product? The key
          focus lies in the overall user experience across devices and products,
          emphasizing how well users can connect with them. As the premier UX
          Design company, B2World ensures a superior experience. We take pride
          in delivering head-turning UX designs for your brand and business,
          ensuring your constant engagement with our remarkable product
          delivery. Applause to our skilled team, whose expertise consistently
          guides us in delivering an excellent user experience by staying
          abreast of relevant skills.
        </div>

        <div className="branding-body-content">
          <span>Redefining Your Brand</span> Explore distinctive designs that
          define your brand's identity. Were you aware that BaaS stands for
          "Branding as a Service," acting as a crucial link between your brand
          and its audience? The primary focus is on the overall branding
          experience, highlighting how effectively your audience can connect
          with your brand. B2World Branding Hub takes pride in being a premier
          provider of Branding as a Service, ensuring an unparalleled branding
          experience for your business. We are thrilled to present you with
          attention-grabbing branding solutions that will keep you engaged with
          our exceptional service delivery. Applause to our skilled team, whose
          expertise consistently leads us in delivering an outstanding branding
          experience by staying abreast of relevant skills.
        </div>
        <div className="branding-body-img">
          <img src={branding2} alt="" />
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
