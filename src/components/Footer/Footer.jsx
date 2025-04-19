import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer">
        <div className="footer-section1">
          <h3>Act, Statutes, and Ordinances</h3>
          <ul>
            <Link className="footer-links1" to='#'>Anti Ragging Committee</Link><br />
            <Link className="footer-links1" to='#'>Rules & Regulations</Link><br />
            <Link className="footer-links1" to='#'>Proctorial Board</Link><br />
          </ul>
        </div>
        <div className="footer-section1">
          <h3>Programs</h3>
          <ul>
            {/* <li>Doctoral Programs</li> */}
            <Link className="footer-links1" to='/courses' state={{ section: "PG" }}>Post Graduate Programs</Link><br />
            <Link className="footer-links1" to='/courses' state={{ section: "UG" }}>Under Graduate Programs</Link>
          </ul>
        </div>
        <div className="footer-section1">
          <h3>Admission Process</h3>
          <ul>
            <Link className="footer-links1" to='#'>Fee Structure</Link><br />
            <Link className="footer-links1" to='#'>Scholarships</Link><br />
            <Link className="footer-links1" to='#'>Transport Fee</Link><br />
            <Link className="footer-links1" to='#'>Application Form</Link><br />
            <Link className="footer-links1" to='#'>Payment Policies</Link><br />
            <Link className="footer-links1" to='#'>Terms & Conditions</Link><br />
          </ul>
        </div>
        <div className="footer-section1">
          <h3>Why BIMT</h3>
          <ul>
            <Link className="footer-links1" to='/about'>About BIMT</Link><br />
            <Link className="footer-links1" to='/faculties'>Faculty</Link><br />
            <Link className="footer-links1" to='/alumni'>Alumni</Link><br />
            <Link className="footer-links1" to='#'>Infrastructure</Link><br />
            <Link className="footer-links1" to='#'>Testimonials</Link><br />
            <Link className="footer-links1" to='#'>Academic Excellence</Link><br />
            <Link className="footer-links1" to='#'>Strong Industry Coneection</Link><br />
          </ul>
        </div>
      </div>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Left Section: Contact Info */}
          <div className="contact-section">
            <img
              src={assets.logo}
              alt="BIMT Institute"
              className="footer-logo"
            />
            <h3 className="footer-title">Connect With Us</h3>
            <p className="footer-text">
              <strong>BIMT Institute</strong> <br />
              Badaun To Kakrala Road <br />
              Near Mandi Samiti, Badaun <br />
              Uttar Pradesh 243601 <br />
              <span>+91-9897777709, +91-9897777797</span> <br />
              <a
                href="#"
                className="admissionLink"
              >
                bimtbadaun@gmail.com
              </a>
            </p>
          </div>

          {/* Center Section: Social Media */}
          <div className="footer-social-media">
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/BIMTcollegebudaun/"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/b.i.m.t._badaun/"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/budaun-institute-of-management-&-technology/about/"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@BIMTOFFICIAL"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="map-section">
            <h3 className="footer-title">View in Map</h3>
            <iframe
              title="BIMT Institute Location"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.6977856757553!2d79.14649487433559!3d28.003141176014314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39754365082f1d8d%3A0x60c074a43f991681!2sBadaun%20Institute%20Of%20Management%20%26Technology%20(BIMT)!5e0!3m2!1sen!2sin!4v1733980652555!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © 2025 All rights reserved. Developed by{" "}
            <span className="developer-name"><Link to='https://anandkumar-portfoilo.netlify.app' className="developer-link" target="blank">Anand </Link>&<Link to='https://my-port-folio-blush.vercel.app/' className="developer-link" target="blank"> Praveen</Link> </span>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
