/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 04:44 PM.
 */

import axios, { AxiosError } from "axios"

const getUserFacebookPages = async (app: any, access_token: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/me/accounts`, {
        params: {
            access_token,
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default getUserFacebookPages;