import React from "react";
import "./aiml.css";
import ai from "../../images/serviceBox-img/ai.jpg";
import ai2 from "../../images/serviceBox-img/ai2.png";
import Accordion from "../../components/Accordion/Accordion";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Aiml() {
  return (
    <div className="aiml">
      <div className="aiml-head">
        Artificial Intelligence & Machine Learning
      </div>
      <div className="aiml-body">
        <div className="aiml-body-img">
          <img src={ai} alt="" />
        </div>
        <div className="aiml-body-content">
          <span>Powering Your Business with AI Excellence</span>
          Explore revolutionary solutions that shape your AI journey. Did you
          know that AIaaS, or "Artificial Intelligence as a Service," serves as
          a crucial link between cutting-edge technology and your business
          requirements? The primary focus is on the overall AI experience,
          underscoring the seamless integration of advanced intelligence into
          your operations. B2World AI Services takes pride in being a leading
          provider of AI as a Service, ensuring unparalleled artificial
          intelligence experiences for your business. Excitingly, we bring you
          innovative AI solutions, keeping your operations at the forefront with
          exceptional service delivery. Applause to our skilled team, whose
          expertise consistently guides us in delivering outstanding AI
          experiences by staying updated on the latest skills and advancements.
        </div>

        <div className="aiml-body-content">
          <span>Transforming Possibilities, Powering Your Future</span>
          Embark on a journey of innovation with B2World AI Services. Artificial
          Intelligence is not just a tool; it's a transformative force that
          enhances efficiency and unlocks new possibilities. Our AI experts at
          B2World are committed to delivering cutting-edge solutions tailored to
          your unique needs. Whether it's optimizing processes, predicting
          trends, or enhancing user experiences, we harness the power of AI to
          propel your business forward. With B2World AI Services, you're not
          just adopting technology; you're embracing a future where intelligence
          drives success. Join us in revolutionizing the way you operate and
          thrive in the age of artificial intelligence.
        </div>
        <div className="aiml-body-img">
          <img src={ai2} alt="" />
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
