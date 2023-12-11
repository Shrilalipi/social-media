/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:00.
 */


import { HookContext } from "@feathersjs/feathers";
import commentOnInstagramPost from "../utils/commentOnInstagramPost";

const UpdateCommentOnSocialMedia = () => async (context: HookContext) => {
    const { data, result } = context;
    const { mediaId, accessToken } = data;
    const { comment } = result;

    await commentOnInstagramPost(mediaId, accessToken, comment);

    return context;
}

export default UpdateCommentOnSocialMedia;