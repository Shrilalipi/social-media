/**
 * Created by Shrilalipi (shrilalipi@gmail.com) on 05/12/2023 at 6:45 PM.
 * @description set current time for the given field
 */
import { HookContext } from '@feathersjs/feathers';

const SetCurrentTime = (key: string) => async (context: HookContext) => {
    const { data } = context;

    if (Array.isArray(data)) {
        context.data.map((each: any) => {
            each[key] = new Date();
        });
    } else {
        context.data[key] = new Date();
    }
};

export default SetCurrentTime;
