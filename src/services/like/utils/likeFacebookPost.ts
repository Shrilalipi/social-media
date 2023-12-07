/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:56.
 */

import axios from "axios";

// Function to like a post
const likeFacebookPost = async (accessToken: string, postId: string) => {
    try {
        // const likeResponse = await axios.post(`https://graph.facebook.com/v13.0/${postId}/likes`, null, {
        //     params: {
        //         access_token: accessToken,
        //     },
        // });

        // console.log('Post liked successfully:', likeResponse.data);
    } catch (error: any) {
        console.error('Error liking post:', error.response ? error.response.data : error.message);
    }
};

export default likeFacebookPost;
