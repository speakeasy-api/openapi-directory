import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OAuth2PermissionGrantList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * oAuth2PermissionGrantList - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
    **/
    oAuth2PermissionGrantList(req: operations.OAuth2PermissionGrantListRequest, config?: AxiosRequestConfig): Promise<operations.OAuth2PermissionGrantListResponse>;
}
