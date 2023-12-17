/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 04:58 PM.
 */

import axios, { AxiosError } from "axios"

const getConnectedIgUserDetails = async (app: any, access_token: string, igUserId: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/${igUserId}`, {
        params: {
            access_token,
            fields: 'id,username,followers_count,follows_count,media_count,media'
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default getConnectedIgUserDetails;