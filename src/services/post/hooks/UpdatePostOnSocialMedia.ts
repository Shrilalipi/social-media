/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:42.
 */

import { HookContext } from "@feathersjs/feathers";
import uploadToFacebook from "../utils/uploadToFacebook";
import uploadToInstagram from "../utils/uploadToInstagram";

const UpdatePostOnSocialMedia = () => async (context: HookContext) => {
    const { result, data, params } = context;
    const { attachment, caption } = result;
    const { pageId, pageAccessToken } = data;
    const { user } = params;
    if (!user) return context;

    const { userFacebookPages } = user;
    if (userFacebookPages && userFacebookPages.length) {
        // console.log("userFacebookPages: ", userFacebookPages[0]);
        const { data } = userFacebookPages[0];

        if (data && data.length && pageId) {
            let validPageId = data.map((each: any) => each.id.toString === pageId.toString());

            if (validPageId && validPageId.length) {
                await uploadToFacebook(pageAccessToken, pageId, caption, attachment);
                await uploadToInstagram(pageAccessToken, pageId, caption, attachment)
            }
        }


    }

    // await uploadToInstagram(accessToken, )

    return context;
}

export default UpdatePostOnSocialMedia;

// {
//     access_token: 'EAAPjzqMH0VIBOzBIDax5NYRkft4CHoXpGFcXEFX4nZCh00MOZB51hch1eRVa3CeCWsZCZBEbWI1l1Ycaao1mGz1NM3AbZA16DHZAEnyWUZBDNq8fSH2ZAWAqJhaykMX0IbCACLP2BF7fN8A7aY8tA8BwTRceZB3zbCroKk2I0U1LnT3Ye57FvYnK3V2bUiUttd6HR00qcUiQtxdiTBzT0pFYoULcgU6v62aZBSi2bofmdGELTXp5UZD',
//         category: 'Pizza place',
//             category_list: [Array],
//                 name: 'Page 1',
//                     id: '196603580199525',
//                         tasks: [Array]
// },