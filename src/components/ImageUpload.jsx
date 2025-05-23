import React from 'react'

const ImageUpload = ({UploadedImage}) => {
  
  const handleUploadedImage = (e) => {
  const ImgFile = e.target.files[0];
  UploadedImage(ImgFile)
  }

  return (
  <div className='min-h-[120px] w-full max-w-md mx-auto mt-8 md:mt-16 
  flex justify-center items-center 
  border-2 border-dashed rounded-lg md:rounded-2xl
  hover:border-blue-500 hover:bg-blue-50
  transition-all duration-300 ease-in-out
  p-4'>
    <label 
    htmlFor="fileInput"
    className='h-full w-full flex flex-col items-center justify-center 
    cursor-pointer space-y-2 text-center'
    >
    <input 
      type="file" 
      id="fileInput" 
      className='hidden' 
      onChange={handleUploadedImage}
      accept="image/*"
    />
    <svg 
      className="w-8 h-8 mb-2 text-blue-500" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
    <h2 className='text-lg font-medium text-gray-700'>Upload or Drop Image</h2>
    <p className='text-sm text-gray-500'>Click or drag and drop your image here</p>
    </label>
  </div>
  )
}

export default ImageUpload
