import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServicePrincipal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a service principal in the directory.
     */
    servicePrincipalsCreate(req: operations.ServicePrincipalsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsCreateResponse>;
    /**
     * Deletes a service principal from the directory.
     */
    servicePrincipalsDelete(req: operations.ServicePrincipalsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsDeleteResponse>;
    /**
     * Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
     */
    servicePrincipalsGet(req: operations.ServicePrincipalsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsGetResponse>;
    /**
     * Gets a list of service principals from the current tenant.
     */
    servicePrincipalsList(req: operations.ServicePrincipalsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListResponse>;
    /**
     * Updates a service principal in the directory.
     */
    servicePrincipalsUpdate(req: operations.ServicePrincipalsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsUpdateResponse>;
}
