import React from 'react'
import './Contact.css'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'

const Contact = () => {
  return (
    <div className='contact-container'>
      <Navbar />
      <Header />
      <div className="contact-section-top">
      <div className="overlay">
        <div className="contact-box">
          <h1>Stay Connected with BIMT Institute</h1>
          <p className="quote">
            <em>
              "Your Future Begins with a Conversation – Reach Out Today!"
            </em>
          </p>
          <div className="address">
            <h2>
              Head Office – <span>Badaun</span>
            </h2>
            <p>
            <i className="fas fa-map-marker-alt icon"></i>
              Indra Chowk, Badaun– Bareilly Road <br />
              Kadeer Market 1st floor Near Indra Chowk, Badaun, UP 243601
            </p>
          </div>
        </div>
      </div>
     </div>
     <div className="contact-cards-container">
      <div className="card">
      <i className="fas fa-phone card-icon"></i>
        <h3>Phone</h3>
        <p>+91-9897777709</p>
        <p>+91-9897777797</p>
      </div>

      <div className="card">
        <i className="fas fa-envelope card-icon"></i>
        <h3>Email</h3>
        <p>bimtinstitute@gmail.com</p>
        <p>bimtbadaun.in</p>
      </div>

      <div className="card">
        <i className="fas fa-globe card-icon"></i>
        <h3>Website</h3>
        <p>www.bimtbadaun.in</p>
      </div>

      <div className="card">
      <i className="fab fa-whatsapp card-icon"></i>
        <h3>Whatsapp</h3>
        <p>BIMT</p>
      </div>
    </div>

    <section className="social-section">
      <h2 className="social-heading">Stay Connected</h2>
      
      <div className="social-icons">
        <a href="https://www.facebook.com/BIMTcollegebudaun/" target='blank' aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/b.i.m.t._badaun/" target='blank' aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/school/budaun-institute-of-management-&-technology/about/" target='blank' aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.youtube.com/@bimtlivenow1229" target='blank' aria-label="YouTube"><i className="fab fa-youtube"></i></a>
      </div>

      <p className="social-description">
        Follow us on social media for the latest updates, admission notices, and campus events.
        Let's shape your future together – connect with us today!
      </p>
    </section>
    <AboutUs/>
    <Footer />
    </div>
  )
}

export default Contact;