/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:42.
 */

import { HookContext } from "@feathersjs/feathers";
import postAnImageToFacebookPage from "../../../utils/MetaUtilities/FacebookUtilities/postAnImageToFacebookPage";
import postAnImageToInstagram from "../../../utils/MetaUtilities/InstagramUtilities/postAnImageToInstagram";
import getConnectedIgUserId from "../../../utils/MetaUtilities/InstagramUtilities/getConnectedIgUserId";

const UpdatePostOnSocialMedia = () => async (context: HookContext) => {
    const { result, data, app } = context;
    const { attachment, caption } = result;
    const { pageId, accessToken } = data;

    let igUserId;
    if (accessToken) {
        if (pageId) {
            igUserId = await getConnectedIgUserId(app, accessToken, pageId);
            await postAnImageToFacebookPage(app, accessToken, pageId, caption, attachment);
            if (igUserId) {
                await postAnImageToInstagram(app, accessToken, igUserId, attachment, caption);
            }
        }
    }

    return context;
}

export default UpdatePostOnSocialMedia;