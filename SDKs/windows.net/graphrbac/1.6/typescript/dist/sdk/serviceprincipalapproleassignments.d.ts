import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServicePrincipalAppRoleAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicePrincipalsListAppRoleAssignments - Applications that the service principal is assigned to.
    **/
    servicePrincipalsListAppRoleAssignments(req: operations.ServicePrincipalsListAppRoleAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListAppRoleAssignmentsResponse>;
}
