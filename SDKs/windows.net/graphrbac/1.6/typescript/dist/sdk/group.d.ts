import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Group {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * groupsAddMember - Add a member to a group.
    **/
    groupsAddMember(req: operations.GroupsAddMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupsAddMemberResponse>;
    /**
     * groupsCreate - Create a group in the directory.
    **/
    groupsCreate(req: operations.GroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GroupsCreateResponse>;
    /**
     * groupsDelete - Delete a group from the directory.
    **/
    groupsDelete(req: operations.GroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsDeleteResponse>;
    /**
     * groupsGet - Gets group information from the directory.
    **/
    groupsGet(req: operations.GroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetResponse>;
    /**
     * groupsGetGroupMembers - Gets the members of a group.
    **/
    groupsGetGroupMembers(req: operations.GroupsGetGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetGroupMembersResponse>;
    /**
     * groupsGetMemberGroups - Gets a collection of object IDs of groups of which the specified group is a member.
    **/
    groupsGetMemberGroups(req: operations.GroupsGetMemberGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetMemberGroupsResponse>;
    /**
     * groupsIsMemberOf - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
    **/
    groupsIsMemberOf(req: operations.GroupsIsMemberOfRequest, config?: AxiosRequestConfig): Promise<operations.GroupsIsMemberOfResponse>;
    /**
     * groupsList - Gets list of groups for the current tenant.
    **/
    groupsList(req: operations.GroupsListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsListResponse>;
    /**
     * groupsRemoveMember - Remove a member from a group.
    **/
    groupsRemoveMember(req: operations.GroupsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupsRemoveMemberResponse>;
}
