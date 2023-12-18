/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 13:42.
 * @description instead of deleting an item from database, it only changes it's status
 */
import { HookContext, Query } from '@feathersjs/feathers';

/**
 * @description default delete object with status -1.
 * @param deleteKey
 * @param deleteValue
 * @constructor
 */
const PatchDeleted =
    (deleteKey = 'status', deleteValue = -1) =>
        async (context: HookContext) => {
            const { service, id, params } = context;

            // const { user = {} } = params;

            // const setUpdatedBy = true,
            //     key = 'updatedBy';

            const data = {
                [deleteKey]: deleteValue,
            };

            // if (setUpdatedBy) data[key] = user.id;

            let query: Query | undefined = params.query;

            query = {
                ...query,
                status: { $ne: -1 },
            };

            context.result = await service._patch(id, data, {
                ...params,
                query,
                provider: undefined,
            });

            return context;
        };

export default PatchDeleted;
