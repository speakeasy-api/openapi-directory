import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServicePrincipalsByAppId {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * applicationsGetServicePrincipalsIdByAppId - Gets an object id for a given application id from the current tenant.
    **/
    applicationsGetServicePrincipalsIdByAppId(req: operations.ApplicationsGetServicePrincipalsIdByAppIdRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsGetServicePrincipalsIdByAppIdResponse>;
}
