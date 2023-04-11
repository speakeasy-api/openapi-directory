import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ApplicationPasswordCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the passwordCredentials associated with an application.
     */
    applicationsListPasswordCredentials(req: operations.ApplicationsListPasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListPasswordCredentialsResponse>;
    /**
     * Update passwordCredentials associated with an application.
     */
    applicationsUpdatePasswordCredentials(req: operations.ApplicationsUpdatePasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsUpdatePasswordCredentialsResponse>;
}
