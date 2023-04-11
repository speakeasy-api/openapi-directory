import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OAuth2PermissionGrantDelete {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a OAuth2 permission grant for the relevant resource Ids of an app.
     */
    oAuth2PermissionGrantDelete(req: operations.OAuth2PermissionGrantDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OAuth2PermissionGrantDeleteResponse>;
}
