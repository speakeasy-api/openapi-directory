import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OAuth2PermissionGrantCreate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * oAuth2PermissionGrantCreate - Grants OAuth2 permissions for the relevant resource Ids of an app.
    **/
    oAuth2PermissionGrantCreate(req: operations.OAuth2PermissionGrantCreateRequest, config?: AxiosRequestConfig): Promise<operations.OAuth2PermissionGrantCreateResponse>;
}
