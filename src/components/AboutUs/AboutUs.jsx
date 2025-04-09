import React from "react";
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="about_us">
          <h1 className="title">Information</h1>
          <p>
            When envisioning a fulfilling career, choosing a
            <b> top College in Badaun </b> is crucial to realizing your
            aspirations.
          </p>
          <p>
            BIMT Institute Badaun, among the <b> best college in Badaun </b>,
            is an A-lister campus dedicated to nurturing a well-rounded
            personality encompassing knowledge, communication, and leadership
            skills.
          </p>
          <p>
            Our unwavering focus is on upholding discipline across various
            departments, fostering a conducive and harmonious learning
            environment.
          </p>
          <p>
            BIMT Institute Badaun, one of the top <b> college in Badaun </b>,
            offers state-of-the-art laboratories and industry-aligned training,
            enabling the production of skilled technicians and engineers for a
            promising future with attractive salaries and job assurance.
          </p>
          <button id="btn1">Read More    &rarr;</button>
        </div>
        <div className="inquery_form">
        <div className="form_class">
        <h2 className="enquire">Get In Touch</h2>
        <form>
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Write your name here..." required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Let us know how to contact you back..." required/>
            </div>
            <div className="form-group">
                <label for="mobile">Mobile:</label>
                <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" required/>
            </div>
            <div className="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" placeholder="Your City" required/>
            </div>
            <div className="form-group">
                <label for="course">Select Course:</label>
                <select id="course" name="course" required>
                    <option value="">--Please choose a Course--</option>
                    <option value="course1">B.Sc(PCM)</option>
                    <option value="course2">B.Sc(ZBC)</option>
                    <option value="course3">B.Sc(H.Sci)</option>
                    <option value="course3">M.Sc(H.Sci)</option>
                    <option value="course3">B.Com(Honours)</option>
                    <option value="course3">B.Com(Regular)</option>
                    <option value="course3">M.Com</option>
                    <option value="course3">BBA</option>
                    <option value="course3">BCA</option>
                    <option value="course3">B.Ed</option>
                    <option value="course3">D.El.Ed</option>
                </select>
            </div>
            <button id="sbmt_btn" type="submit">Submit</button>
        </form>
    </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
