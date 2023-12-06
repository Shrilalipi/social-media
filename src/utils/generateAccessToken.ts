/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 03/12/2023 at 04:20 PM.
 */

import { AuthenticationService } from "@feathersjs/authentication";
import { ServiceAddons } from "@feathersjs/feathers";

const generateAccesstoken = async (userData: any, app: any) => {
    const service: AuthenticationService & ServiceAddons<any> = app.service('authentication');
    const payload: any = {
        sub: userData._id,
    };

    const accessToken = await service.createAccessToken(payload);

    return {
        accessToken,
        user: userData
    };
}

export default generateAccesstoken;