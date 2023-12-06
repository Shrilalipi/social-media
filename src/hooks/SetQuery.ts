/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 13:35.
 */
import { HookContext } from '@feathersjs/feathers';

/**
 * @description set default value in query for respected field.
 * @param fieldName
 * @param defaultValue
 * @constructor
 */
const SetQuery = (fieldName: string, defaultValue: any) => (context: HookContext) => {
    const { params } = context;
    const { query = {} } = params;

    query[fieldName] = defaultValue;

    return context;
};

export default SetQuery;
