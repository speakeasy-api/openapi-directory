import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AuthenticationExtrasEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Authorize a client with OAuth
     *
     * @remarks
     * For information on utilizing OAuth client authorization, see our
     * [authentication](/api/authentication#generate-unauthenticated-tokens) documentation or the
     * [Client Credentials Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4) section of the
     * [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31.
     */
    clientAuth(req: operations.ClientAuthRequestBody, config?: AxiosRequestConfig): Promise<operations.ClientAuthResponse>;
    /**
     * Convert OAuth 1 access tokens to OAuth 2 access tokens
     */
    convertAccessToken(req: operations.ConvertAccessTokenRequestBody, config?: AxiosRequestConfig): Promise<operations.ConvertAccessTokenResponse>;
    /**
     * Revoke the current access token
     *
     * @remarks
     * This method enables an app to notify the API that it is done with a token and that the token can be discarded.
     */
    deleteToken(config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * Exchange an authorization code for an access token
     */
    exchangeAuthCode(req: operations.ExchangeAuthCodeRequestBody, config?: AxiosRequestConfig): Promise<operations.ExchangeAuthCodeResponse>;
    /**
     * Verify an OAuth 2 token
     */
    verifyToken(config?: AxiosRequestConfig): Promise<operations.VerifyTokenResponse>;
}
