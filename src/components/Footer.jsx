import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[7vh] md:mt-2 mt-16 bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner flex justify-center items-center'>
      <div className='container px-4'>
        <h2 className='font-semibold text-center text-xs sm:text-sm md:text-base lg:text-xm text-gray-700 hover:text-gray-900 transition-colors duration-300'>
          Powered by{' '}
          <span className='text-blue-600 hover:text-blue-800'>
            @rajidansari
          </span>
        </h2>
      </div>
    </footer>
  )
}

export default Footer