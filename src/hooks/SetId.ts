/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 14:06.
 */
import { HookContext } from '@feathersjs/feathers';

/**
 * @description set the id from params.
 * @constructor
 */
const SetId = () => (context: HookContext) => {
    const { params } = context;
    if (!params.user) return context;

    context.id = params.user._id;

    return context;
};

export default SetId;
