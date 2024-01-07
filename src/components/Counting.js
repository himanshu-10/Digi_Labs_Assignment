import React from 'react'
import './Counting.css'

const Counting = () => {
  return (
    <div className='parent-cnt'>
       <div className='child-cnt'>
            <div className='cnt-box'>
                <h1 className='cnt-head'>2 Million</h1>
                <p className='cnt-type'>Customers</p>
                <p className='cnt-detail'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
            <div className='cnt-box'>
                <h1 className='cnt-head'>1K</h1>
                <p className='cnt-type'>Downloads</p>
                <p className='cnt-detail'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
            <div className='cnt-box'>
                <h1 className='cnt-head'>$73 Million</h1>
                <p className='cnt-type'>Transactions</p>
                <p className='cnt-detail'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
            <div className='cnt-box'>
                <h1 className='cnt-head'>2.0</h1>
                <p className='cnt-type'>Latest Version</p>
                <p className='cnt-detail'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
       </div>
    </div>
  )
}

export default Counting
