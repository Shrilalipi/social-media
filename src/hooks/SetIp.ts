/**
 * Created by Shrilalipi (shrilalipi@gmail.com) on 05/12/2023 at 8:37 PM
 */
import { HookContext } from '@feathersjs/feathers';

/**
 * @description set ip from params.
 * @constructor
 */
const SetIp = () => async (context: HookContext) => {
    const { data, params } = context;
    const { ip } = params;

    data.ip = ip;
    return context;
};

export default SetIp;
