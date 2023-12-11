/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:58.
 */

import { HookContext } from "@feathersjs/feathers";
import likeFacebookPost from "../utils/likeFacebookPost";

const UpdateLikeOnSocialMedia = () => async (context: HookContext) => {
    const { data } = context;
    const { pageAccessToken, postObjectId } = data;

    await likeFacebookPost(pageAccessToken, postObjectId)
}

export default UpdateLikeOnSocialMedia;