import React from 'react'
import './Placement.css'

const Placement = () => {
  return (
    <div>
      <div className="placement">
        <div className="text1">
            <h1 className="title">
                PLACEMENT
            </h1>
            <h4 className='para'>Placements are the top priority at the BIMT Institute</h4>
            <ul className='unorderlist'>
                <li className='list'>* Highest Package <b> 12 Lac </b></li>
                <li className='list'>* Aeverage Package <b> 2 LPA for B.C.A </b> </li>
                <li className='list'>* Top 5 Recruiters TCS, Justdail, ING Group, Kotak Mahindra Bank, TVS Motor Company</li>
                <li className='list'>* No. of Recruiters <b> 100+ </b></li>
            </ul>
            <button className='view_btn'>View More  &rarr;</button>
        </div>
        <div className="companies">
            <h4 className='sub_title'>BIMT INSTITUTE</h4>
            <h1 className='title'>Our Recruiters!</h1>
            <img src="https://www.futureinstitutions.org/images/recruiters-logo.jpg" alt="404_Image is not found" />
        </div>
      </div>
    </div>
  )
}

export default Placement
