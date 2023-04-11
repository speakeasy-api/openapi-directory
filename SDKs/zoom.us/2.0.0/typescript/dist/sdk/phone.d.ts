import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Phone {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unassign phone number
     *
     * @remarks
     * Unassign [phone number](https://support.zoom.us/hc/en-us/articles/360020808292-Managing-Phone-Numbers#h_38ba8b01-26e3-4b1b-a9b5-0717c00a7ca6) of a Zoom phone user. <br>
     *
     * After assigning a phone number, you can remove it if you don't want it to be assigned to anyone.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     * 3. User must have been previously assigned a Zoom Phone number.
     */
    unassignPhoneNumber(req: operations.UnassignPhoneNumberRequest, security: operations.UnassignPhoneNumberSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignPhoneNumberResponse>;
    /**
     * Get account's call logs
     *
     * @remarks
     * Retrieve [call logs](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-Call-Logs) for an account.
     *
     * **Scopes**: `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisite:**<br>
     * 1. Business or Enterprise account<br>
     * 2. A Zoom Phone license<br>
     * 3. Account Owner and a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) with Zoom Phone Management<br>
     */
    accountCallLogs(req: operations.AccountCallLogsRequest, security: operations.AccountCallLogsSecurity, config?: AxiosRequestConfig): Promise<operations.AccountCallLogsResponse>;
    /**
     * Add BYOC phone numbers
     *
     * @remarks
     * Use this API to add BYOC phone numbers(provided to you by your carrier) to Zoom.
     *
     * **Scope:** `phone:write:admin` or `phone:write` or `phone:master`
     *
     * **Prerequisites:**<br>
     * * The account must hold a business or enterprise plan and Zoom Phone license.
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     */
    addBYOCNumber(req: operations.AddBYOCNumberApplicationJSON, config?: AxiosRequestConfig): Promise<operations.AddBYOCNumberResponse>;
    /**
     * Add a setting template
     *
     * @remarks
     * This API lets you create a Zoom Phone setting template for an account. Template type includes **User**, **Auto Receptionist**, or **Call Queue**. Settings include profile, policy and user settings. After creating a phone template, the settings defined via this request will become the default settings for an account.
     * <br><br>
     * **Scope**:
     * * `phone:write:admin` `phone:write`
     *
     *
     * **Prerequisites**:
     * 1. Business or enterprise Zoom account
     * 2. A Zoom Phone license
     *
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     * <br>
     */
    addSettingTemplate(req: operations.AddSettingTemplateApplicationJSON, config?: AxiosRequestConfig): Promise<operations.AddSettingTemplateResponse>;
    /**
     * Set up shared access
     *
     * @remarks
     * Phone users can access [shared voicemail inboxes](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) in the Zoom desktop client, web portal, or provisioned desk phone. Use this API to define the voicemail access permissions of a user.
     *
     * To view these settings in the Zoom web portal, navigate to **Admin >Phone System Management> Users & Rooms**. Click the **Users** tab and select **User Settings**. Scroll down to **Voicemail & Call Recordings**.<br>
     *
     * **Scope**:`phone:write:admin`<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     * **Prerequisites**: <br>
     * Business or Enterprise Account
     */
    addUserSetting(req: operations.AddUserSettingRequest, security: operations.AddUserSettingSecurity, config?: AxiosRequestConfig): Promise<operations.AddUserSettingResponse>;
    /**
     * Assign calling plan to a user
     *
     * @remarks
     * Assign [calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) to a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051-Zoom-Phone) user.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     *
     *
     */
    assignCallingPlan(req: operations.AssignCallingPlanRequest, security: operations.AssignCallingPlanSecurity, config?: AxiosRequestConfig): Promise<operations.AssignCallingPlanResponse>;
    /**
     * Assign phone number to user
     *
     * @remarks
     * Assign a [phone number](https://support.zoom.us/hc/en-us/articles/360020808292-Managing-Phone-Numbers) to a user who has already enabled Zoom Phone.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    assignPhoneNumber(req: operations.AssignPhoneNumberRequest, security: operations.AssignPhoneNumberSecurity, config?: AxiosRequestConfig): Promise<operations.AssignPhoneNumberResponse>;
    /**
     * Change main company number
     *
     * @remarks
     * The [main company number](https://support.zoom.us/hc/en-us/articles/360028553691) can be used by external callers to reach your phone users (by dialing the main company number and the user's extension). It can also be used by phone users in your account as their caller ID while making calls.<br><br> Use this API to [change the main company number](https://support.zoom.us/hc/en-us/articles/360028553691#h_82414c34-9df2-428a-85a4-efcf7f9e0d72) of an account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    changeMainCompanyNumber(req: operations.ChangeMainCompanyNumberApplicationJSON, security: operations.ChangeMainCompanyNumberSecurity, config?: AxiosRequestConfig): Promise<operations.ChangeMainCompanyNumberResponse>;
    /**
     * Delete a user's call log
     *
     * @remarks
     * Delete a user's [call log](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-and-identifying-logs).
     *
     * **Scopes:** `phone:write`, `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     * **Prerequisites:**
     * 1. User must belong to a Business or an Enterprise account.
     * 2. User must hold a Zoom Phone license.
     */
    deleteCallLog(req: operations.DeleteCallLogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCallLogResponse>;
    /**
     * Remove shared access
     *
     * @remarks
     * Remove the shared voicemail access settings that were previously assigned to a user.
     *
     * To view these settings in your Zoom web portal, navigate to **Admin >Phone System Management> Users & Rooms**. Click the **Users** tab and select **User Settings**. Scroll down to **Voicemail & Call Recordings**.<br>
     *
     * **Scope**: `phone:write:admin`<br><br>
     * **Prerequisites**:<br>
     * * Business or enterprise Account<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    deleteUserSetting(req: operations.DeleteUserSettingRequest, security: operations.DeleteUserSettingSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteUserSettingResponse>;
    /**
     * Delete a voicemail
     *
     * @remarks
     * Delete a [voicemail message](https://support.zoom.us/hc/en-us/articles/360021400211-Managing-voicemail-messages) from a Zoom account.
     *
     * **Scope:** `phone:write:admin` or `phone:write`
     *
     *
     * **Prerequisite**:
     * * The account must have activted Zoom Phone license.
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     */
    deleteVoicemail(req: operations.DeleteVoicemailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVoicemailResponse>;
    /**
     * Get phone number details
     *
     * @remarks
     * A Zoom account owner or admin can purchase phone numbers and assign them to Zoom phone users. Use this API to get details on a specific Phone number in a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    getPhoneNumberDetails(req: operations.GetPhoneNumberDetailsRequest, security: operations.GetPhoneNumberDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPhoneNumberDetailsResponse>;
    /**
     * Get call recordings
     *
     * @remarks
     * List [call recordings](https://support.zoom.us/hc/en-us/articles/360038521091-Accessing-and-sharing-call-recordings) of an account.<br>
     *
     * **Scopes:**<br>
     * * `phone:read:admin` `phone:write:admin`
     *
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges.
     *
     *
     */
    getPhoneRecordings(req: operations.GetPhoneRecordingsRequest, security: operations.GetPhoneRecordingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPhoneRecordingsResponse>;
    /**
     * Get setting template details
     *
     * @remarks
     * This API lets you retrieve a specific account phone template previously created. <br>
     *
     * **Scope**: <br>
     * * `phone:write:admin` or `phone:write`
     *
     * **Prerequisites**: <br>
     * 1. Business or Enterprise Account
     * 2. A Zoom Phone license
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    getSettingTemplate(req: operations.GetSettingTemplateRequest, security: operations.GetSettingTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingTemplateResponse>;
    /**
     * List phone numbers
     *
     * @remarks
     * A Zoom account owner or admin can purchase phone numbers and assign them to Zoom phone users. Use this API to list all Zoom Phone numbers in a Zoom account. You can filter the response based on your needs by using query parameters.
     *
     * **Prerequisites:**<br>
     * * Pro or higher plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    listAccountPhoneNumbers(req: operations.ListAccountPhoneNumbersRequest, security: operations.ListAccountPhoneNumbersSecurity, config?: AxiosRequestConfig): Promise<operations.ListAccountPhoneNumbersResponse>;
    /**
     * List BYOC SIP trunks
     *
     * @remarks
     * List [BYOC SIP trunks](https://zoom.us/docs/doc/Zoom-Bring%20Your%20Own%20Carrier.pdf) that are assigned to an account.
     *
     * **Scopes**:<br>
     * * `phone:write:admin` or `phone:master`<br>
     *
     * **Prerequisites**:<br>
     * * Business or Enterprise Account
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    listBYOCSIPTrunk(req: operations.ListBYOCSIPTrunkRequest, security: operations.ListBYOCSIPTrunkSecurity, config?: AxiosRequestConfig): Promise<operations.ListBYOCSIPTrunkResponse>;
    /**
     * List calling plans
     *
     * @remarks
     * List all Zoom Phone [calling plans](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) that are enabled for a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom phone license. <br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    listCallingPlans(config?: AxiosRequestConfig): Promise<operations.ListCallingPlansResponse>;
    /**
     * List phone users
     *
     * @remarks
     * List all the users on an account who have been assigned Zoom Phone licenses.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    listPhoneUsers(req: operations.ListPhoneUsersRequest, security: operations.ListPhoneUsersSecurity, config?: AxiosRequestConfig): Promise<operations.ListPhoneUsersResponse>;
    /**
     * List setting templates
     *
     * @remarks
     * This API lets you retrieve a list of all the phone template settings previously created.
     * <br>
     * **Scope**:<br>
     * * `phone:read:admin` or `phone:read`
     * <br>**Prerequisites**: <br>
     * 1. Business or enterprise Account
     * 2. A Zoom Phone license
     *
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    listSettingTemplates(req: operations.ListSettingTemplatesRequest, security: operations.ListSettingTemplatesSecurity, config?: AxiosRequestConfig): Promise<operations.ListSettingTemplatesResponse>;
    /**
     * Get user's profile
     *
     * @remarks
     * Retrieve a user's [zoom phone](https://support.zoom.us/hc/en-us/articles/360001297663-Quickstart-Guide-for-Zoom-Phone-Administrators) profile.
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     * **Prerequisites** :
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    phoneUser(req: operations.PhoneUserRequest, security: operations.PhoneUserSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneUserResponse>;
    /**
     * Get user's call logs
     *
     * @remarks
     * Retrieve a [zoom phone](https://support.zoom.us/hc/en-us/articles/360001297663-Quickstart-Guide-for-Zoom-Phone-Administrators) user's call logs.
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    phoneUserCallLogs(req: operations.PhoneUserCallLogsRequest, security: operations.PhoneUserCallLogsSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneUserCallLogsResponse>;
    /**
     * Get user's recordings
     *
     * @remarks
     * Retrieve a user's zoom [phone recordings](https://support.zoom.us/hc/en-us/articles/360021336671-Viewing-Call-History-and-Recordings).
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    phoneUserRecordings(req: operations.PhoneUserRecordingsRequest, security: operations.PhoneUserRecordingsSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneUserRecordingsResponse>;
    /**
     * Get user's settings
     *
     * @remarks
     * Retrieve a user's zoom phone profile [settings](https://support.zoom.us/hc/en-us/articles/360021325712-Configuring-Settings).
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    phoneUserSettings(req: operations.PhoneUserSettingsRequest, security: operations.PhoneUserSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneUserSettingsResponse>;
    /**
     * Get user's voicemails
     *
     * @remarks
     * Retrieve a user's Zoom Phone voicemails.
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    phoneUserVoiceMails(req: operations.PhoneUserVoiceMailsRequest, security: operations.PhoneUserVoiceMailsSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneUserVoiceMailsResponse>;
    /**
     * Assign SIP trunks
     *
     * @remarks
     * Using this API, a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) owner can assign SIP trunk(s) to a sub account.<br>
     *
     * **Scope**:<br>
     * * `phone:master` <br>
     *
     * **Prerequisites**:<br>
     * * Business or enterprise Account.<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    postPhoneSIPTrunk(req: operations.PostPhoneSIPTrunkRequest, security: operations.PostPhoneSIPTrunkSecurity, config?: AxiosRequestConfig): Promise<operations.PostPhoneSIPTrunkResponse>;
    /**
     * Set up a Zoom Phone account
     *
     * @remarks
     * After assigning a Zoom phone license to an account, an admin or account owner can proceed with the [initial Zoom phone set up](https://support.zoom.us/hc/en-us/articles/360001297663-Getting-started-with-Zoom-Phone-admin-#h_5ae26a3a-290c-4a8d-b3b0-6384ed267b13) using this API.
     *
     * **Scope**:<br>
     * * `phone:write:admin` `phone:write`
     *
     * **Prerequisites**: <br>
     * * Pro or a higher paid account with master account option enabled.
     *
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    setUpAccount(req: operations.SetUpAccountRequest, security: operations.SetUpAccountSecurity, config?: AxiosRequestConfig): Promise<operations.SetUpAccountResponse>;
    /**
     * Unassign user's calling plan
     *
     * @remarks
     * Unassign a [calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) that was previously assigned to a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051) user.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    unassignCallingPlan(req: operations.UnassignCallingPlanRequest, security: operations.UnassignCallingPlanSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignCallingPlanResponse>;
    /**
     * Update phone number details
     *
     * @remarks
     * Update phone number details.
     *
     * **Scopes:**
     * * `phone:write` `phone:write:admin`
     * * `phone:master`
     *
     * **Prerequisite:**
     * * Paid account
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    updatePhoneNumberDetails(req: operations.UpdatePhoneNumberDetailsRequest, security: operations.UpdatePhoneNumberDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberDetailsResponse>;
    /**
     * Update SIP trunk details
     *
     * @remarks
     * Update details of a SIP trunk that is assigned to a sub account.<br>
     *
     * **Scope**:<br>
     * * `phone:master` <br>
     *
     * **Prerequisites**:<br>
     * Business or Enterprise Account.<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    updatePhoneSIPTrunk(req: operations.UpdatePhoneSIPTrunkRequest, security: operations.UpdatePhoneSIPTrunkSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneSIPTrunkResponse>;
    /**
     * Update BYOC settings
     *
     * @remarks
     * Only [master account owners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) can use this API to enable BYOC(Bring your own carrier) option for a sub account.<br>
     *
     * **Scope**:<br>
     * * `phone:master` <br>
     *
     * **Prerequisites**: <br>
     * * Business or enterprise Account.<br>
     */
    updatePhoneSettings(req: operations.UpdatePhoneSettingsRequest, security: operations.UpdatePhoneSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneSettingsResponse>;
    /**
     * Update a setting template
     *
     * @remarks
     * Use this API to update or modify profile settings for the phone template. Template type includes **User**, **Auto Receptionist**, or **Call Queue**. After you've modified a template, click **User Settings** to set up settings for Call Handling, Desk Phone, and Others. <br>
     *
     * **Scope**:<br>
     * * `phone:write:admin` or `phone:write`
     *
     * **Prerequisites**: <br>
     * 1. Business or Enterprise Account
     * 2. A Zoom Phone license
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    updateSettingTemplate(req: operations.UpdateSettingTemplateRequest, security: operations.UpdateSettingTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSettingTemplateResponse>;
    /**
     * Update user's profile
     *
     * @remarks
     * Update a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051-Zoom-Phone) user's profile.
     *
     * **Scopes:** `phone:write` `phone:write:admin`  <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     */
    updateUserProfile(req: operations.UpdateUserProfileRequest, security: operations.UpdateUserProfileSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateUserProfileResponse>;
    /**
     * Update shared access
     *
     * @remarks
     * Phone users can access [shared voicemail inboxes](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) in the Zoom desktop client, web portal, or provisioned desk phone. Use this API to update the voicemail access permissions of a user.
     *
     * To view these settings in the Zoom web portal, navigate to **Admin >Phone System Management> Users & Rooms**. Click the **Users** tab and select **User Settings**. Scroll down to **Voicemail & Call Recordings**.<br>
     *
     * **Scope**: <br>`phone:write:admin`<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     * **Prerequisites**:<br>
     * Business or Enterprise Account
     */
    updateUserSetting(req: operations.UpdateUserSettingRequest, security: operations.UpdateUserSettingSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateUserSettingResponse>;
}
