/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:04.
 */

import axios from "axios";

const commentOnFacebookPost = async (accessToken: string, postId: string, commentText: string) => {
    try {
        const commentResponse = await axios.post(`https://graph.facebook.com/v13.0/${postId}/comments`, null, {
            params: {
                access_token: accessToken,
                message: commentText,
            },
        });

        console.log('Comment posted successfully:', commentResponse.data);
    } catch (error: any) {
        console.error('Error posting comment:', error.response ? error.response.data : error.message);
    }
};

export default commentOnFacebookPost;
