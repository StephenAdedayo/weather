import React from 'react'
import temp from '../assets/tempareture.png'
import forecast from '../assets/yeah.png'
import rain from '../assets/rain graph.png'
import sat from '../assets/SAT.png'
import sun from '../assets/SUN.png'
import mon from '../assets/MON.png'
import tue from '../assets/Tue.png'
import thur from '../assets/THU.png'
// import sat from '../assets/SAT.png'

const BelowNav = () => {
  return (
    <div className='flex mb-5 w-full'>
       
       <div className='flex-[20%]'>
        <div className='flex gap-3 items-center mb-5'>
            <p className='text-[#818085]'>Today</p>
            <p className='text-[#818085]'>Tomorrow</p>
            <p className='text-white'>Next 7 days</p>
        </div>
        <div>
     <img className='' src={temp} alt="" />
        </div>
       </div>

  <div className='flex-[60%]'>
    <div className='flex justify-end mb-5 mr-14'>
        <img src={forecast} alt="" />
    </div>

    <div className='grid grid-cols-6'>
        <img className='' src={sat} alt="" />
        <img src={sun} alt="" />
        <img src={mon} alt="" />
        <img src={tue} alt="" />
        <img src={tue} alt="" />
        <img src={thur} alt="" />
    </div>
  </div>

  <div className='flex-[20%]'>
      <p className='text-white mb-5'>Chances of rain</p>
      <img src={rain} alt="" />
  </div> 


    </div>
  )
}

export default BelowNav
