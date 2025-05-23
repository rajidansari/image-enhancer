import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50'>
      <div className='relative'>
        {/* Main spinner */}
        <div className='h-12 w-12 md:h-16 md:w-16 border-4 border-blue-500 animate-spin border-t-transparent rounded-full'></div>
  
        {/* Loading text */}
        <p className='mt-4 text-gray-600 text-sm md:text-base font-medium text-center'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
