import React from "react";
import "./Apply.css";
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Apply = () => {
  return (
    <>
    <Navbar />
    <Header />
    <div className="admission-container">
      <div className="admission-left">
        <div className="admission-overlay">
          <h1>Admissions :</h1>
          <p>
            <em>
              Submit the registration form to explore your program of interest
              at BIMT Institute or contact us at <strong>+91-9897777709</strong>. Our
              dedicated advisors are ready to assist you!
            </em>
          </p>
        </div>
      </div>

      <div className="admission-right">
        <div className="form-box">
          <h2>APPLY NOW</h2>
          <form>
            <input type="text" placeholder="Enter Full Name*" />
            <input type="tel" placeholder="Enter Mobile No.*" />
            <input type="email" placeholder="Enter Email Id*" />

            <div className="form-row">
              <select>
                <option>Select State*</option>
                <option>Uttar-Pradesh</option>
              </select>
              <select>
                <option>Select City*</option>
                <option>Badaun</option>
                <option>Sahajhanpur</option>
                <option>Kasganj</option>
                <option>Bareilly</option>
              </select>
            </div>
            <select>
            <option value="">--Please choose a Course--</option>
                    <option value="course1">B.Sc(PCM)</option>
                    <option value="course2">B.Sc(ZBC)</option>
                    <option value="course3">B.Sc(H.Sci)</option>
                    <option value="course3">M.Sc(Zoology)</option>
                    <option value="course3">M.Sc(Botany)</option>
                    <option value="course3">M.Sc(Chemistry)</option>
                    <option value="course3">M.Sc(H.Sci)</option>
                    <option value="course3">B.Com(Honours)</option>
                    <option value="course3">B.Com(Regular)</option>
                    <option value="course3">M.Com</option>
                    <option value="course3">BBA</option>
                    <option value="course3">BCA</option>
                    <option value="course3">B.Ed</option>
                    <option value="course3">D.El.Ed</option>
            </select>

            <div className="form-row">
              <div className="captcha-box">
                <span className="captcha">xhxd</span>
                <button type="button">↻</button>
              </div>
              <input type="text" placeholder="Enter Text*" />
            </div>
            <button className="submit-btn">Register Now</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Apply;
