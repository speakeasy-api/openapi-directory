import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserTokenSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * User token types:<br>`token` - Used for starting meetings with the client SDK. This token expires in 14 days and a new token will be returned after the expiry.<br>`zak` - Used for generating the start meeting URL. The token expiration time is two hours. For API users, the expiration time is 90 days.
 */
export declare enum UserTokenTypeEnum {
    Token = "token",
    Zak = "zak"
}
export declare class UserTokenRequest extends SpeakeasyBase {
    /**
     * Use this field in conjunction with the `type` field where the value of `type` field is `zak`. The value of this field denotes the expiry time of the `zak` token in seconds. For example, if you would like the zak token to be expired after one hour of the token generation, the value of this field should be `3600`.
     */
    ttl?: number;
    /**
     * User token types:<br>`token` - Used for starting meetings with the client SDK. This token expires in 14 days and a new token will be returned after the expiry.<br>`zak` - Used for generating the start meeting URL. The token expiration time is two hours. For API users, the expiration time is 90 days.
     */
    type?: UserTokenTypeEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Token returned.
 */
export declare class UserToken200ApplicationXML extends SpeakeasyBase {
    /**
     * User token.
     */
    token?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Token returned.
 */
export declare class UserToken200ApplicationJSON extends SpeakeasyBase {
    /**
     * User token.
     */
    token?: string;
}
export declare class UserTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Token returned.
     */
    userToken200ApplicationJSONObject?: UserToken200ApplicationJSON;
}
