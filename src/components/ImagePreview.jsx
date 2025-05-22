import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadedImage, enhancedImage, loading }) => {
    return (
        <div className="w-full h-full  mt-10 md:flex flex-1/2 gap-16 md:justify-center">
            {/* original Image */}
            <div className="min-h-[45vh] bg-gray-200 rounded-2xl w-74 overflow-hidden">
                <h2 className="text-center font-[moranga] bg-black/80 p-1 rounded-2xl  text-white/90">
                    Original
                </h2>
                {loading && uploadedImage ? (
                    <img
                        src={uploadedImage}
                        alt="original Image"
                        className="h-full w-full object-contain "
                    />
                ) : (
                    <p className="h-full w-full text-center grid content-center">
                        No Uploaded Image
                    </p>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="min-h-[45vh] bg-gray-200 rounded-2xl w-74 overflow-hidden">
                <h2 className="text-center font-[moranga] bg-blue-500 p-1 rounded-2xl  text-white/90">
                    Enhanced
                </h2>
                { enhancedImage ? (
                    <img
                        src={enhancedImage}
                        alt="enhanced Image"
                        className="h-full w-full object-contain"
                    />
                ) : (
                    loading ? <Loading /> : (<p className="h-full w-full text-center grid content-center">
                      No Enhanced Image
                  </p>)
                )}
            </div>
            <div>
            <a href={enhancedImage}
            className="border-blue-500 border-2 rounded-2xl py-1 px-2 bg-blue-500 fixed bottom-62 right-[23vw] text-white" 
            >Download</a>
            </div>
        </div>
    );
};

export default ImagePreview;
