import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The grant type. Must be set to `authorization_code`.
 */
export declare enum ExchangeAuthCodeRequestBodyGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}
export declare class ExchangeAuthCodeRequestBody extends SpeakeasyBase {
    /**
     * The authorization code received from the authorization server.
     */
    code: string;
    /**
     * The grant type. Must be set to `authorization_code`.
     */
    grantType: ExchangeAuthCodeRequestBodyGrantTypeEnum;
    /**
     * The redirect URI. Must match the URI from `/oauth/authorize`.
     */
    redirectUri: string;
}
export declare class ExchangeAuthCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authorization code was exchanged.
     */
    auth?: shared.Auth;
    /**
     * * The grant type is invalid.
     *
     * @remarks
     * * The authorization code is invalid.
     * * The redirect URI doesn't match the URI to create the authorization code.
     */
    authError?: shared.AuthError;
}
