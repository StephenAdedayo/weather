import React from 'react'
import grid from '../assets/grid (2).png'
import bell from '../assets/Layer 2.png'
import location from '../assets/pin.png'
import search from '../assets/Layer 2 (1).png'
import dark from '../assets/group1.png'
import profile from '../assets/ellip.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mb-5 w-full'>
      
      <div className='flex gap-5 items-center'>
         <div className='bg-[#1E1E1E] flex justify-center items-center rounded-full p-2'>
         <img src={grid} alt="" />

        </div>
  <div className='bg-[#1E1E1E] flex justify-center items-center rounded-full p-2'>
         <img src={bell} alt="" />

        </div>        <div className='flex items-center gap-3'>
            <img src={location} alt="" />
            <p className='text-white'>Ondo, Nigeria</p>
        </div>
      </div>


      <div className='bg-[#1E1E1E] px-2 py-2 w-[25%] rounded-md flex items-center gap-3'>
        <img src={search} alt="" />
        <input type="text" className='outline-none flex-1 placeholder:text-white text-white' placeholder='Search city'/>
      </div>
     

     <div className='flex items-center gap-3'>

       <div className='border border-[#626161] rounded-2xl py-0.5 flex justify-end w-[100px] '>
         <img className='w-[30px]' src={dark} alt="" />
       </div>
       <img src={profile} alt="" />

     </div>
    </div>
  )
}

export default Navbar
