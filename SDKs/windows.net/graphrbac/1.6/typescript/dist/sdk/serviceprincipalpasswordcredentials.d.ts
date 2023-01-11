import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServicePrincipalPasswordCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicePrincipalsListPasswordCredentials - Gets the passwordCredentials associated with a service principal.
    **/
    servicePrincipalsListPasswordCredentials(req: operations.ServicePrincipalsListPasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListPasswordCredentialsResponse>;
    /**
     * servicePrincipalsUpdatePasswordCredentials - Updates the passwordCredentials associated with a service principal.
    **/
    servicePrincipalsUpdatePasswordCredentials(req: operations.ServicePrincipalsUpdatePasswordCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsUpdatePasswordCredentialsResponse>;
}
