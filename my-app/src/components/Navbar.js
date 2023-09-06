import React from 'react'
import Logo from '../images/Logo.png'
import MenuBar from '../icons/MenuBar'

function Navbar() {
  return (
    // header
    <div className='flex items-center justify-between px-4'>
      <img className='pt-2' src={Logo} alt='' style={{"width":"80px"}}/>
      <div className='hidden md:flex gap-6 text-xs'>
        <a className='hover:text-red-500' href='offer'>Today's Special Offer</a>
        <a className='hover:text-red-500' href='about'>Why FoodHut</a>
        <a className='hover:text-red-500' href='menu'>Our Menu</a>
        <a className='hover:text-red-500' href='food'>Our Popular Food</a>
        <div className='bg-red-500 py-1 cursor-pointer rounded-xl text-white shadow px-3 mr-4 
        hover:opacity-80 transition duration-500 hover:scale-110'>Download App</div>
      </div>
      <MenuBar className='md:hidden text-3xl cursor-pointer font-bold hover:scale-110 transition' style={{"width":""}}/>
    </div>
  )
}

export default Navbar
