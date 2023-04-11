import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServicePrincipalAppRoleAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Applications that the service principal is assigned to.
     */
    servicePrincipalsListAppRoleAssignments(req: operations.ServicePrincipalsListAppRoleAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListAppRoleAssignmentsResponse>;
}
