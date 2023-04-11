import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServicePrincipalAppRoleAssignedTo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Principals (users, groups, and service principals) that are assigned to this service principal.
     */
    servicePrincipalsListAppRoleAssignedTo(req: operations.ServicePrincipalsListAppRoleAssignedToRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListAppRoleAssignedToResponse>;
}
