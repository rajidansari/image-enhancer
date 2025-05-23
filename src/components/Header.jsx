import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 h-16 w-full flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-400 px-4 sm:px-8 md:px-28 shadow-lg'>
      <h1 className='text-white font-semibold font-[moranga] text-xl sm:text-2xl hover:scale-105 transition-transform duration-200 cursor-pointer'>
        PicWash
      </h1>
      
      <nav className='flex gap-4 sm:gap-10 items-center'>
        <a className='text-white hover:text-blue-100 transition-colors duration-200 text-sm sm:text-base font-medium cursor-pointer'>
          About
        </a>
        <a className='bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base font-medium cursor-pointer'>
          Contact Us
        </a>
      </nav>
    </header>
  )
}

export default Header
