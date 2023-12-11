/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:56.
 */

import axios from "axios";

// Function to like a post
const likeFacebookPost = async (pageAccessToken: string, page_object_id: string) => {

    // // Find the post-object-id 
    // const postData = await axios.post(`https://graph.facebook.com/v13.0/me/feeds?fields=object_id`, null, {
    //     params: {
    //         access_token: accessToken,
    //     },
    // })
    //     .then((res: any) => res.data)
    //     .catch((e: any) => console.log(e.message));


    const likeResponse = await axios.post(`https://graph.facebook.com/v13.0/${page_object_id}/likes`, {
        params: {
            access_token: pageAccessToken,
        },
    })
        .then((res: any) => res.data)
        .catch((e: any) => console.log(e.message));


    return likeResponse;
};

export default likeFacebookPost;
