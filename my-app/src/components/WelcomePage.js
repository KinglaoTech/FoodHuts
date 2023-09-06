import React from 'react'
import womancombo1 from '../images/womancombo1.png'
import love from '../images/love.png'
import play from '../images/play.png'
import Search from '../icons/Search'
import Orange from '../images/Orange.png'
import slider from '../images/slider.png'
import line from '../images/line.png'


function WelcomePage() {
  return (
    <div>
          <img src={line} alt='' className='hidden md:block absolute left-6 top-6 h-1/4' style={{"margin-left":"60px"}}/>
          <img src={Orange} alt='' className='absolute left-6 top-1/2 md:top-6' style={{"margin-left":"350px","margin-top":"200px"}}/>
          
        <div className='flex flex-col-reverse gap-5 md:flex-row justify-center md:justify-evenly items-center w-fit mt-6'>
          <div className='flex flex-col gap-6'>
              <div className='flex gap-1 items-center justify-center  bg-red-100 py-1 rounded-2xl mt-6' 
                style={{"width":"100px"}}>
                <img src={love} alt='' style={{"width":"12px"}}/>
                <div style={{"font-size":"8px"}}>People Trust Us</div>
              </div>
              <div className='text-4xl font-semibold md:-mx-6' style={{"margin-top":"-50px"}}>
                <div className='flex my-2 gap-2 '>
                  <div>We're</div> 
                  <div className='text-red-500'>Serious</div> 
                  <div>For</div>
                </div>
              <div className='flex gap-2'>  
                <div className='text-red-500'>Food</div> 
                <div>&</div> 
                <div className='text-yellow-500'>Delivery</div>
              </div>
              <div className='text-xs mt-4' style={{}}>
                Best cooks and best delivery guys all at your service.<br></br>
                Hot tasty food will reach you in 60 minutes.                
            </div>

            <div className='container text-sm mt-3'>
            <form className='form'>
              <div className='flex items-center relative' style={{"max-width":"300px"}}> 
                <span><Search className='absolute left-1 top-1 cursor-pointer'/></span>
                <input type="text" className='p-1 px-4 focus:border-blue-400 w-full rounded-3xl block'
                placeholder='Search food'/>
                <span className='absolute right-1 top-1 bg-yellow-400 p-1 cursor-pointer rounded-full'
                style={{"margin-top":"-4px"}}><Search/></span>
              </div>
            </form>
            </div>
      
            <div className="flex items-center">
              <div className='bg-red-500 text-xs py-1 cursor-pointer rounded-xl text-white shadow px-3 mr-4 
              hover:opacity-80 transition hover:-translate-y-1 duration-500' style={{"width":"120px"}}>Download App</div>
              <img className='animate-bounce hover:animate-none z-10 cursor-pointer' src={play} alt='' style={{"width":"50px"}}/>
              <a href='video' className='text-sm -ml-3 hover:text-red-500'>WATCH VIDEOS</a>
              </div>
            </div>
          </div> 
        
          <img className='md:-mt-5 w-2/2 md:w-1/2' src={womancombo1} alt=''/>
        </div>
          <img src={slider} alt='' className='hidden md:block absolute left-6 -mt-6'/>
    </div>
  )
}

export default WelcomePage

