import React from 'react';
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Serviceboxdata from '../../Data/Serviceboxdata';
import Reviewsdata from '../../Data/Reviewsdata';
import manCoding from "../../images/manCoding.jpg"
import ServiceBox from '../../components/ServiceBox/ServiceBox';
import mission from "../../images/process/mission.jpg";
import development from "../../images/process/development.jpg";
import delivery from "../../images/process/delivery.jpg";
import MotoBox from '../../components/MotoBox/MotoBox';
import client from "../../images/moto/client.png";
import completed from "../../images/moto/completed.png";
import exp from "../../images/moto/exp.png";
import teamsize from "../../images/moto/teamsize.png";
import stxavier from "../../images/clients/stxavier.jpg";
import singhRohit from "../../images/clients/singhRohit.jpg";
import Accordion from "../../components/Accordion/Accordion";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import Reviewcard from '../../components/Reviewcard/Reviewcard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [slideShow,setSlideShow] = React.useState(3);
  React.useEffect(()=>{
    if(window.innerWidth<450){
      setSlideShow(2);
    }
    else{
      setSlideShow(3);
    }
  },[window.innerWidth])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="home">
      <div className="intro">
        <div className="intro-body">
          <div>
            <span>
              Turning Dreams into Reality, Explore the extraordinary at B2World.
            </span>
          </div>
          <p>
            Embracing innovation, B2World stands out as a premier provider of
            bespoke IT solutions, breathing new vitality into businesses and
            orchestrating seamless journeys. All credit goes to our exceptional
            team, ensuring your ventures thrive with unparalleled expertise.
          </p>
          <div className="contact-butt">
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="intro-img">
          <img src={manCoding} alt="" />
        </div>
      </div>
      <div className="our-services">
        <span className="our-serv-title">What Services, We Give You!</span>
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
      <div className="process">
        <div className="process-title">
          <span>How We Work</span>
        </div>
        <div className="process-flow">
          <div className="process-img">
            <img src={mission} alt="" />
          </div>
          <div className="process-intro">
            <div className="process-introhead">Defining Project Mission</div>
            <div className="hr-line"></div>
            <span>
              At B2World, we commence each project with a precise mission, a
              navigational beacon in our tech-driven endeavors. This mission,
              forged through collaborative discovery and strategic visioning, is
              the catalyst that propels us forward, aligning cutting-edge
              technologies with your unique goals. Experience the power of
              purpose-driven innovation as we define project missions where
              ideas seamlessly transform into technological reality.
            </span>
          </div>
          <div className="process-intro">
            <div className="process-introhead">Development & Testing</div>
            <div className="hr-line"></div>
            <span>
              In the dynamic realm of technology, our "Development and Testing"
              phase is the heartbeat of innovation. Meticulously crafted by our
              expert team, this phase seamlessly navigates through the
              intricacies of coding, ensuring robust software solutions.
              Rigorous testing, conducted with precision and care, guarantees a
              flawless end product, setting the stage for the transformative
              impact our technology brings to your business.
            </span>
          </div>
          <div className="process-img">
            <img src={development} alt="" />
          </div>
          <div className="process-img">
            <img src={delivery} alt="" />
          </div>
          <div className="process-intro">
            <div className="process-introhead">Product Roll Out</div>
            <div className="hr-line"></div>
            <span>
              The procedure of delivering the product is a finely tuned blend of
              innovation and effectiveness. Guiding your vision from inception
              to realization, we adeptly navigate the intricacies of
              development, guaranteeing the prompt delivery of resilient,
              customized solutions that surpass all expectations. Our agile
              approach and steadfast dedication to quality propel your concepts
              into tangible, market-ready products, culminating in a
              transformative journey from idea to actuality.
            </span>
          </div>
        </div>
      </div>
      <div className="moto">
        <div className="moto-detail">
          <MotoBox
            img={client}
            head="Served Clients"
            body="We've collaborated with 25 valued clients, delivering exceptional solutions."
            notMoto={false}
          />
          <MotoBox
            img={completed}
            head="Completed Projects"
            body="We announce the completion of an impressive portfolio, encompassing a total of 16 projects!"
            notMoto={false}
          />
          <MotoBox
            img={exp}
            head="Experience"
            body="Harness 3 years of expertise and mastery."
            notMoto={false}
          />
          <MotoBox
            img={teamsize}
            head="Team Size"
            body="Our dynamic team comprises 25 talented individuals, each contributing their unique skills."
            notMoto={false}
          />
        </div>
        <div className="moto-intro">
          <div className="moto-head"> Delivering, Not Just Monitoring</div>
          <span>
            Here we take pride in delivering top-notch services that exceed your
            expectations. We are dedicated to providing innovative solutions
            that meet your specific needs and drive your success.
          </span>
        </div>
      </div>
      <div className="clients">
        <div className="clients-head">Our Esteemed Clients</div>
        <div className="clients-logo">
          <img src={stxavier} alt="" />
          <img src={singhRohit} alt="" />
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
      <div className="reviews">
        <div className="reviews-head">What Our Fans Are Saying About Us?</div>
        <Slider {...settings} className="carousel">
          {Reviewsdata.map((item) => (
            <div>
              <Reviewcard
                key={item.id}
                img={item.img}
                name={item.name}
                desig={item.desig}
                body={item.body}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}