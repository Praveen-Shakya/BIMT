import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navlinks">
        <Link className='link' to='/contact'>Contact Us</Link>
        <Link className='link' to='https://www.instagram.com/b.i.m.t._badaun/' >Campus</Link>
        <Link className='link'>Event Gallery</Link>
        <Link className='link'>Careers</Link>
        <Link className='link' to='/courses'>Courses</Link>
        <Link className='link' to='tel:+9897777709'>Admission Helpline :📞 +91-9897777709</Link>
      </div>
    </div>
  )
}

export default Navbar
