/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:42.
 */

import { HookContext } from "@feathersjs/feathers";
import uploadToFacebook from "../utils/uploadToFacebook";
import uploadToInstagram from "../utils/uploadToInstagram";

const UpdatePostOnSocialMedia = () => async (context: HookContext) => {
    const { result, data } = context;
    const { pageId, pageAccessToken } = data;
    const { attachment, caption } = result;

    await uploadToFacebook(pageAccessToken, pageId, caption, attachment);
    // await uploadToInstagram(accessToken, )

    return context;
}

export default UpdatePostOnSocialMedia;