import axios from "axios";

const API_KEY = "wxajtkk86min4f3n7";

export const enhanceApiService = async (file) => {
    try {
        // uploading image to api
        const taskId = await uploadToEnhance(file);
        console.log("taskId got.", taskId);

        // fetching image from api
        const enhancedImg = await pollingForFetchEnhanced(taskId);
        console.log("got image", enhancedImg)

        return enhancedImg;
    } catch (error) {
        console.log("enhancedApiService ::", error);
    }
};

const uploadToEnhance = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    try {
        const { data } = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/tasks/visual/scale`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-API-KEY": import.meta.env.VITE_API_KEY,
                },
            }
        );

        if (data?.data?.task_id) {
            return data?.data?.task_id;
        }

        alert("Failed To Enhance Your Image! Please Try Again.");
    } catch (error) {
        console.log("uploadToEnhance ::", error);
    }
};

const fetchEnhanced = async (taskId) => {
    const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/tasks/visual/scale/${taskId}`,

        {
            headers: {
                "X-API-KEY": import.meta.env.VITE_API_KEY,
            },
        }
    );

    // console.log(data.data);
    return data.data;
};

// polling

const pollingForFetchEnhanced = async (taskId, retries = 0) => {
    const enhancedImg = await fetchEnhanced(taskId);

    if(retries >= 15) {
        console.error("max retries error");
        return;
    }

    
    if(enhancedImg.state === 4) {
        await new Promise((resolve) => (setTimeout(resolve, 2000)))

        // wait and retry
        return await pollingForFetchEnhanced(enhancedImg.task_id, retries+1);
    }

    return enhancedImg.image;
}



// response---------------

// completed_at: 1744812367;
// created_at: 1744812367;
// download_time: 36;
// image: "https://wxtechhk.oss-cn-hongkong.aliyuncs.com/tasks/output/scale/dcde75bc-c3e5-4cf5-881e-735de2f2d9fe.jpg?x-oss-credential=LTAI5tGjJnh66c1txANiRBQN/20250416/cn-hongkong/oss/aliyun_v4_request&x-oss-date=20250416T140720Z&x-oss-expires=3600&x-oss-signature=f84e427c5221d72293c5f7ff488e69b9b2f4176e75154d267fdc2f397f287235&x-oss-signature-version=OSS4-HMAC-SHA256";
// image_height: 1536;
// image_width: 1024;
// processed_at: 1744812367;
// progress: 100;
// return_type: 1;
// state: 1;
// state_detail: "Complete";
// task_id: "dcde75bc-c3e5-4cf5-881e-735de2f2d9fe";
// time_elapsed: 482.8900146484375;
// type: "clean";
