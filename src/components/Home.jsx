import { useState } from "react"
import {ImageUpload, ImagePreview} from "./index"
import { enhanceApiService } from "../utils/api";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [enhancedImage, setEnhancedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const UploadedImageHandler = async (file) => {
    setUploadedImage(URL.createObjectURL(file))
    setLoading(true)

    // Image Enhancement code
    try {
      const enhancedURL = await enhanceApiService(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log("API ERROR ::", error);
    }
  }

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-b from-gray-50 to-white px-4 md:px-8">
      <div className="pt-8 md:pt-14 max-w-4xl w-full">
        <h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl font-sans leading-tight">
          Transform Your Images with 
          <span className="text-blue-600 mx-2">AI-Powered</span>
          Enhancement
        </h1>
        <p className="text-center text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Upload your image and watch it transform into a higher quality version within seconds
        </p>
      </div>
      
      <div className="w-full max-w-5xl mt-8 md:mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <ImageUpload UploadedImage={UploadedImageHandler} />
          <div className="mt-8">
            <ImagePreview 
              uploadedImage={uploadedImage} 
              enhancedImage={enhancedImage} 
              loading={loading} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
