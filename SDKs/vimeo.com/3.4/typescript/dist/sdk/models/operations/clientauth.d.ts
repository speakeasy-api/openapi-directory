import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The grant type. Must be set to `client_credentials`.
 */
export declare enum ClientAuthRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}
export declare class ClientAuthRequestBody extends SpeakeasyBase {
    /**
     * The grant type. Must be set to `client_credentials`.
     */
    grantType: ClientAuthRequestBodyGrantTypeEnum;
    /**
     * A space-separated list of the authentication [scopes](https://developer.vimeo.com/api/authentication#supported-scopes) that you want to access. The default is `public`.
     */
    scope: string;
}
export declare class ClientAuthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authorization was successful.
     */
    auth?: shared.Auth;
    /**
     * Error code 8001: No such client secret exists.
     */
    error?: shared.ErrorT;
}
