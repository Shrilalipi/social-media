/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 05:02 PM.
 */

import axios, { AxiosError } from "axios"

const getIgUserMedias = async (app: any, access_token: string, igUserId: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/${igUserId}/media`, {
        params: {
            access_token,
            fields: 'media_url,caption,comments_count,like_count,media_type,comments'
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default getIgUserMedias;