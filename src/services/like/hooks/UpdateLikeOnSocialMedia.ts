/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 16:58.
 */

import { HookContext } from "@feathersjs/feathers";
import likeFacebookPageFeed from "../../../utils/MetaUtilities/FacebookUtilities/likeFacebookPageFeed";

const UpdateLikeOnSocialMedia = () => async (context: HookContext) => {
    const { data, app } = context;
    const { accessToken, pageFeedId } = data;

    if (accessToken && pageFeedId) {
        await likeFacebookPageFeed(app, accessToken, pageFeedId);
    }

}

export default UpdateLikeOnSocialMedia;