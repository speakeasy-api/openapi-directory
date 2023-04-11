import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The grant type. Must be set to `vimeo_oauth1`.
 */
export declare enum ConvertAccessTokenRequestBodyGrantTypeEnum {
    VimeoOauth1 = "vimeo_oauth1"
}
export declare class ConvertAccessTokenRequestBody extends SpeakeasyBase {
    /**
     * The grant type. Must be set to `vimeo_oauth1`.
     */
    grantType: ConvertAccessTokenRequestBodyGrantTypeEnum;
    /**
     * The OAuth 1 token.
     */
    token: string;
    /**
     * The OAuth 1 token secret.
     */
    tokenSecret: string;
}
export declare class ConvertAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The tokens were converted.
     */
    auth?: shared.Auth;
    /**
     * * The token is invalid.
     *
     * @remarks
     * * The token has unauthorized scopes.
     */
    authError?: shared.AuthError;
}
