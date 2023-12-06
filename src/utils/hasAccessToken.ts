/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 12:07.
 */

import { HookContext } from '@feathersjs/feathers';

/**
 *
 * @return {function(*): boolean}
 * @constructor
 */
const hasAccessToken = () => (context: HookContext) => {
    const { params } = context;

    const { authentication } = params;

    return authentication !== undefined;
};

export default hasAccessToken;
