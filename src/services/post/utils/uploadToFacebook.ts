/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:50.
 */

import axios from "axios";

const uploadToFacebook = async (pageAccessToken: string, pageId: string, message: string, link: string) => {

    const response = await axios.post(`https://graph.facebook.com/v15.0/${pageId}/feed?access_token=${pageAccessToken}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            message,
            link
        },
    })
        .then((res: any) => res.data)
        .catch((e: any) => e.message);

    return response;
};

export default uploadToFacebook;
