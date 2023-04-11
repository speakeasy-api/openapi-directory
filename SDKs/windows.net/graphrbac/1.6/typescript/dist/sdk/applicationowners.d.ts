import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ApplicationOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an owner to an application.
     */
    applicationsAddOwner(req: operations.ApplicationsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsAddOwnerResponse>;
    /**
     * Directory objects that are owners of the application.
     *
     * @remarks
     * The owners are a set of non-admin users who are allowed to modify this object.
     */
    applicationsListOwners(req: operations.ApplicationsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListOwnersResponse>;
    /**
     * Remove a member from owners.
     */
    applicationsRemoveOwner(req: operations.ApplicationsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsRemoveOwnerResponse>;
}
