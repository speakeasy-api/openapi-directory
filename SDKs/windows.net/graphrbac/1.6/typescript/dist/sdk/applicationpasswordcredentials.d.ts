import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationPasswordCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * applicationsListPasswordCredentials - Get the passwordCredentials associated with an application.
    **/
    applicationsListPasswordCredentials(req: operations.ApplicationsListPasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListPasswordCredentialsResponse>;
    /**
     * applicationsUpdatePasswordCredentials - Update passwordCredentials associated with an application.
    **/
    applicationsUpdatePasswordCredentials(req: operations.ApplicationsUpdatePasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsUpdatePasswordCredentialsResponse>;
}
