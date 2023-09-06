import React from 'react'
import Manchefcombo from '../images/Manchefcombo.png'
import appleStore from '../images/appleStore.png'
import googlePlay from '../images/googlePlay.png'

function DownloadPage() {
  return (
    <body className='DLpage pb-4'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly text-3xl
      md:text-4xl gap-6 p-3 font-bold'>
        <div className='container'>
          <div className='space-x-2 pr-4'>
            <span>It's Now</span>
            <span className='text-red-500'>More Easy</span>
            <span>To</span>
            <span className='text-yellow-400'>Order</span>
            <span>by Our Mobile</span>
            <span className='text-red-500'> App</span>
          </div>
          <div className='text-lg mt-4 font-semibold md:text-xl md:pr-6'>
            All you need to do is download one of the best delivery apps,
            make a and most companies are opting  for mobile app development for food delivery
          </div>
          <div className='flex gap-4 mt-4 justify-center md:justify-normal cursor-pointer'>
            <a href='apple'><img src={appleStore} alt=''/></a>
            <a href='google'><img src={googlePlay} alt=''/></a>
          </div>
        </div>
        <div>
          <img src={Manchefcombo} alt='' style={{"width":"800px"}}/>
        </div>      
      </div>
    </body>
  )
}

export default DownloadPage
