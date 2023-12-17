/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 05:17 PM.
 */

import axios, { AxiosError } from "axios"

const postAnImageToInstagram = async (app: any, access_token: string, igUserId: string, image_url: string, caption: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.post(`${facebook_oauth_url}/${igUserId}/media`, {
        params: {
            access_token,
        },
        data: {
            is_carousel_item: true,
            image_url,
            media_type: 'IMAGE',
            caption
        }
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    return response;
}

export default postAnImageToInstagram;