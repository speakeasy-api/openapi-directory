import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Group {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a member to a group.
     */
    groupsAddMember(req: operations.GroupsAddMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupsAddMemberResponse>;
    /**
     * Create a group in the directory.
     */
    groupsCreate(req: operations.GroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GroupsCreateResponse>;
    /**
     * Delete a group from the directory.
     */
    groupsDelete(req: operations.GroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsDeleteResponse>;
    /**
     * Gets group information from the directory.
     */
    groupsGet(req: operations.GroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetResponse>;
    /**
     * Gets the members of a group.
     */
    groupsGetGroupMembers(req: operations.GroupsGetGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetGroupMembersResponse>;
    /**
     * Gets a collection of object IDs of groups of which the specified group is a member.
     */
    groupsGetMemberGroups(req: operations.GroupsGetMemberGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetMemberGroupsResponse>;
    /**
     * Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
     */
    groupsIsMemberOf(req: operations.GroupsIsMemberOfRequest, config?: AxiosRequestConfig): Promise<operations.GroupsIsMemberOfResponse>;
    /**
     * Gets list of groups for the current tenant.
     */
    groupsList(req: operations.GroupsListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsListResponse>;
    /**
     * Remove a member from a group.
     */
    groupsRemoveMember(req: operations.GroupsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupsRemoveMemberResponse>;
}
