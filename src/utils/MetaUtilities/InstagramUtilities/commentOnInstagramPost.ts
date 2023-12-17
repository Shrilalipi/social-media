/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 05:22 PM.
 */

import axios, { AxiosError } from "axios"

const commentOnInstagramPost = async (app: any, access_token: string, mediaId: string, message: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.post(`${facebook_oauth_url}/${mediaId}/comments`, {
        params: {
            access_token,
        },
        data: {
            message
        }
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default commentOnInstagramPost;