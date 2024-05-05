import React from "react";
import "./jobpage.css";
import { useLocation } from "react-router-dom";

export default function JobPage(props) {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div className="jobpage">
      <div className="jobpage-head">
        <div className="jobpage-title">{data.title}</div>
        <div className="jobpage-title-desc">
          <div>
            <b>Experience:</b> {data.exp}
          </div>
          <div>
            <b>Salary:</b> Competitive
          </div>
          <div>
            <b>Job Type:</b> Full Time & Permanent
          </div>
          <div>
            <b>Vacancies:</b> Multiple
          </div>
          <div>
            <b>Education:</b> Any relevant degree
          </div>
        </div>
      </div>
      <div className="jobpage-main">
        <div className="jobpage-desc">
          <div className="description-head">Job Description</div>
          <hr></hr>
          <div className="description-content">
            <div>
              <b>About B2World</b>
            </div>
            <p>
              Embracing innovation, B2World stands out as a premier provider of
              bespoke IT solutions, breathing new vitality into businesses and
              orchestrating seamless journeys. All credit goes to our
              exceptional team, ensuring your ventures thrive with unparalleled
              expertise. Our culture is a vibrant tapestry woven with threads of
              excellence and innovation. We thrive in a dynamic and inclusive
              atmosphere, where we celebrate teamwork, creativity, and
              collaboration.
            </p>
          </div>
          <div className="description-content">
            <div>
              <b>What would you do?</b>
            </div>
            <p>
              <ul>
                {data.description.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </p>
          </div>
          <div className="description-content">
            <p>
              If you are a {data.title} and want to join our team, please send
              your CV to Info@B2world.Co along with a cover letter detailing
              your experience and why you'd be a great fit.
            </p>
          </div>
        </div>
        <div className="jobpage-apply">
          <div className="apply-head">Apply for this role</div>
          <form
            className="apply-form"
            action="https://formspree.io/f/xpzvlblb"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="apply-input">
              <label className="apply-label">
                <div className="apply-input-title">Name*</div>
                <input type="text" name="name" autoComplete="off" required />
              </label>
            </div>
            <div className="apply-input">
              <label className="apply-label">
                <div className="apply-input-title">Email*</div>
                <input type="email" name="email" autoComplete="off" required />
              </label>
            </div>
            <div className="apply-input">
              <label className="apply-label">
                <div className="apply-input-title">Contact*</div>
                <input type="text" name="contact" autoComplete="off" required />
              </label>
            </div>
            <div className="apply-input">
              <label className="apply-label">
                <div className="apply-input-title">Role*</div>
                <input
                  type="text"
                  name="role"
                  value={data.title}
                  readOnly
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <div className="apply-input">
              <label className="apply-label">
                <div className="apply-input-title">Message</div>
                <textarea type="text" name="message" autoComplete="off" />
              </label>
            </div>
            <div className="apply-input">
              <label className="apply-label">
                <div className="apply-input-title">Resume*</div>
                <input
                  type="text"
                  name="resume"
                  placeholder="Provide the Google Drive link to your resume."
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <button type="submit">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
}
