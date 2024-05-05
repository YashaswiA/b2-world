import React from "react";
import "./contact.css";
import contactusimg from "../../images/contactusimg.png";
import astronaut from "../../images/contactus/astronaut.png";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwkgorln");
  const [selectedOptions, SetSelectedOptions] = React.useState([]);

  function handleCheckboxChange(event){

    const {value} = event.target;
    SetSelectedOptions(prevState =>{
      if(prevState.includes(value)){
        return prevState.filter((option) => option!==value);
      }
      else{
        return [...prevState, value];
      }
    })

  }
  return (
    <div className="contactus">
      <div className="quicklink-intro">
        <img src={contactusimg} alt="" />
        <div className="quicklink-title">
          <span>Contact Us</span>
        </div>
      </div>
      <div className="contactus-main-head">
        <span>We Would Love to Hear From You!</span>
      </div>
      <div className="contactus-main">
        <div className="contactus-main-form">
          <div className="contactus-main-form-head">
            Brief us your requirements below, and let's connect.
          </div>
          <form onSubmit={handleSubmit}>
            <div className="contactus-input">
              <label className="contactus-label">
                <div className="contactus-input-title">Name</div>
                <input type="text" name="name" autoComplete="off" required />
              </label>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="contactus-input">
              <label className="contactus-label">
                <div className="contactus-input-title">Contact Number</div>
                <input type="text" name="contact" autoComplete="off" required />
              </label>
              <ValidationError
                prefix="Contact"
                field="contact"
                errors={state.errors}
              />
            </div>
            <div className="contactus-input grid-2-col">
              <label className="contactus-label">
                <div className="contactus-input-title">
                  Your Prefered Services
                </div>
                <div className="checkbox-inputs">
                  <label>
                    <input
                      type="checkbox"
                      name="prefered"
                      value="website development"
                      checked={selectedOptions.includes("website development")}
                      onChange={handleCheckboxChange}
                    />
                    Website Development
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="prefered"
                      value="app development"
                      checked={selectedOptions.includes("app development")}
                      onChange={handleCheckboxChange}
                    />
                    Android Development
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="prefered"
                      value="digital marketing"
                      checked={selectedOptions.includes("digital marketing")}
                      onChange={handleCheckboxChange}
                    />
                    Digital Marketing
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="prefered"
                      value="aiml"
                      checked={selectedOptions.includes("aiml")}
                      onChange={handleCheckboxChange}
                    />
                    AIML
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="prefered"
                      value="seo optimization"
                      checked={selectedOptions.includes("seo optimization")}
                      onChange={handleCheckboxChange}
                    />
                    SEO Optimization
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="prefered"
                      value="design & branding"
                      checked={selectedOptions.includes("design & branding")}
                      onChange={handleCheckboxChange}
                    />
                    Design and Branding
                  </label>
                </div>
              </label>
              <ValidationError
                prefix="Prefered Services"
                field="prefered"
                errors={state.errors}
              />
            </div>
            <div className="contactus-input">
              <label className="contactus-label">
                <div className="contactus-input-title">Email</div>
                <input type="email" name="email" autoComplete="off" required />
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="contactus-input">
              <label className="contactus-label">
                <div className="contactus-input-title">Message</div>
                <textarea
                  type="text"
                  name="message"
                  autoComplete="off"
                  required
                />
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="contactus-main-butt">
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
          </form>
         { state.succeeded && <div className="thanks">
            Thank you for reaching out to us! We're thrilled to connect with
            you and will be in touch very soon.
          </div>}
        </div>
        <div className="contactus-main-img">
          <img src={astronaut} alt="" />
        </div>
      </div>
    </div>
  );
}
