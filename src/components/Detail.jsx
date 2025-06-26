import React from 'react'
import uv from '../assets/UV Index.png'
import Wind from '../assets/Wind Satus.png'
import humidity from '../assets/Humidity (1).png'
import Visibility from '../assets/Visibility.png'
import started from '../assets/Get Started Banner.png'
import dubai from '../assets/Dubai.png'
import canada from '../assets/Canada.png'
import California from '../assets/California.png'
import beijing from '../assets/Beijing.png'

const Detail = () => {
  return (
    <div className='w-full flex '>
      
      <div className='flex-[40%] '>
        <p className='text-white mb-5'>Today's Overview</p>
          
          <div className='grid grid-cols-2 gap-10'>
         <img className='w-full' src={Wind} alt="" />
         <img className='w-full' src={uv} alt="" />
         <img className='w-full' src={humidity} alt="" />
         <img className='w-full' src={Visibility} alt="" />
          </div>

      </div>

      <div className='flex-[30%] '>
        <p className='mb-5 opacity-0'>op</p>
       <img className='w-full' src={started} alt="" />
      </div>


      <div className='flex-[20%]'>
        <div className='flex justify-between mb-5 text-white items-center'>
            <p>Other cities</p>
            <p>See All</p>
        </div>

        <div className='flex flex-col h-auto gap-10'>
            <img src={beijing} alt="" />
            <img src={California} alt="" />
            <img src={dubai} alt="" />
            <img src={canada} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Detail
