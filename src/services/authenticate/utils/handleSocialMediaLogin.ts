/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05/12/2023 at 3:34 PM.
 */
import { HookContext } from '@feathersjs/feathers';
import { Authenticate_POST, AuthStrategies } from '../interfaces/AuthenticationInterface';
import { BadRequest, FeathersError } from '@feathersjs/errors';
import { SocialLoginInterface } from '../../../utils/SocialLoginUtilities/SocialLoginInterfaces';
import { SocialLoginUtilities } from '../../../utils/SocialLoginUtilities/SocialLoginUtilities';
import generateAccesstoken from '../../../utils/generateAccessToken';
import getUserFacebookDetails from '../../../utils/MetaUtilities/FacebookUtilities/getUserFacebookDetails';


/**
 * Handle different types of social media login.
 * @param context - Feathers Context object.
 */
const handleSocialMediaLogin = () => async (context: HookContext) => {
    const { app, data } = context;
    const { accessToken } = data;

    const userDetailsFromSocialMedia = await getUserFacebookDetails(app, accessToken);

    if (userDetailsFromSocialMedia) {
        const { result } = userDetailsFromSocialMedia;
        if (!result) {
            const { errorCode, message } = userDetailsFromSocialMedia;
            throw new BadRequest(errorCode && message ? message : 'Login error');
        } else {
            const { email, name } = userDetailsFromSocialMedia;
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
                    name,
                    email,
                };

                userData = await app.service('users')._create(newUserData).catch((e: FeathersError) => {
                    throw e;
                });
                // console.log(userData);
            }
            let res = await generateAccesstoken(userData, app);
            context.result = res;
        }
    }
    return context;
};

export default handleSocialMediaLogin;
