import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SessionManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update Order Configuration
     *
     * @remarks
     * Updates the Order Configuration. You should use this route every time you edit a configuration value
     */
    postSessions(req: operations.PostSessionsRequest, config?: AxiosRequestConfig): Promise<operations.PostSessionsResponse>;
}
