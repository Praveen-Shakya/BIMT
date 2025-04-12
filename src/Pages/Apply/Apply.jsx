import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Apply.css';

const Apply = () => {
  return (
    <div className='apply'>
      <Navbar />
      <Header />
      <AboutUs className="about_us"/>
      <Footer />
    </div>
  )
}

export default Apply
