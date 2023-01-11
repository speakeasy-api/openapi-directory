import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServicePrincipalKeyCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicePrincipalsListKeyCredentials - Get the keyCredentials associated with the specified service principal.
    **/
    servicePrincipalsListKeyCredentials(req: operations.ServicePrincipalsListKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListKeyCredentialsResponse>;
    /**
     * servicePrincipalsUpdateKeyCredentials - Update the keyCredentials associated with a service principal.
    **/
    servicePrincipalsUpdateKeyCredentials(req: operations.ServicePrincipalsUpdateKeyCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsUpdateKeyCredentialsResponse>;
}
