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
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start">
      <div className="pt-14">
        <h1 className="text-center font-semibold text-3xl font-sans text-wrap"><span className="text-blue-700">Upload</span> and <span className="text-blue-700">Enhance</span> Your Image in Seconds!</h1>
      </div>
      <ImageUpload UploadedImage={UploadedImageHandler} />
      <ImagePreview uploadedImage={uploadedImage} enhancedImage={enhancedImage} loading={loading} />
    </div>
  )
}

export default Home
