/**
 * Created by Shrilalipi <shrilalipi@gmail.com> on 30/04/2023
 * @description set a required field
 */
import { checkContext } from 'feathers-hooks-common';
import { BadRequest } from '@feathersjs/errors';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getByDot from 'lodash/get';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import existsByDot from 'lodash/has';
import { HookContext } from '@feathersjs/feathers';

/**
 *
 * @param fieldNames
 * @param message
 * @constructor
 */
const FRequiredQuery =
    (fieldNames: Array<string> | string, message = '%name% is required') =>
    async (context: HookContext) => {
        // check this required is called from these hooks
        checkContext(context, 'before', ['find', 'get', 'patch'], 'Required');

        const { params } = context;
        if (!params) return context;

        const { query: _items } = params;

        const items = Array.isArray(_items) ? _items : [_items];

        if (!Array.isArray(fieldNames)) fieldNames = [fieldNames];

        const fields: Array<string> = fieldNames;

        items.forEach((item) =>
            fields.forEach((each) => {
                if (Array.isArray(each)) {
                    const [name, nickName] = each;

                    const newMessage = message.replace('%name%', nickName);

                    if (!existsByDot(item, name)) throw new BadRequest(newMessage);

                    const value = getByDot(item, name);

                    if (!value && value !== 0 && value !== false) throw new BadRequest(newMessage);
                } else {
                    const newMessage = message.replace('%name%', each);

                    if (!existsByDot(item, each)) throw new BadRequest(newMessage);

                    const value = getByDot(item, each);

                    if (!value && value !== 0 && value !== false) throw new BadRequest(newMessage);
                }
            }),
        );
    };

// usage
// FRequired('phone');
// FRequired('email', '%name% is required');
// FRequired(['email', 'phone'], '%name% is required');
// FRequired(['email', 'phone', 'address.pin', 'address.city'], '%name% is required');
// FRequired(['email', 'phone', ['firstName', 'First Name'], ['lastName', 'Last Name']], '%name% is required');

export default FRequiredQuery;
