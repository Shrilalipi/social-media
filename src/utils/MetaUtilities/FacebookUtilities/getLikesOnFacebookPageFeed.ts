/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 04:51 PM.
 */

import axios, { AxiosError } from "axios"

const getLikesOnFacebookPageFeed = async (app: any, access_token: string, pageFeedId: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/${pageFeedId}/likes`, {
        params: {
            access_token,
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default getLikesOnFacebookPageFeed;