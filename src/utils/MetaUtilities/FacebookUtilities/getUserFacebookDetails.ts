/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 17-12-2023 at 04:22 PM.
 */

import axios, { AxiosError } from "axios"

const getUserFacebookDetails = async (app: any, access_token: string) => {
    const facebook_oauth_url = app.get('facebook_oauth_url');
    const response = await axios.get(`${facebook_oauth_url}/me`, {
        params: {
            access_token,
            fields: 'id,name,email,age_range,birthday'
        },
    })
        .then((res: any) => res.data)
        .catch((e: AxiosError) => e.message);

    const { id: userFacebookId, message: profileErrorMessage } = response;
    console.log("userFacebookProfile: ", response);
    if (!userFacebookId) {
        return {
            result: false,
            errorCode: 'facebook_login',
            message: `Facebook Profile Error - ${profileErrorMessage}`,
        };
    } else {
        const { id: fb_id, name, email } = response;

        // check if email access is there or not.
        if (!email) {
            return {
                result: false,
                errorCode: 'facebook_login_email',
                message: 'Provide Email access to the application while authorizing with facebook.',
            };
        }

        return {
            result: true,
            socialId: fb_id,
            name,
            email,
        };
    }
    return response;
}

export default getUserFacebookDetails;