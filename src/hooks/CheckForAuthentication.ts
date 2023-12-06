/**
 * Created by Shrilalipi (shrilalipi@gmail.com) on 05/12/2023 at 9:21 PM
 */
import { NotAuthenticated } from '@feathersjs/errors';
import { HookContext } from '@feathersjs/feathers';

/**
 * @description check if the accessToken is valid for the user or not.
 * @constructor
 */
const CheckForAuthentication = () => async (context: HookContext) => {
    const { params, app } = context;

    const { user, authentication } = params;

    if (!user || !authentication) return context;

    const accessToken = authentication.accessToken;
    const userId = user._id;

    const service = app.service('v1/user-session');

    const sessionExists = await service
        ._find({
            query: {
                accessToken,
                user: userId,
                status: 1,
                $limit: 1,
            },
        })
        .then((res: any) => res.total);

    if (!sessionExists) throw new NotAuthenticated('Invalid username or password.');

    return context;
};

export default CheckForAuthentication;
