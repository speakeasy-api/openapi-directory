import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authentication APIs
 */
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an auth token
     *
     * @remarks
     * <html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>
     */
    create(req: shared.UserCredential, config?: AxiosRequestConfig): Promise<operations.CreateResponse>;
    /**
     * Delete an auth token.
     *
     * @remarks
     * Deletes the auth token provided in Authorization header.
     * Deleting an expired or invalid token will result in 401 Unauthorized error.
     */
    delete(config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
}
