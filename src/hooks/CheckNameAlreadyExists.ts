/**
 CreatedBy Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 18:50
 */
import { BadRequest } from '@feathersjs/errors';
import { HookContext } from '@feathersjs/feathers';
/**
 * @description check if same name already exists.
 * @param key
 * @constructor
 */
const CheckNameAlreadyExists = (key: string) => async (context: HookContext) => {
    const { data, app, id, path } = context;
    // console.log(path);

    const { name } = data;

    if (name) {
        const query: { name: RegExp; status: any; _id: any } = {
            name: RegExp(`${name.trim()}`, 'i'),
            status: { $ne: -1 },
            _id: { $ne: null },
        };
        console.log(query);

        if (id) {
            query._id = {
                $ne: id,
            };
        }

        const entityExist = await app
            .service(path)
            .find({
                query,
                paginate: false,
            })
            .then((res: any) => res.length);

        if (entityExist) throw new BadRequest(`${key} with ${name} already exists.`);

        data.name = name.trim();
    }
};
export default CheckNameAlreadyExists;
