import { ConnectInterface, SocialLoginInterface } from './SocialLoginInterfaces';
import validateUserWithFacebook from './utils/validateUserWithFacebook';
import validateUserForInstagramConnect from './utils/validateUserForInstagramConnect';

/**
 * This class implements all the utilities functions for
 * authorizing the access token received from the client side
 * with the OAuth server of different Oauth Platforms.
 *
 * The functions return the user related information associated with the
 * Oauth Platform.
 *
 * Use the information according to your requirements.
 */
export class SocialLoginUtilities {
    // Facebook Configuration.
    private static facebook_oauth_url = 'https://graph.facebook.com/v7.0';

    // Instagram Configuration.
    private static instagram_oauth_url = 'https://graph.instagram.com/me';



    /**
     * Validate the access token with Facebook server and get the user details
     * from Facebook.
     *
     * @param accessToken - Access token authorized with facebook.
     *
     * @returns
     * Success - Returns the user related information from facebook.
     * Failure - Returns an error message.
     */
    static async ValidateUserWithFacebook(accessToken: string): Promise<SocialLoginInterface> {
        const profileUrl = SocialLoginUtilities.facebook_oauth_url;

        return await validateUserWithFacebook(accessToken, profileUrl);
    }


    /**
     * Validate the access token with instagram server and get the user details
     * from Instagram.
     *
     * @param accessToken - Access token authorized with instagram.
     *
     * @returns
     * Success - Returns the user related information from instagram.
     * Failure - Returns an error message.
     */
    static async ValidateUserWithInstagram(accessToken: string): Promise<ConnectInterface> {
        const profileUrl = SocialLoginUtilities.instagram_oauth_url;

        return await validateUserForInstagramConnect(accessToken, profileUrl);
    }

}
