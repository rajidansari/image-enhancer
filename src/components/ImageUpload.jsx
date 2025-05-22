import React from 'react'

const ImageUpload = ({UploadedImage}) => {
  
  const handleUploadedImage = (e) => {
    const ImgFile = e.target.files[0];

    UploadedImage(ImgFile)
  }


  return (
    <div className='h-20 w-64 mt-16 flex justify-center border-2 border-dashed rounded-2xl  hover:border-blue-400 transition'>
      <label htmlFor="fileInput"
      className='h-full w-full flex flex-col items-center justify-center cursor-pointer'
      >
        <input type="file"  id="fileInput" className='hidden' onChange={handleUploadedImage} />
      <p>⬇️</p>
      <h2>Upload or Drop your Image</h2>
      </label>
    </div>
  )
}

export default ImageUpload
