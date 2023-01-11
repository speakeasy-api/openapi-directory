import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PhoneSharedLineGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addMembersToSharedLineGroup - Add members to a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to [add members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_7cb42370-48f6-4a8f-84f4-c6eee4d9f0ca) to a Shared Line Group. Note that a member can only be added to one shared line group.
     *
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    addMembersToSharedLineGroup(req: operations.AddMembersToSharedLineGroupRequest, config?: AxiosRequestConfig): Promise<operations.AddMembersToSharedLineGroupResponse>;
    /**
     * assignPhoneNumbersSlg - Assign phone numbers
     *
     * Use this API to assign phone numbers to a shared line groups. These direct phone numbers will be shared among members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups).
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    assignPhoneNumbersSlg(req: operations.AssignPhoneNumbersSlgRequest, config?: AxiosRequestConfig): Promise<operations.AssignPhoneNumbersSlgResponse>;
    /**
     * createASharedLineGroup - Create a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to create a shared line group.
     *
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    createASharedLineGroup(req: operations.CreateASharedLineGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateASharedLineGroupResponse>;
    /**
     * deleteAMemberSlg - Unassign a member from a shared line group
     *
     * Members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) have access to the group's phone number and voicemail. Use this API to unassign **a specific member** from a Shared Line Group.
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteAMemberSlg(req: operations.DeleteAMemberSlgRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAMemberSlgResponse>;
    /**
     * deleteAPhoneNumberSlg - Unassign a phone number
     *
     * Use this API to unassign a specific phone number that was assigned to the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups).
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteAPhoneNumberSlg(req: operations.DeleteAPhoneNumberSlgRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAPhoneNumberSlgResponse>;
    /**
     * deleteASharedLineGroup - Delete a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. Use this API to delete a Shared Line Group.
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteASharedLineGroup(req: operations.DeleteASharedLineGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteASharedLineGroupResponse>;
    /**
     * deleteMembersOfSlg - Unassign members of a shared line group
     *
     * Members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) have access to the group's phone number and voicemail. Use this API to unassign **all** the existing members from a Shared Line Group.
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteMembersOfSlg(req: operations.DeleteMembersOfSlgRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMembersOfSlgResponse>;
    /**
     * getASharedLineGroup - Get a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to list all the Shared Line Groups.
     *
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:read:admin` or `phone:write:admin`
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    getASharedLineGroup(req: operations.GetASharedLineGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetASharedLineGroupResponse>;
    /**
     * listSharedLineGroups - List shared line groups
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to list all the Shared Line Groups.
     *
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges  <br>
     *
     * **Scopes:** `phone:read:admin`, `phone:write:admin`
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listSharedLineGroups(req: operations.ListSharedLineGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListSharedLineGroupsResponse>;
    /**
     * updateASharedLineGroup - Update a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to update information of a Shared Line Group.
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges
     *
     * **Scopes:** `phone:write:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    updateASharedLineGroup(req: operations.UpdateASharedLineGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateASharedLineGroupResponse>;
}
