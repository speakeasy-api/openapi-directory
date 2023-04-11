import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PhoneCallQueues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add members to a call queue
     *
     * @remarks
     * Add phone users and/or [common area phones](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) as members to a specific Call Queue.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    addMembersToCallQueue(req: operations.AddMembersToCallQueueRequest, security: operations.AddMembersToCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.AddMembersToCallQueueResponse>;
    /**
     * Assign numbers to a call queue
     *
     * @remarks
     * After [buying phone number(s)](https://support.zoom.us/hc/en-us/articles/360020808292#h_007ec8c2-0914-4265-8351-96ab23efa3ad), you can assign it, allowing callers to directly dial a number to reach a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    assignPhoneToCallQueue(req: operations.AssignPhoneToCallQueueRequest, security: operations.AssignPhoneToCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.AssignPhoneToCallQueueResponse>;
    /**
     * Change call queue manager
     *
     * @remarks
     * A call queue manager has the privileges to maanage the call queue's voicemail inbox and recordings, change all call queue settings and call queue policy settings.<br><br> Use this API to to set another phone user as the [call queue manager](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues#h_db06854b-e6a3-4afe-ba15-baf58f31f90c).
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    changeCallQueueManager(req: operations.ChangeCallQueueManagerRequest, security: operations.ChangeCallQueueManagerSecurity, config?: AxiosRequestConfig): Promise<operations.ChangeCallQueueManagerResponse>;
    /**
     * Create a call queue
     *
     * @remarks
     * Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to [create a call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues#h_e81faeeb-9184-429a-aaea-df49ff5ff413).<br> You can add phone users or common area phones to call queues.
     *
     * **Prerequisites:**<br>
     * * Pro, Business, or Education account
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    createCallQueue(req: operations.CreateCallQueueApplicationJSON, security: operations.CreateCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCallQueueResponse>;
    /**
     * Delete a call queue
     *
     * @remarks
     * Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to delete a Call Queue.<br>
     * **Prerequisites:**<br>
     * * Pro, Business, or Education account
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    deleteACallQueue(req: operations.DeleteACallQueueRequest, security: operations.DeleteACallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteACallQueueResponse>;
    /**
     * Get call queue details
     *
     * @remarks
     * Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to get information on a specific Call Queue.<br><br>
     * **Prerequisites:**<br>
     * * Pro, Business, or Education account
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:read:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    getACallQueue(req: operations.GetACallQueueRequest, security: operations.GetACallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.GetACallQueueResponse>;
    /**
     * Get call queue recordings
     *
     * @remarks
     * Use this API to view [call recordings](https://support.zoom.us/hc/en-us/articles/360038521091#h_cbc9f2a3-e06c-4daa-83d4-ddbceef9c77b) from the call queue.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.
     * * [Automatic call recordings](https://support.zoom.us/hc/en-us/articles/360033511872#h_fcb297bb-14e8-4094-91ca-dc61e1a18734) must be enabled in the Policy Settings for call queues. <br> **Scope:** `phone:read:admin`<br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
     *
     *
     *
     */
    getCallQueueRecordings(req: operations.GetCallQueueRecordingsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallQueueRecordingsResponse>;
    /**
     * List call queues
     *
     * @remarks
     * Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to list Call queues.<br><br>
     * **Prerequisites:**<br>
     * * Pro, Business, or Education account
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:read:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
     */
    listCallQueues(req: operations.ListCallQueuesRequest, security: operations.ListCallQueuesSecurity, config?: AxiosRequestConfig): Promise<operations.ListCallQueuesResponse>;
    /**
     * Unassign a phone number
     *
     * @remarks
     * After assigning a phone number, you can unbind it if you don't want it to be assigned to a [Call Queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues). Use this API to unbind a phone number from a Call Queue. After successful unbinding, the number will appear in the [Unassigned tab](https://zoom.us/signin#/numbers/unassigned).<br><br>
     * **Prerequisites:**
     * * Pro or higher account palan
     * * Account owner or admin permissions
     * * Zoom Phone license <br> **Scopes:** `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    unAssignPhoneNumCallQueue(req: operations.UnAssignPhoneNumCallQueueRequest, security: operations.UnAssignPhoneNumCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.UnAssignPhoneNumCallQueueResponse>;
    /**
     * Unassign all phone numbers
     *
     * @remarks
     * Use this API to unbind all phone numbers that are assigned to a [Call Queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues) After successful unbinding, the numbers will appear in the [Unassigned tab](https://zoom.us/signin#/numbers/unassigned).<br> If you only need to unassign a specific phone number, use the Unassign a Phone Number API instead. <br>
     * **Prerequisites:**
     * * Pro or higher account palan
     * * Account owner or admin permissions
     * * Zoom Phone license <br> **Scopes:** `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    unassignAPhoneNumCallQueue(req: operations.UnassignAPhoneNumCallQueueRequest, security: operations.UnassignAPhoneNumCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignAPhoneNumCallQueueResponse>;
    /**
     * Unassign all members
     *
     * @remarks
     * Use this API to remove all members from a Call Queue who were previously assigned to that Call Queue. The members could be phone users or [common area phones](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    unassignAllMembers(req: operations.UnassignAllMembersRequest, security: operations.UnassignAllMembersSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignAllMembersResponse>;
    /**
     * Unassign a member
     *
     * @remarks
     * Use this API to remove a member from a Call Queue who was previously added to that Call Queue. The member could be a phone user or a [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones). A member who is a Call Queue Manager cannot be unassigned from the Call Queue using this API.
     * **Prerequisites:**<br>
     * * Pro or higher account plan.
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    unassignMemberFromCallQueue(req: operations.UnassignMemberFromCallQueueRequest, security: operations.UnassignMemberFromCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignMemberFromCallQueueResponse>;
    /**
     * Update call queue details
     *
     * @remarks
     * Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to update information of a specific Call Queue.<br>
     * **Prerequisites:**<br>
     * * Pro, Business, or Education account
     * * Account owner or admin permissions
     * * Zoom Phone license<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    updateCallQueue(req: operations.UpdateCallQueueRequest, security: operations.UpdateCallQueueSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCallQueueResponse>;
}
