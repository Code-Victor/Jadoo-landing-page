import React from 'react'
import { Hamburger } from './icons'
import Logo from './icons/logo'

const NavBar = () => {
  return (
    <div className='container mx-auto px-4 mt-10 md:px-0 flex justify-between w-full'>
        <Logo className={''}/>
        <ul className='hidden md:flex w-[50%]  max-w-[560px] justify-between '>
            <li className='text-lg font-medium'>Destinations</li>
            <li className='text-lg font-medium'>Hotels</li>
            <li className='text-lg font-medium'>Flights</li>
            <li className='text-lg font-medium'>Bookings</li>
            <li className='text-lg font-medium'>Login</li>
            <li>Sign up</li>
            <li className='text-lg font-medium'>EN</li>
        </ul>
        <Hamburger/>
    </div>
  )
}

export default NavBar