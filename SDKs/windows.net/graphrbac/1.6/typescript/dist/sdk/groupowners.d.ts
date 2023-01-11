import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * groupsListOwners - Directory objects that are owners of the group.
     *
     * The owners are a set of non-admin users who are allowed to modify this object.
    **/
    groupsListOwners(req: operations.GroupsListOwnersRequest, config?: AxiosRequestConfig): Promise<operations.GroupsListOwnersResponse>;
}
