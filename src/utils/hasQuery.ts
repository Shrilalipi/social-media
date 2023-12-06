/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 12:07.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import existsByDot from 'lodash/has';
import { HookContext } from '@feathersjs/feathers';

/**
 *
 * @returns {function(*): boolean}
 * @constructor
 * @param name
 */
const HasQuery = (name: string) => (context: HookContext) => {
    const { params } = context;

    if (!params) return false;

    const { query } = params;

    return existsByDot(query, name);
};

export default HasQuery;
