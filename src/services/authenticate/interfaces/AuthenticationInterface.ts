/**
 * Created By Soumya(soumya\@smartters.in) on 10/17/2022 at 1:22 PM.
 */

// import { long } from 'aws-sdk/clients/cloudfront';
import { ObjectId } from 'mongoose';

export enum AuthStrategies {
    LOCAL = 'local',
    JWT = 'jwt',
    REFRESH = 'refresh',
    PHONE_OTP = 'phoneOtp',
    EMAIL_OTP = 'emailOtp',
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
    APPLE = 'apple',
    LINKEDIN = 'linkedin',
    TWITTER = 'twitter',
    INSTAGRAM = 'instagram',
    YOUTUBE = 'youtube',
}

export enum Actions {
    LOGIN = 'login',
    SIGNUP = 'signup',
    VERIFICATION = 'verification',
    FORGOT_PASSWORD = 'forgotPassword',
    LOGOUT = 'logout',
}

export interface Authenticate_POST {
    strategy: AuthStrategies;
    action?: Actions;
    phone?: string;
    email?: string;
    password?: string;
    accessToken?: string;
    accessTokenSecret?: string;
}

export interface Authenticate_PATCH {
    strategy: AuthStrategies;
    action: Actions;
    otp: string;
    phone?: string;
    email?: string;
}

export interface UpdateUser {
    phone?: string;
    email?: string;
}

// export interface DecodedAccessToken {
//     sub: ObjectId;
//     iat: long;
//     exp: long;
//     aud: string;
//     iss: string;
//     jti: string;
// }