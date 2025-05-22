import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='h-10 w-10 border-2 border-blue-500 animate-spin border-t-transparent rounded-full '></div>
    </div>
  )
}

export default Loading
