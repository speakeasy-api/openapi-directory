import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServicePrincipalOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicePrincipalsAddOwner - Add an owner to a service principal.
    **/
    servicePrincipalsAddOwner(req: operations.ServicePrincipalsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsAddOwnerResponse>;
    /**
     * servicePrincipalsListOwners - Directory objects that are owners of this service principal.
     *
     * The owners are a set of non-admin users who are allowed to modify this object.
    **/
    servicePrincipalsListOwners(req: operations.ServicePrincipalsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsListOwnersResponse>;
    /**
     * servicePrincipalsRemoveOwner - Remove a member from owners.
    **/
    servicePrincipalsRemoveOwner(req: operations.ServicePrincipalsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ServicePrincipalsRemoveOwnerResponse>;
}
