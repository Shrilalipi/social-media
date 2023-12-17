/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:00.
 */

import { HookContext } from "@feathersjs/feathers";
import commentOnFacebookPageFeed from "../../../utils/MetaUtilities/FacebookUtilities/commentOnFacebookPageFeed";
import commentOnInstagramPost from "../../../utils/MetaUtilities/InstagramUtilities/commentOnInstagramPost";

const UpdateCommentOnSocialMedia = () => async (context: HookContext) => {
    const { data, result, app } = context;
    const { mediaId, accessToken, pageFeedId } = data;
    const { comment } = result;

    if(accessToken){
        if(pageFeedId){
            await commentOnFacebookPageFeed(app, accessToken, pageFeedId, comment);
        }
        if(mediaId){
            await commentOnInstagramPost(app, accessToken, mediaId, comment);
        }
    }
    return context;
}

export default UpdateCommentOnSocialMedia;