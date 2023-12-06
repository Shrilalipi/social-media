/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 15:35.
 */
import { HookContext } from '@feathersjs/feathers';

/**
 * @description set createdBy field in object.
 * @param key
 * @constructor
 */
const SetCreatedBy =
    (key = 'user') =>
    (context: HookContext) => {
        const { user } = context.params;
        // console.log(user);
        

        if (!user) return context;

        if (Array.isArray(context.data)) {
            context.data.map((each) => {
                each[key] = user._id;
            });
        } else {
            context.data[key] = user._id;
        }
        return context;
    };

export default SetCreatedBy;
