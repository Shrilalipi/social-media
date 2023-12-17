/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 05:08 PM.
 */

import axios, { AxiosError } from "axios"

const postAnImageToFacebookPage = async (app: any, access_token: string, pageId: string, message: string, link: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.post(`${facebook_oauth_url}/${pageId}/feed`, {
        params: {
            access_token,
        },
        data: {
            message,
            link,
            publish: true
        }
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default postAnImageToFacebookPage;