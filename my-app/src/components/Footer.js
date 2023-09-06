import React from 'react'
import SocialMedia from '../images/SocialMedia.png'

const Footer = () => {
  return (
    <div className='container bg-[#FFF] mx-auto mt-auto pt-6 pl-4'>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
          <div className='col-span-2'>
              <div className='text-red-500 font-bold text-md'>Foodhut</div>
              <div className='mt-2' style={{"width":"80%"}}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor 
              </div>
              <img src={SocialMedia} className='pt-2' alt='' style={{"width":"80px"}}/>
          </div>
          <div className=''>
              <p className='text-red-500 font-bold'>About us</p>
              <ul className='mt-2 text-sm md:text-base flex flex-col'>
                <l1>About Us</l1>
                <l1>Service Us</l1>
                <l1>Contact</l1>
                <l1>Company</l1>
              </ul>
          </div>
          <div>
              <p className='text-red-500 font-bold'>Company</p>
              <ul className='mt-2 text-sm md:text-base flex flex-col'>
                <li>Partnership</li>
                <li>Terms of Use</li>
                <li>Policy</li>
                <li>Sitemap</li>
              </ul>
          </div>
          <div className='col-span-2'>
            <p className='text-red-500 font-bold'>Get in touch</p>
            <p className='mt-2' style={{"width":"80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className='grid grid-cols-2 gap-3 mt-3 mb-6'>
              <input type='text' className='bg-slate-200 rounded-2xl py-1 focus:border-blue-500
              hover:bg-white' placeholder='Email'/>
               <div className='bg-red-500 h-4 mt-1 text-center hover:opacity-70 cursor-pointer text-white rounded-2xl' 
               style={{"width":"100px"}}>Subscribe</div>
            </div>
          </div>
      </div>
      <div className='text-center mb-4'>Copyright © 2022 Foodhut</div>
    </div>
  )
}

export default Footer
