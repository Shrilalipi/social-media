/**
 * Created By Shrilalipi(shrilalipi@smartters.in) on 3/23/2023 at 1:27 PM.
*/

import { FeathersError } from '@feathersjs/errors';
import { HookContext } from '@feathersjs/feathers';
import axios from 'axios';
/**
 * @description Get accessToken from code
*/
const getAccessTokenFromCode = async (context: HookContext) => {
    const { data } = context;
    const { code } = data;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.linkedin.com/oauth/v2/accessToken?client_id=771qi2wovjak7k&client_secret=gHNDlOXN16SIaN4I&grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth/linkedin`,
        headers: {
            'Authorization': 'Bearer AQRgFAZ_mCbrbFo84jAcuOJa6pHgy6ZWKkVQC17DARmjoa5PEv--c1HuzbQ9Pl2UADEPbDWHjbXwm0aUpnu4a-bUAwVuBZzIDUEIqrB5KBS0CqL0UnkHIBwtTwQcyates6fmRpIFjmWAAk0cL_gT6ITwdE1gqrxvvbSK93VzCnkvONY05HWlhAo0f-jArg',
            'Cookie': 'bcookie="v=2&84479be6-a5ad-4774-8620-4ee891aaa2ab"; bscookie="v=1&202212090932135afc5b80-9f2a-4f7e-80fa-f1b01864d406AQH046ZuobOBsWdo9CbFQpxyG86pIlO-"'
        }
    };

    const accessToken = await axios.request(config)
        .then((response) => {
            return response.data.access_token;
        })
        .catch((e: FeathersError) => {
            throw e;
        });

    context.data.accessToken = accessToken;
    return context;

};

export default getAccessTokenFromCode;