/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 04:53 PM.
 */

import axios, { AxiosError } from "axios"

const getConnectedIgUserId = async (app: any, access_token: string, facebookPageId: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/${facebookPageId}`, {
        params: {
            access_token,
            fields: 'instagram_business_account'
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default getConnectedIgUserId;