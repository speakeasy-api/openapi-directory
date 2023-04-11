import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GroupsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a group
     */
    createGroup(req: operations.CreateGroupRequestBody, security: operations.CreateGroupSecurity, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Delete a group
     */
    deleteGroup(req: operations.DeleteGroupRequest, security: operations.DeleteGroupSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * Get a specific group
     */
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * Get all groups
     */
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
}
