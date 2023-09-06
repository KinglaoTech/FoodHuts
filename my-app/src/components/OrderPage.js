import React from 'react'
import kabeb2 from '../images/kabeb2.png'
import kabeb3 from '../images/kabeb3.png'
import kabeb4 from '../images/kabeb4.png'
import kabeb5 from '../images/kabeb5.png'
import kabeb6 from '../images/kabeb6.png'
import kabeb7 from '../images/kabeb7.png'
import kabeb8 from '../images/kabeb8.png'
import kabeb9 from '../images/kabeb9.png'

function OrderPage() {
  return (
    <div className='mt-1'>
      <div className='flex justify-center items-center gap-2 font-semibold text-2xl'>
        <div className='text-red-500'>Menu</div>
        <div>That</div>
        <div className='text-yellow-400'>Always</div>
        <div>Makes</div>
        <div>You</div>
      </div>
      <div className='flex justify-center items-center  font-semibold gap-2 text-2xl'>
        <div>Fall In</div>
        <div className='text-red-500'>Love</div>
      </div>
      <div className='flex mt-3 gap-3 justify-center'>
        <div className='bg-red-500 text-white px-2 rounded-xl text-center
        hover:opacity-80 cursor-pointer' style={{"width":"70px"}}>Roman</div>
        <div className='offers' style={{"width":"90px"}}>Breakfast</div>
        <div className='offers' style={{"width":"90px"}}>Lunch</div>
        <div className='offers hidden md:block' style={{"width":"90px"}}>Dinner</div>
        <div className='offers hidden md:block' style={{"width":"90px"}}>Mexican</div>
        <div className='offers hidden md:block' style={{"width":"90px"}}>Italian</div>
        <div className='offers hidden md:block' style={{"width":"90px"}}>Desserts</div>
        <div className='offers hidden md:block' style={{"width":"90px"}}>Drinks</div>
      </div>
      <div className='mx-auto container'>
        <div className='grid cursor-pointer grid-cols-1 gap-2 md:grid-cols-4 p-6'>
            <img src={kabeb2} alt="" />
            <img className='hidden md:block' src={kabeb3} alt="" />
            <img className='hidden md:block' src={kabeb4} alt="" />
            <img className='hidden md:block' src={kabeb5} alt="" />
            <img className='hidden md:block mt-5' src={kabeb9} alt="" />
            <img className='hidden md:block mt-5' src={kabeb6} alt="" />
            <img className='hidden md:block mt-5' src={kabeb7} alt="" />
            <img className='hidden md:block mt-5' src={kabeb8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OrderPage
