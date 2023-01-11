import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupsOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * groupsAddOwner - Add an owner to a group.
    **/
    groupsAddOwner(req: operations.GroupsAddOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GroupsAddOwnerResponse>;
    /**
     * groupsRemoveOwner - Remove a member from owners.
    **/
    groupsRemoveOwner(req: operations.GroupsRemoveOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GroupsRemoveOwnerResponse>;
}
