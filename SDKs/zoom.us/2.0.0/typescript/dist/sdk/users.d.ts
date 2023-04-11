import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User operations
 */
export declare class Users {
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
     * Delete existing virtual background file(s) of a user.
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `user:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    delUserVB(req: operations.DelUserVBRequest, config?: AxiosRequestConfig): Promise<operations.DelUserVBResponse>;
    /**
     * Switch a user's account
     *
     * @remarks
     * Disassociate a user from one Account and move the user to another Account under the same master account.
     *
     * With this API, a user under a master account or a sub account can be moved to another sub account within the same master account. To move a user from a master account to a sub account, use `me` as the value for `accountId`. In this scenario, "me" refers to the Account ID of the master account.
     *
     * To move a user from one sub account to another sub account, provide the sub account's Account ID as the value for `accountId`.
     *
     * **Prerequisites**:
     * * The account should have Pro or a higher plan with master account option enabled.
     * * The user whose account needs to be switched should not be an admin or an owner of that account.
     * * The user should not have the same [managed domain](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-) as the account owner.
     *
     * **Scope:** `user:master`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    switchUserAccount(req: operations.SwitchUserAccountRequest, security: operations.SwitchUserAccountSecurity, config?: AxiosRequestConfig): Promise<operations.SwitchUserAccountResponse>;
    /**
     * Update a user's presence status
     *
     * @remarks
     * Users in the Zoom desktop client and mobile apps are assigned with a [presence status](https://support.zoom.us/hc/en-us/articles/360032554051-Status-Icons). The presence status informs users of their contact's availability. Users can also change their own presence status to be either "Away", "Do not disturb", or "Available".
     *
     * Use this API to update a user's presence status. A user's status can not be updated more than once per minute, i.e., you can only submit a maximum of 1 update request/minute for a single user.<br>Note that a user's presence status can not be updated using this API if the user is not logged in to the Zoom client.
     *
     * **Scopes:** `user:write`, `user:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     *
     */
    updatePresenceStatus(req: operations.UpdatePresenceStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePresenceStatusResponse>;
    /**
     * Upload virtual background files
     *
     * @remarks
     * Use this API to [upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background) for a user.
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `user:write:admin`
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     */
    uploadVBuser(req: operations.UploadVBuserRequest, config?: AxiosRequestConfig): Promise<operations.UploadVBuserResponse>;
    /**
     * Get a user
     *
     * @remarks
     * A Zoom account can have one or more users. Use this API to view information of a specific user on a Zoom account.<br><br>
     * **Scopes:** `user:read:admin` `user:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b>If a user's status is pending, only `id` and `created_at` fields will be returned. The value of `created_at` will be the time at which the API call was made until the user activates their account.</p>
     */
    user(req: operations.UserRequest, config?: AxiosRequestConfig): Promise<operations.UserResponse>;
    /**
     * Add assistants
     *
     * @remarks
     * Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br>Use this API to assign assistants to a user. <br> In the request body, provide either the User ID or the email address of the user.<br><br>
     * **Prerequisite**:
     * * The user as well as the assistant must have Licensed or an On-prem license.
     * * Assistants must be under the current user's account.<br>
     * **Scopes**: `user:write:admin` `user:write`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
     */
    userAssistantCreate(req: operations.UserAssistantCreateRequest, security: operations.UserAssistantCreateSecurity, config?: AxiosRequestConfig): Promise<operations.UserAssistantCreateResponse>;
    /**
     * Delete a user assistant
     *
     * @remarks
     * Delete a specific assistant of a user.
     * Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br><br>
     * **Prerequisites**:
     * * The user as well as the assistant must have Licensed or an On-prem license.
     * * Assistants must be under the current user's account.<br>
     * **Scopes**: `user:write:admin` `user:write`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userAssistantDelete(req: operations.UserAssistantDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserAssistantDeleteResponse>;
    /**
     * List user assistants
     *
     * @remarks
     * List a user's assistants.
     *
     * Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br><br>
     * **Prerequisites**: <br>
     * * Current user as well as the assistant must have Licensed or an On-prem license.
     * * Assistants must be under the current user's account.<br>
     * **Scopes**: `user:read:admin` `user:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    userAssistants(req: operations.UserAssistantsRequest, config?: AxiosRequestConfig): Promise<operations.UserAssistantsResponse>;
    /**
     * Delete user assistants
     *
     * @remarks
     * Delete all assistants of the current user.<br> Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br>
     * **Prerequisite**:
     * * The user as well as the assistant must have Licensed or an On-prem license.
     * * Assistants must be under the current user's account.<br>
     * **Scopes**: `user:write:admin` `user:write`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userAssistantsDelete(req: operations.UserAssistantsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserAssistantsDeleteResponse>;
    /**
     * Create users
     *
     * @remarks
     * A Zoom account can have one or more users. Use this API to add a new user to your account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher plan<br><br>
     * **Scopes:** `user:write:admin` `user:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userCreate(req: operations.UserCreateApplicationJSON, security: operations.UserCreateSecurity, config?: AxiosRequestConfig): Promise<operations.UserCreateResponse>;
    /**
     * Delete a user
     *
     * @remarks
     * Deleting a user permanently removes the user and their data from Zoom. Users can create a new Zoom account using the same email address. An account owner or an account admin can transfer meetings, webinars and cloud recordings to another Zoom user account before deleting.<br><br>
     *
     * This API disassociates (unlinks) a user from the associated Zoom account and provides the user their own basic free Zoom account, and the user can purchase their own licenses. You can transfer the user's data (meetings, webinars and cloud recordings) to another user before disassociation.<br> To permanently delete a user, specify "delete" as the value of the `action` query parameter.
     * **Scopes:** `user:write:admin` `user:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userDelete(req: operations.UserDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserDeleteResponse>;
    /**
     * Check a user email
     *
     * @remarks
     * Verify if a user's email is registered with Zoom.<br><br>
     *
     * <b>Note: </b>You can successfully check if a user is a registered Zoom user only if the user **signed up for Zoom via email and is within your account.** If you provide an email address of a user who is not in your account, the value of "existed_email" parameter will be "false" irrespective of whether or not the user is registered with Zoom. The response of this API call will not include users who joined Zoom using options such as "Sign in with SSO", "Sign in with Google" or "Sign in with Facebook" even if they are in the same account as yours.
     *
     * **Scopes:** `user:read:admin` `user:read`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    userEmail(req: operations.UserEmailRequest, security: operations.UserEmailSecurity, config?: AxiosRequestConfig): Promise<operations.UserEmailResponse>;
    /**
     * Update a user's email
     *
     * @remarks
     * Change a user's [email address](https://support.zoom.us/hc/en-us/articles/201362563-How-Do-I-Change-the-Email-on-My-Account-) on a Zoom account that has managed domain set up.<br>If the Zoom Account in which the user belongs, has multiple [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-), the email to be updated must match one of the managed domains.<br>
     * **Scopes:** `user:write:admin` `user:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * >  Note: A user's email address can only be changed for a maximum of 3 times in a day(24 hours).
     * **Prerequisite:**<br>
     * * Managed domain must be enabled in the account.
     * * The new email address should not already exist in Zoom.
     */
    userEmailUpdate(req: operations.UserEmailUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserEmailUpdateResponse>;
    /**
     * Update a user's password
     *
     * @remarks
     * Update the [password](https://support.zoom.us/hc/en-us/articles/206344385-Change-a-User-s-Password) of a user using which the user can login to Zoom.<br> After this request is processed successfully, an email notification will be sent to the user stating that the password was changed.<br>
     * **Scopes:** `user:write:admin` `user:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     * **Prerequisites:**<br>
     * * Owner or admin of the Zoom account.
     */
    userPassword(req: operations.UserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.UserPasswordResponse>;
    /**
     * Get user permissions
     *
     * @remarks
     * Users can be assigned a set of permissions that allows them to access only the pages/information that a user needs to view or edit.<br>
     *
     * Use this API to get permissions that have been granted to the user.<br><br>
     * **Scopes:** `user:read:admin` `user:read`<br>
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userPermission(req: operations.UserPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UserPermissionResponse>;
    /**
     * Upload a user's profile picture
     *
     * @remarks
     * Upload a user's profile picture.<br><br>
     *
     * Provide `multipart/form-data` as the value of the `content-type` header for this request. This API supports JPEG and PNG file formats.
     *
     * **Scopes:** `user:write:admin` `user:write`<br>
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    userPicture(req: operations.UserPictureRequest, config?: AxiosRequestConfig): Promise<operations.UserPictureResponse>;
    /**
     * Revoke a user's SSO token
     *
     * @remarks
     * Revoke a user's SSO token.<br><br> After calling this API, the SSO user will be logged out of their current Zoom session.<br>
     * **Scopes:** `user:write:admin` `user:write`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userSSOTokenDelete(req: operations.UserSSOTokenDeleteRequest, security: operations.UserSSOTokenDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UserSSOTokenDeleteResponse>;
    /**
     * Delete a scheduler
     *
     * @remarks
     * Delete a Scheduler.
     *
     * Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of this scheduler.
     *
     * **Prerequisite**: Current user must be under the same account as the scheduler.<br>
     * **Scopes**: `user:write:admin` `user:write`
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userSchedulerDelete(req: operations.UserSchedulerDeleteRequest, security: operations.UserSchedulerDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UserSchedulerDeleteResponse>;
    /**
     * List user schedulers
     *
     * @remarks
     * List all the schedulers of a user. Schedulers in this context are the users for whom the current user can schedule meetings for.
     *
     * For instance, if the current user (i.e., the user whose userId was passed in the path parameter of this API call) is user A, the response of this API will contain a list of user(s), for whom user A can schedule and manage meetings. User A is the assistant of these users and thus has scheduling privilege for these user(s).
     *
     * **Prerequisites**:
     * * Current user must be under the same account as the scheduler.<br>
     * **Scopes**: `user:read:admin` `user:read`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    userSchedulers(req: operations.UserSchedulersRequest, security: operations.UserSchedulersSecurity, config?: AxiosRequestConfig): Promise<operations.UserSchedulersResponse>;
    /**
     * Delete user schedulers
     *
     * @remarks
     * Delete all of a user's schedulers. Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of any user.
     *
     * **Prerequisite**: Current user (assistant) must be under the same account as the scheduler.<br>
     * **Scopes**: `user:write:admin` `user:write`
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userSchedulersDelete(req: operations.UserSchedulersDeleteRequest, security: operations.UserSchedulersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UserSchedulersDeleteResponse>;
    /**
     * Get user settings
     *
     * @remarks
     * Retrieve a user's settings.<br><br>
     * **Scopes:** `user:read:admin` `user:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    userSettings(req: operations.UserSettingsRequest, security: operations.UserSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.UserSettingsResponse>;
    /**
     * Update user settings
     *
     * @remarks
     * Update a user's settings.<br><br>
     * **Scopes:** `user:write:admin` `user:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    userSettingsUpdate(req: operations.UserSettingsUpdateRequest, security: operations.UserSettingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.UserSettingsUpdateResponse>;
    /**
     * Update user status
     *
     * @remarks
     * An account owner or admins can deactivate as well as activate a user in a Zoom account. Deactivating a user will remove all licenses associated with a user. It will prevent the deactivated user from logging into their Zoom account. A deactivated user can be reactivated. Reactivating a user grants the user access to login to their Zoom account.<br> Use this API to either [deactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_6a9bc1c3-d739-4945-b1f2-00b3b88fb5cc) an active user or to [reactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_16319724-d120-4be6-af5d-31582d134ea0) a deactivated user .<br><br>**Scopes:** `user:write:admin` `user:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    userStatus(req: operations.UserStatusRequest, security: operations.UserStatusSecurity, config?: AxiosRequestConfig): Promise<operations.UserStatusResponse>;
    /**
     * Get a user token
     *
     * @remarks
     * Retrieve a user's token.<br><br> This token is used for starting meetings with the Client SDK.<br>
     * **Scopes:** `user:read:admin` `user:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     * If a user signed into Zoom using Google or Facebook, a null value will be returned for the token. To get the token with this API, ask the user to sign into Zoom using their email and password instead.
     */
    userToken(req: operations.UserTokenRequest, security: operations.UserTokenSecurity, config?: AxiosRequestConfig): Promise<operations.UserTokenResponse>;
    /**
     * Update a user
     *
     * @remarks
     * Update information on a user's Zoom [profile](https://support.zoom.us/hc/en-us/articles/201363203-My-Profile).<br><br>
     * **Scopes:** `user:write:admin` `user:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userUpdate(req: operations.UserUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserUpdateResponse>;
    /**
     * Check a user's PM room
     *
     * @remarks
     * A personal meeting room is a virtual meeting room that can be permanently assigned to a user.
     * Use this API to check if a personal meeting room with the given name exists or not.<br><br>
     * **Scopes:** `user:read:admin` `user:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    userVanityName(req: operations.UserVanityNameRequest, config?: AxiosRequestConfig): Promise<operations.UserVanityNameResponse>;
    /**
     * Get user's ZAK
     *
     * @remarks
     * Get User’s Zoom Access Token (ZAK). You can use a ZAK to enable a non-login user to join a meeting on your app. Non-login users do not need to enter their username and password to join meetings.
     *
     * **Scope:** `user_zak:read`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    userZak(config?: AxiosRequestConfig): Promise<operations.UserZakResponse>;
    /**
     * List users
     *
     * @remarks
     * A Zoom account can have one or more users. Use this API to list users on your account.<br><br>
     * **Scopes:** `user:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    users(req: operations.UsersRequest, security: operations.UsersSecurity, config?: AxiosRequestConfig): Promise<operations.UsersResponse>;
}
