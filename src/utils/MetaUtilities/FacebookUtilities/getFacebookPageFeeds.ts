/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 04:46 PM.
 */

import axios, { AxiosError } from "axios"

const getUserFacebookPageFeeds = async (app: any, access_token: string, pageId: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/${pageId}/feed`, {
        params: {
            access_token,
            fields: 'full_picture,caption,message,created_time'
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default getUserFacebookPageFeeds;