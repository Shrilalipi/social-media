/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:35.
 */

import axios from "axios";

const commentOnInstagramPost = async (mediaId: string, accessToken: string, commentText: string) => {
    const commentResponse = await axios.post(`https://graph.facebook.com/v13.0/${mediaId}/comments`, {
        params: {
            access_token: accessToken,
        },
        data: {
            caption: commentText
        }
    })
        .then((res: any) => res.data)
        .catch((e: any) => console.log(e.message));

    return commentResponse;
};

export default commentOnInstagramPost;
