import React from 'react'
import './Feacture.css'
import img1 from '../asset/img1.png'
import img2 from '../asset/img2.png'

const Feacture = () => {
  return (
    <div className='parent-fe'>
      <div className='child-fe'>
        <div className='fe-detail '>
            <h1 className='fe-head'>Elevating Card Programs with Cutting-Edge Technology</h1>
            <p className='fe-para'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='fe-parapara'>Compare all Pro features</p>
        </div>
        <div className='fe-img'>
            <img src={img1} alt="Your Alt Text"  className='img1'/>  
            <img src={img2} alt="Your Alt Text"  className='img1'/>  
            
        </div>
      </div>
    </div>
  )
}

export default Feacture
