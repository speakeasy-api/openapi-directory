import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Group operations
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete virtual background files
     *
     * @remarks
     * Delete existing virtual background file(s) from an account.
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `group:write:admin`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    delGroupVB(req: operations.DelGroupVBRequest, config?: AxiosRequestConfig): Promise<operations.DelGroupVBResponse>;
    /**
     * Get locked settings
     *
     * @remarks
     * Retrieve a [group's](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members will not be able to modify it individually. <p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    getGroupLockSettings(req: operations.GetGroupLockSettingsRequest, security: operations.GetGroupLockSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupLockSettingsResponse>;
    /**
     * Get a group's settings
     *
     * @remarks
     * Get settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    getGroupSettings(req: operations.GetGroupSettingsRequest, security: operations.GetGroupSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupSettingsResponse>;
    /**
     * Get a group
     *
     * @remarks
     * Get a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    group(req: operations.GroupRequest, security: operations.GroupSecurity, config?: AxiosRequestConfig): Promise<operations.GroupResponse>;
    /**
     * Create a group
     *
     * @remarks
     * Create a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
     *
     * You can add a maximum of 100 groups in one account per day. If you go over, you will get an error. You can add a maximum of 5000 groups in one account.
     *
     * **Prerequisite**: Pro or higher account.<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    groupCreate(req: operations.GroupCreateApplicationJSON, security: operations.GroupCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GroupCreateResponse>;
    /**
     * Delete a group
     *
     * @remarks
     * Delete a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    groupDelete(req: operations.GroupDeleteRequest, security: operations.GroupDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GroupDeleteResponse>;
    /**
     * Update locked settings
     *
     * @remarks
     * Update a [group's](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members will not be able to modify it individually. <p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    groupLockedSettings(req: operations.GroupLockedSettingsRequest, security: operations.GroupLockedSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GroupLockedSettingsResponse>;
    /**
     * List group members
     *
     * @remarks
     * List the members of a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    groupMembers(req: operations.GroupMembersRequest, security: operations.GroupMembersSecurity, config?: AxiosRequestConfig): Promise<operations.GroupMembersResponse>;
    /**
     * Add group members
     *
     * @remarks
     * Add members to a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    groupMembersCreate(req: operations.GroupMembersCreateRequest, config?: AxiosRequestConfig): Promise<operations.GroupMembersCreateResponse>;
    /**
     * Delete a group member
     *
     * @remarks
     * Delete a member from a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) in a Zoom account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    groupMembersDelete(req: operations.GroupMembersDeleteRequest, security: operations.GroupMembersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GroupMembersDeleteResponse>;
    /**
     * Update a group
     *
     * @remarks
     * Update a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
     *
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    groupUpdate(req: operations.GroupUpdateRequest, security: operations.GroupUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.GroupUpdateResponse>;
    /**
     * List groups
     *
     * @remarks
     * List [groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
     *
     * **Prerequisite**: Pro or higher account.<br>
     * **Scopes**: `group:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    groups(config?: AxiosRequestConfig): Promise<operations.GroupsResponse>;
    /**
     * Update a group member
     *
     * @remarks
     * If a user is a member in multiple groups, you can [set a primary group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-#h_d07c7dcd-4fd8-485a-b5fe-a322e8d21c09) for the user. The group member will use the primary group's settings by default. However, if settings are locked in other groups, those settings will continue to be locked for that user. By default, the primary group is the first group that user is added to.<br><br>
     * Use this API to perform either of the following tasks:
     * * Simultaneously remove a member from one group and move the member to a different group.
     * * Set a primary group for the user<br><br>
     * **Prerequisites:**
     * * Pro or higher account<br> **Scopes:** `group:write:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateAGroupMember(req: operations.UpdateAGroupMemberRequest, security: operations.UpdateAGroupMemberSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAGroupMemberResponse>;
    /**
     * Update a group's settings
     *
     * @remarks
     * Update settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).<p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
     * **Prerequisite**: Pro, Business, or Education account<br>
     * **Scopes**: `group:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateGroupSettings(req: operations.UpdateGroupSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSettingsResponse>;
    /**
     * Upload virtual background files
     *
     * @remarks
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
     */
    uploadGroupVB(req: operations.UploadGroupVBRequest, config?: AxiosRequestConfig): Promise<operations.UploadGroupVBResponse>;
}
