import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navlinks">
        <Link className='link'>Administration</Link>
        <Link className='link'>Contact Us</Link>
        <Link className='link'>Campus</Link>
        <Link className='link'>Event Gallery</Link>
        <Link className='link'>Careers</Link>
        <Link className='link'>Courses</Link>
        <Link className='link'>Courses</Link>
        <Link className='link'>Admission Helpline</Link>
      </div>
    </div>
  )
}

export default Navbar
