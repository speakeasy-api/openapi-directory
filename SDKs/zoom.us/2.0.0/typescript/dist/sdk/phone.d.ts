import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Phone {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * unassignPhoneNumber - Unassign phone number
     *
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
    **/
    unassignPhoneNumber(req: operations.UnassignPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.UnassignPhoneNumberResponse>;
    /**
     * accountCallLogs - Get account's call logs
     *
     * Retrieve [call logs](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-Call-Logs) for an account.
     *
     * **Scopes**: `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisite:**<br>
     * 1. Business or Enterprise account<br>
     * 2. A Zoom Phone license<br>
     * 3. Account Owner and a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) with Zoom Phone Management<br>
    **/
    accountCallLogs(req: operations.AccountCallLogsRequest, config?: AxiosRequestConfig): Promise<operations.AccountCallLogsResponse>;
    /**
     * addByocNumber - Add BYOC phone numbers
     *
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
    **/
    addByocNumber(req: operations.AddByocNumberRequest, config?: AxiosRequestConfig): Promise<operations.AddByocNumberResponse>;
    /**
     * addSettingTemplate - Add a setting template
     *
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
    **/
    addSettingTemplate(req: operations.AddSettingTemplateRequest, config?: AxiosRequestConfig): Promise<operations.AddSettingTemplateResponse>;
    /**
     * addUserSetting - Set up shared access
     *
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
    **/
    addUserSetting(req: operations.AddUserSettingRequest, config?: AxiosRequestConfig): Promise<operations.AddUserSettingResponse>;
    /**
     * assignCallingPlan - Assign calling plan to a user
     *
     * Assign [calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) to a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051-Zoom-Phone) user.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
     *
     *
    **/
    assignCallingPlan(req: operations.AssignCallingPlanRequest, config?: AxiosRequestConfig): Promise<operations.AssignCallingPlanResponse>;
    /**
     * assignPhoneNumber - Assign phone number to user
     *
     * Assign a [phone number](https://support.zoom.us/hc/en-us/articles/360020808292-Managing-Phone-Numbers) to a user who has already enabled Zoom Phone.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    assignPhoneNumber(req: operations.AssignPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.AssignPhoneNumberResponse>;
    /**
     * changeMainCompanyNumber - Change main company number
     *
     * The [main company number](https://support.zoom.us/hc/en-us/articles/360028553691) can be used by external callers to reach your phone users (by dialing the main company number and the user's extension). It can also be used by phone users in your account as their caller ID while making calls.<br><br> Use this API to [change the main company number](https://support.zoom.us/hc/en-us/articles/360028553691#h_82414c34-9df2-428a-85a4-efcf7f9e0d72) of an account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    changeMainCompanyNumber(req: operations.ChangeMainCompanyNumberRequest, config?: AxiosRequestConfig): Promise<operations.ChangeMainCompanyNumberResponse>;
    /**
     * deleteCallLog - Delete a user's call log
     *
     * Delete a user's [call log](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-and-identifying-logs).
     *
     * **Scopes:** `phone:write`, `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     * **Prerequisites:**
     * 1. User must belong to a Business or an Enterprise account.
     * 2. User must hold a Zoom Phone license.
    **/
    deleteCallLog(req: operations.DeleteCallLogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCallLogResponse>;
    /**
     * deleteUserSetting - Remove shared access
     *
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
    **/
    deleteUserSetting(req: operations.DeleteUserSettingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserSettingResponse>;
    /**
     * deleteVoicemail - Delete a voicemail
     *
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
    **/
    deleteVoicemail(req: operations.DeleteVoicemailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVoicemailResponse>;
    /**
     * getPhoneNumberDetails - Get phone number details
     *
     * A Zoom account owner or admin can purchase phone numbers and assign them to Zoom phone users. Use this API to get details on a specific Phone number in a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    getPhoneNumberDetails(req: operations.GetPhoneNumberDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhoneNumberDetailsResponse>;
    /**
     * getPhoneRecordings - Get call recordings
     *
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
    **/
    getPhoneRecordings(req: operations.GetPhoneRecordingsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhoneRecordingsResponse>;
    /**
     * getSettingTemplate - Get setting template details
     *
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
    **/
    getSettingTemplate(req: operations.GetSettingTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingTemplateResponse>;
    /**
     * listAccountPhoneNumbers - List phone numbers
     *
     * A Zoom account owner or admin can purchase phone numbers and assign them to Zoom phone users. Use this API to list all Zoom Phone numbers in a Zoom account. You can filter the response based on your needs by using query parameters.
     *
     * **Prerequisites:**<br>
     * * Pro or higher plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listAccountPhoneNumbers(req: operations.ListAccountPhoneNumbersRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountPhoneNumbersResponse>;
    /**
     * listByocsipTrunk - List BYOC SIP trunks
     *
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
    **/
    listByocsipTrunk(req: operations.ListByocsipTrunkRequest, config?: AxiosRequestConfig): Promise<operations.ListByocsipTrunkResponse>;
    /**
     * listCallingPlans - List calling plans
     *
     * List all Zoom Phone [calling plans](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) that are enabled for a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom phone license. <br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listCallingPlans(req: operations.ListCallingPlansRequest, config?: AxiosRequestConfig): Promise<operations.ListCallingPlansResponse>;
    /**
     * listPhoneUsers - List phone users
     *
     * List all the users on an account who have been assigned Zoom Phone licenses.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    listPhoneUsers(req: operations.ListPhoneUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneUsersResponse>;
    /**
     * listSettingTemplates - List setting templates
     *
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
    **/
    listSettingTemplates(req: operations.ListSettingTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListSettingTemplatesResponse>;
    /**
     * phoneUser - Get user's profile
     *
     * Retrieve a user's [zoom phone](https://support.zoom.us/hc/en-us/articles/360001297663-Quickstart-Guide-for-Zoom-Phone-Administrators) profile.
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     * **Prerequisites** :
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    phoneUser(req: operations.PhoneUserRequest, config?: AxiosRequestConfig): Promise<operations.PhoneUserResponse>;
    /**
     * phoneUserCallLogs - Get user's call logs
     *
     * Retrieve a [zoom phone](https://support.zoom.us/hc/en-us/articles/360001297663-Quickstart-Guide-for-Zoom-Phone-Administrators) user's call logs.
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    phoneUserCallLogs(req: operations.PhoneUserCallLogsRequest, config?: AxiosRequestConfig): Promise<operations.PhoneUserCallLogsResponse>;
    /**
     * phoneUserRecordings - Get user's recordings
     *
     * Retrieve a user's zoom [phone recordings](https://support.zoom.us/hc/en-us/articles/360021336671-Viewing-Call-History-and-Recordings).
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    phoneUserRecordings(req: operations.PhoneUserRecordingsRequest, config?: AxiosRequestConfig): Promise<operations.PhoneUserRecordingsResponse>;
    /**
     * phoneUserSettings - Get user's settings
     *
     * Retrieve a user's zoom phone profile [settings](https://support.zoom.us/hc/en-us/articles/360021325712-Configuring-Settings).
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    phoneUserSettings(req: operations.PhoneUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PhoneUserSettingsResponse>;
    /**
     * phoneUserVoiceMails - Get user's voicemails
     *
     * Retrieve a user's Zoom Phone voicemails.
     *
     * **Scopes:** `phone:read`, `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    phoneUserVoiceMails(req: operations.PhoneUserVoiceMailsRequest, config?: AxiosRequestConfig): Promise<operations.PhoneUserVoiceMailsResponse>;
    /**
     * postPhoneSipTrunk - Assign SIP trunks
     *
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
    **/
    postPhoneSipTrunk(req: operations.PostPhoneSipTrunkRequest, config?: AxiosRequestConfig): Promise<operations.PostPhoneSipTrunkResponse>;
    /**
     * setUpAccount - Set up a Zoom Phone account
     *
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
    **/
    setUpAccount(req: operations.SetUpAccountRequest, config?: AxiosRequestConfig): Promise<operations.SetUpAccountResponse>;
    /**
     * unassignCallingPlan - Unassign user's calling plan
     *
     * Unassign a [calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) that was previously assigned to a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051) user.
     *
     * **Scopes**: `phone:write` `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    unassignCallingPlan(req: operations.UnassignCallingPlanRequest, config?: AxiosRequestConfig): Promise<operations.UnassignCallingPlanResponse>;
    /**
     * updatePhoneNumberDetails - Update phone number details
     *
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
    **/
    updatePhoneNumberDetails(req: operations.UpdatePhoneNumberDetailsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberDetailsResponse>;
    /**
     * updatePhoneSipTrunk - Update SIP trunk details
     *
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
    **/
    updatePhoneSipTrunk(req: operations.UpdatePhoneSipTrunkRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneSipTrunkResponse>;
    /**
     * updatePhoneSettings - Update BYOC settings
     *
     * Only [master account owners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) can use this API to enable BYOC(Bring your own carrier) option for a sub account.<br>
     *
     * **Scope**:<br>
     * * `phone:master` <br>
     *
     * **Prerequisites**: <br>
     * * Business or enterprise Account.<br>
    **/
    updatePhoneSettings(req: operations.UpdatePhoneSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneSettingsResponse>;
    /**
     * updateSettingTemplate - Update a setting template
     *
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
    **/
    updateSettingTemplate(req: operations.UpdateSettingTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingTemplateResponse>;
    /**
     * updateUserProfile - Update user's profile
     *
     * Update a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051-Zoom-Phone) user's profile.
     *
     * **Scopes:** `phone:write` `phone:write:admin`  <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisite:**
     * 1. Business or Enterprise account
     * 2. A Zoom Phone license
    **/
    updateUserProfile(req: operations.UpdateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserProfileResponse>;
    /**
     * updateUserSetting - Update shared access
     *
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
    **/
    updateUserSetting(req: operations.UpdateUserSettingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserSettingResponse>;
}
