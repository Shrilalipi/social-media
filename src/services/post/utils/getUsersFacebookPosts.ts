/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 07-12-2023 at 01:49 AM.
 */

import Axios from "axios";
const facebook_oauth_url = 'https://graph.facebook.com/v7.0'
const getUsersFacebookPosts = async (accessToken: string) => {

    const userFacebookProfile = await Axios.get(`${facebook_oauth_url}/me`, {
        params: {
            access_token: accessToken,
        },
    })
        .then((result) => result.data)
        .catch((e) => {
            return e.response.data;
        });

    const { id: userFacebookId, message: profileErrorMessage } = userFacebookProfile;
    if (userFacebookId) {
        const userFacebookPosts = await Axios.get(`${facebook_oauth_url}/${userFacebookId}/feed`, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => res.data)
            .catch((e) => {
                return e.response.data;
            });

        console.log("userFacebookPosts: ", userFacebookPosts);

        return userFacebookPosts;
    }
    else return profileErrorMessage;
}

export default getUsersFacebookPosts;