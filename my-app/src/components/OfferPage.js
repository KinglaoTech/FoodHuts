import React from 'react'
import dots from '../images/dots.png'
import kabeb from '../images/kabeb.png'
import charga from '../images/charga.png'
import desi from '../images/desi.png'
import rosemary from '../images/rosemary.png'

function OfferPage() {
  return (
    <div>
      <img src={dots} alt='' className='absolute '/>
      <div className='container'>
        <div className='flex flex-wrap gap-3 justify-center  items-center mt-6 text-4xl md:text-3xl font-bold'>
          <div className='text-black'>Today</div>
          <div className='text-red-500'>Special</div>
          <div className='text-black'>Offers</div>
        </div>
      </div>
   
      <div className='mx-auto px-6 text-center mt-3 text-sm ' style={{"max-width":"650px"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>
    <div className='mx-auto container'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 p-6 mt-5 cursor-pointer'>
            <img className='w-4/4 md:w-1/4 md:px-1' src={kabeb} alt="" />
            <img className='hidden md:block w-1/4 md:px-1' src={charga} alt="" />
            <img className='hidden md:block w-1/4 md:px-1' src={desi} alt="" />
            <img className='hidden md:block w-1/4 md:px-1' src={kabeb } alt="" />
        </div>
    </div>
        <img src={rosemary} alt='' className='absolute right-1'/>
    </div>
  )
}

export default OfferPage
