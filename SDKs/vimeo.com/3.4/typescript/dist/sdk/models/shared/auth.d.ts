import { SpeakeasyBase } from "../../../internal/utils";
import { ApiApp } from "./apiapp";
import { User } from "./user";
/**
 * The token type:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `bearer` - The token is of the `bearer` type.
 *
 */
export declare enum AuthTokenTypeEnum {
    Bearer = "bearer"
}
/**
 * The authorization code was exchanged.
 */
export declare class Auth extends SpeakeasyBase {
    /**
     * The access token string.
     */
    accessToken: string;
    /**
     * The API application associated with the token.
     */
    app: ApiApp;
    /**
     * The date and time that the token expires.
     */
    expiresOn?: string;
    /**
     * The refresh token string.
     */
    refreshToken?: string;
    /**
     * The scope or scopes that the token supports.
     */
    scope: string;
    /**
     * The token type:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `bearer` - The token is of the `bearer` type.
     *
     */
    tokenType: AuthTokenTypeEnum;
    /**
     * The user associated with the token.
     */
    user?: User;
}
