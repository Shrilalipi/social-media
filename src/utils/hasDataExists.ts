/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 12:07.
 *
 * @returns {function(*): boolean}
 * @constructor
 * @param names
 */
import { HookContext } from '@feathersjs/feathers';

const hasDataExists =
    (...names: string[]) =>
        (context: HookContext) => {
            const { data } = context;

            let keyFound = false;

            for (let i = 0; i < names.length; i++) {
                if (typeof data[names[i]] !== 'undefined') {
                    keyFound = true;
                    break;
                }
            }

            return keyFound;
        };

export default hasDataExists;
