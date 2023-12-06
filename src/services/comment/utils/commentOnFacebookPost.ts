/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:04.
 */

import axios from "axios";

// // Replace 'YOUR_ACCESS_TOKEN' with a valid access token with the necessary permissions
// const accessToken = 'YOUR_ACCESS_TOKEN';

// // Replace 'POST_ID' with the ID of the post you want to comment on
// const postId = 'POST_ID';

// // Replace 'Your comment text' with the actual comment you want to post
// const commentText = 'Your comment text';

// Function to post a comment on a Facebook post
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
