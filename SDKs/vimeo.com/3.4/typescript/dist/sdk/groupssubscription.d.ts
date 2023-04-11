import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GroupsSubscription {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a user to a group
     */
    joinGroup(req: operations.JoinGroupRequest, security: operations.JoinGroupSecurity, config?: AxiosRequestConfig): Promise<operations.JoinGroupResponse>;
    /**
     * Add a user to a group
     */
    joinGroupAlt1(req: operations.JoinGroupAlt1Request, security: operations.JoinGroupAlt1Security, config?: AxiosRequestConfig): Promise<operations.JoinGroupAlt1Response>;
    /**
     * Remove a user from a group
     */
    leaveGroup(req: operations.LeaveGroupRequest, security: operations.LeaveGroupSecurity, config?: AxiosRequestConfig): Promise<operations.LeaveGroupResponse>;
    /**
     * Remove a user from a group
     */
    leaveGroupAlt1(req: operations.LeaveGroupAlt1Request, security: operations.LeaveGroupAlt1Security, config?: AxiosRequestConfig): Promise<operations.LeaveGroupAlt1Response>;
}
