import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationKeyCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * applicationsListKeyCredentials - Get the keyCredentials associated with an application.
    **/
    applicationsListKeyCredentials(req: operations.ApplicationsListKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListKeyCredentialsResponse>;
    /**
     * applicationsUpdateKeyCredentials - Update the keyCredentials associated with an application.
    **/
    applicationsUpdateKeyCredentials(req: operations.ApplicationsUpdateKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsUpdateKeyCredentialsResponse>;
}
