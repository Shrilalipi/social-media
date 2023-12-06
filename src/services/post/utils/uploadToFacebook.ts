/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:50.
 */

import axios from "axios";

const uploadToFacebook = async (pageAccessToken: string, pageId: string, message: string, link: string) => {
    try {
        const response = await axios.post(`https://graph.facebook.com/v15.0/${pageId}/feed?access_token=${pageAccessToken}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                message,
                link
            },
        });

        console.log('Photo uploaded successfully:', response.data);
    } catch (error: any) {
        console.log(error);
        console.error('Error uploading photo to Facebook:', error.response ? error.response.data : error.message);
    }
};

export default uploadToFacebook;
