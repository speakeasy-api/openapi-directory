import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * delGroupVb - Delete virtual background files
     *
     * Delete existing virtual background file(s) from an account.
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `group:write:admin`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    delGroupVb(req: operations.DelGroupVbRequest, config?: AxiosRequestConfig): Promise<operations.DelGroupVbResponse>;
    /**
     * getGroupLockSettings - Get locked settings
     *
     * Retrieve a [group's](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members will not be able to modify it individually. <p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    getGroupLockSettings(req: operations.GetGroupLockSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupLockSettingsResponse>;
    /**
     * getGroupSettings - Get a group's settings
     *
     * Get settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    getGroupSettings(req: operations.GetGroupSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupSettingsResponse>;
    /**
     * group - Get a group
     *
     * Get a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    group(req: operations.GroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupResponse>;
    /**
     * groupCreate - Create a group
     *
     * Create a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
     *
     * You can add a maximum of 100 groups in one account per day. If you go over, you will get an error. You can add a maximum of 5000 groups in one account.
     *
     * **Prerequisite**: Pro or higher account.<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    groupCreate(req: operations.GroupCreateRequest, config?: AxiosRequestConfig): Promise<operations.GroupCreateResponse>;
    /**
     * groupDelete - Delete a group
     *
     * Delete a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    groupDelete(req: operations.GroupDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupDeleteResponse>;
    /**
     * groupLockedSettings - Update locked settings
     *
     * Update a [group's](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members will not be able to modify it individually. <p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    groupLockedSettings(req: operations.GroupLockedSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GroupLockedSettingsResponse>;
    /**
     * groupMembers - List group members
     *
     * List the members of a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    groupMembers(req: operations.GroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GroupMembersResponse>;
    /**
     * groupMembersCreate - Add group members
     *
     * Add members to a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    groupMembersCreate(req: operations.GroupMembersCreateRequest, config?: AxiosRequestConfig): Promise<operations.GroupMembersCreateResponse>;
    /**
     * groupMembersDelete - Delete a group member
     *
     * Delete a member from a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) in a Zoom account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    groupMembersDelete(req: operations.GroupMembersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupMembersDeleteResponse>;
    /**
     * groupUpdate - Update a group
     *
     * Update a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    groupUpdate(req: operations.GroupUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GroupUpdateResponse>;
    /**
     * groups - List groups
     *
     * List [groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
     *
     * **Prerequisite**: Pro or higher account.<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    groups(req: operations.GroupsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsResponse>;
    /**
     * updateAGroupMember - Update a group member
     *
     * If a user is a member in multiple groups, you can [set a primary group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-#h_d07c7dcd-4fd8-485a-b5fe-a322e8d21c09) for the user. The group member will use the primary group's settings by default. However, if settings are locked in other groups, those settings will continue to be locked for that user. By default, the primary group is the first group that user is added to.<br><br>
     * Use this API to perform either of the following tasks:
     * * Simultaneously remove a member from one group and move the member to a different group.
     * * Set a primary group for the user<br><br>
     * **Prerequisites:**
     * * Pro or higher account<br> **Scopes:** `group:write:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    updateAGroupMember(req: operations.UpdateAGroupMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAGroupMemberResponse>;
    /**
     * updateGroupSettings - Update a group's settings
     *
     * Update settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).<p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    updateGroupSettings(req: operations.UpdateGroupSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSettingsResponse>;
    /**
     * uploadGroupVb - Upload virtual background files
     *
     * Use this API to [upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users in a group to use.
     *
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `group:write:admin`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     * `
    **/
    uploadGroupVb(req: operations.UploadGroupVbRequest, config?: AxiosRequestConfig): Promise<operations.UploadGroupVbResponse>;
}
