import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadedImage, enhancedImage, loading }) => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                {/* Original Image */}
                <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl">
                    <h2 className="text-center font-[moranga] text-lg bg-black/80 p-2 text-white">
                        Original
                    </h2>
                    <div className="min-h-[45vh] p-4">
                        {loading && uploadedImage ? (
                            <img
                                src={uploadedImage}
                                alt="original Image"
                                className="h-full w-full object-contain rounded-lg transition-all hover:scale-105"
                            />
                        ) : (
                            <p className="h-full w-full flex items-center justify-center text-gray-500">
                                No Uploaded Image
                            </p>
                        )}
                    </div>
                </div>

                {/* Enhanced Image */}
                <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl">
                    <h2 className="text-center font-[moranga] text-lg bg-blue-500 p-2 text-white">
                        Enhanced
                    </h2>
                    <div className="min-h-[45vh] p-4">
                        {enhancedImage ? (
                            <img
                                src={enhancedImage}
                                alt="enhanced Image"
                                className="h-full w-full object-contain rounded-lg transition-all hover:scale-105"
                            />
                        ) : (
                            loading ? <Loading /> : (
                                <p className="h-full w-full flex items-center justify-center text-gray-500">
                                    No Enhanced Image
                                </p>
                            )
                        )}
                    </div>
                </div>
            </div>

            {enhancedImage && (
                <div className="fixed bottom-8 right-8 z-10">
                    <a
                        href={enhancedImage}
                        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-200"
                        download
                    >
                        Download Enhanced Image
                    </a>
                </div>
            )}
        </div>
    );
};

export default ImagePreview;
