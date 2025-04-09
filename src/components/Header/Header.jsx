import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import Burger from '../../assets/menu.png'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className="header">
        <div className="logo">
          <img src={assets.logo} alt=""  className='header-logo'/>
        </div>
        {/* <img src={Burger} alt="" className='burger'/> */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {/* <span></span>
          <span></span>
          <span></span> */}
          <img src={Burger} alt=""  className='burgerImg'/>
        </div>
        <div className={`links ${isOpen ? "active" : ""}`}>
            <Link className='link active' to='/'><i className="fa-solid fa-house"></i>Home</Link>
            <Link className='link active' to='/about'>About-us</Link>
            {/* <Link className='link active' >Administration</Link> */}
            <Link className='link active' to='/contact'>Contact</Link>
            <Link className='link active'>Courses</Link>
            <Link className='link active'>Faculty</Link>
            <Link className='link active'>Administration</Link>
            <Link>Others</Link>
            <Link id="apply-btn" onClick={() => {
              document.getElementById('').scrollIntoView({behavior: 'smooth'})
            }}>Apply Now</Link>
        </div>
        </div>
    </>
  )
}

export default Header
