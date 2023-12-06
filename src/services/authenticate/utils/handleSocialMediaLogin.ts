/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05/12/2023 at 3:34 PM.
 */
import { HookContext } from '@feathersjs/feathers';
import { Authenticate_POST, AuthStrategies } from '../interfaces/AuthenticationInterface';
import { BadRequest, FeathersError } from '@feathersjs/errors';
import { SocialLoginInterface } from '../../../utils/SocialLoginUtilities/SocialLoginInterfaces';
import { SocialLoginUtilities } from '../../../utils/SocialLoginUtilities/SocialLoginUtilities';
import generateAccesstoken from '../../../utils/generateAccessToken';


/**
 * Handle different types of social media login.
 * @param context - Feathers Context object.
 */
const handleSocialMediaLogin = () => async (context: HookContext) => {
    const { app } = context;

    const { strategy, accessToken } = context.data as Authenticate_POST;

    // if (!role) throw new BadRequest('Invalid login operation.');

    let userDetailsFromSocialMedia: SocialLoginInterface | undefined = undefined;
    const errorMessageForSocialMedia = {
        result: false,
        message: 'Can not complete your operation. Please try after some time.',
    };

    switch (strategy) {

        case AuthStrategies.FACEBOOK:
            userDetailsFromSocialMedia = accessToken
                ? await SocialLoginUtilities.ValidateUserWithFacebook(accessToken)
                : errorMessageForSocialMedia;
            break;

        case AuthStrategies.INSTAGRAM:
            userDetailsFromSocialMedia = accessToken
                ? await SocialLoginUtilities.ValidateUserWithInstagram(accessToken)
                : errorMessageForSocialMedia;
            break;

    }

    if (userDetailsFromSocialMedia) {
        const { result } = userDetailsFromSocialMedia;
        if (!result) {
            const { errorCode, message } = userDetailsFromSocialMedia;
            throw new BadRequest(errorCode && message ? message : 'Login error');
        } else {
            const { socialId, email, firstName, middleName, lastName, avatar, userFacebookPages, facebookPosts } = userDetailsFromSocialMedia;
            if (!email) {
                throw new BadRequest('Login Error.');
            }
            let userData = await app.service('users')
                ._find({
                    query: {
                        email,
                        status: 1
                    },
                }).then((res: any) => res.total ? res.data[0] : null);

            if (!userData) {
                const newUserData = {
                    name: firstName && middleName && lastName ? `${firstName} ${middleName} ${lastName}` : firstName && lastName ? `${firstName} ${lastName}` : firstName,
                    email,
                };

                userData = await app.service('users')._create(newUserData).catch((e: FeathersError) => {
                    throw e;
                });
                // console.log(userData);
            }
            if (userFacebookPages) {
                await app.service('users')._patch(userData._id, {
                    userFacebookPages
                });
            }
            if (facebookPosts) {
                await app.service('users')._patch(userData._id, {
                    facebookPosts
                });
            }
            let res = await generateAccesstoken(userData, app);
            res.user.facebookPosts = facebookPosts? facebookPosts: [];
            res.user.userFacebookPages = userFacebookPages? userFacebookPages: [];
            context.result = res;
        }
    }
    return context;
};

export default handleSocialMediaLogin;
