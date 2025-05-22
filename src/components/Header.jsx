import React from 'react'

const Header = () => {
  return (
    <div className='h-16 w-full flex items-center justify-between bg-gray-200 px-5 md:px-28'>
      <h1 className='text-blue-700 font-semibold font-[moranga] text-2xl cursor-pointer'>PicWash</h1>
      <div className='flex gap-10 items-center'>
      <p className='cursor-pointer'>About</p>
      <p className='cursor-pointer'>Contact Us</p>
      </div>
    </div>
  )
}

export default Header
