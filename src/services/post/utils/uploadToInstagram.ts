/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:11.
 */

import axios from "axios";

const uploadToInstagram = async (pageAccessToken: string, pageId: string, caption: string, image_url: string) => {

    const accounts: any = await axios.get(`https://graph.facebook.com/v15.0/me/accounts`, {
        headers: {
            authorization: `Bearer ${pageAccessToken}`,
        }
    })
        .then((res: any) => res.data)
        .catch((e: any) => console.log(e.message));

    if (accounts && accounts.length) {
        const { data } = accounts;
        const validPageId = data.filter((each: any) => each.id.toString() === pageId.toString());

        if (validPageId && validPageId.length) {
            const igUserData: any = await axios.get(`https://graph.facebook.com/v15.0/${pageId}`, {
                headers: {
                    authorization: `Bearer ${pageAccessToken}`,
                },
                params: {
                    fields: 'instagram_business_account'
                }
            })
                .then((res: any) => res.data)
                .catch((e: any) => console.log(e.message));

            if (igUserData) {
                const { instagram_business_account: { id: igUserId } } = igUserData;

                const response = await axios.post(`https://graph.facebook.com/v15.0/${igUserId}/media`, {
                    headers: {
                        authorization: `Bearer ${pageAccessToken}`,
                    },
                    data: {
                        image_url,
                        caption
                    },
                })
                    .then((res: any) => res.data)
                    .catch((e: any) => console.log(e.message));

                return response;
            }
        }
    }
};

export default uploadToInstagram;
