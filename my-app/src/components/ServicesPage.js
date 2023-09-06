import React from 'react'
import manchef2 from '../images/manchef2.png'
import arrowthread from '../images/arrowthread.png'
import phone from '../images/phone.png'
import twentyfour from '../images/twentyfour.png'
import Cakee from '../images/Cakee.png'

const ServicesPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly mt-5'>
      <div className='w-2/2 md:w-1/2'>
        <img className='absolute hidden md:block' src={arrowthread} alt='' style={{"width":"400px","margin-left":"300px","margin-top":"45px"}}/>
        <img className='-mt-3' src={manchef2} alt=''/>
      </div>
      <div className='w-2/2 md:w-1/2'>
        <div className='text-3xl font-semibold px-4'>
            <div className='flex gap-2'>
                <div className='font-bold'>We are</div>
                <div className='text-red-500 font-bold'>more than</div>
            </div>
            <div className='flex gap-2'>
                <div className='text-yellow-400 font-bold'>multiple</div>
                <div className='font-bold'>service</div>
            </div>
            <div className='text-sm justify-center mt-3'>
                This is a type of restaurant which typically serves food and drink, 
                in addition to light refreshments such as baked goods or snacks. 
                The term comes frome the rench word meaning food
            </div>
            <div className='text-xs mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div className='flex items-center gap-1 mb-4'>
                    <img src={phone} alt=''/> <span>Online Order</span>
                  </div>
                  <div className='flex items-center gap-1 mb-4'>
                    <img src={twentyfour} alt=''/> <span>24/7 Service</span>
                  </div>
                  <div className='flex items-center gap-1 mb-4'>
                    <img src={Cakee} alt=''/> <span>Pre Reservation</span>
                  </div>
                  <div className='flex items-center gap-1 mb-4'>
                    <img src={Cakee} alt=''/> <span>Organized Foodhut Place</span>
                  </div>
                  <div className='flex items-center gap-1 mb-4'>
                    <img src={Cakee} alt=''/> <span>Super Chef</span>
                  </div>
                  <div className='flex items-center gap-1 mb-4'>
                    <img src={Cakee} alt=''/> <span>Clean Kitchen</span>
                  </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
