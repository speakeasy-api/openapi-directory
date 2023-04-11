import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServicePrincipalOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an owner to a service principal.
     */
    servicePrincipalsAddOwner(req: operations.ServicePrincipalsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsAddOwnerResponse>;
    /**
     * Directory objects that are owners of this service principal.
     *
     * @remarks
     * The owners are a set of non-admin users who are allowed to modify this object.
     */
    servicePrincipalsListOwners(req: operations.ServicePrincipalsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListOwnersResponse>;
    /**
     * Remove a member from owners.
     */
    servicePrincipalsRemoveOwner(req: operations.ServicePrincipalsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsRemoveOwnerResponse>;
}
