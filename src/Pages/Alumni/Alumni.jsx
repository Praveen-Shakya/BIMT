import React from 'react'
import './Alumni.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Alumni = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="alumni-container">
        <div className="alumni-header">
            <h2 className='alumni-title'>Our Alumni Overview</h2>
            <p className='alumni-desc'>The way of Success and Failure.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Alumni
