import React from 'react'
import './wise.css'
import name from '../asset/name.png'
import rating from '../asset/Rating.jpg'
import logo from '../asset/logo.jpg'


const Wise = () => {
  return (
    <div className='mainWise'>
        <div className='innerWise'>

            <div className='logo1'>
            <img src={logo} alt="Your Alt Text" />
            </div>
            <div className='parentAbout'>
                <p className='aboutWise'>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p>
            </div>
            
             
             <div className='avra'>
                <div className='avatar'>
                    <img src={name} alt="Your Alt Text" />
                </div>
                <div className='rating'>
                    <img src={rating} alt ="rating"/>
                </div>
             </div>
             
        </div>

      
    </div>
  )
}

export default Wise
