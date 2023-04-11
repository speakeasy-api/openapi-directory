import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Notifications are the actions taken to inform users or call third-party endpoints when a certain event happens. Typical actions include emails and callouts. Callouts typically refer to HTTP invocations, such as HTTP calls to REST services.
 *
 * @remarks
 *
 * **NOTE:** Notifications are processed asynchronously and may be delivered with a delay and out of order.
 *
 * Notifications are associated with Communication Profiles, which allow you to send specific event-driven notifications to targeted customers. Zuora provides the following Settings API to access the settings of Communication Profiles:
 *   * [Get all Communication Profiles](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Communication_Profiles)
 *   * [Create a new Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Communication_Profile)
 *   * [Modify a Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Modify_a_Communication_Profile)
 *   * [Get all Notifications under a particular Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Notifications_under_a_particular_Communication_Profile)
 *
 */
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an email template
     *
     * @remarks
     * Deletes an email template.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
     */
    deleteDELETEEmailTemplate(req: operations.DELETEDELETEEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DELETEDELETEEmailTemplateResponse>;
    /**
     * Delete a notification definition
     *
     * @remarks
     * Deletes a notification definition.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
     */
    deleteDELETENotificationDefinition(req: operations.DELETEDELETENotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DELETEDELETENotificationDefinitionResponse>;
    /**
     * Delete notification histories for an account
     *
     * @remarks
     * Delete all notification histories for the given account. All email and callout notifications for this account will be deleted upon successful operation.
     *
     * **Note**: This operation is only available if you have the Notification and the Configurable Event features enabled.
     *
     */
    deleteDELETENotificationHistoryForAccount(req: operations.DELETEDELETENotificationHistoryForAccountRequest, config?: AxiosRequestConfig): Promise<operations.DELETEDELETENotificationHistoryForAccountResponse>;
    /**
     * List callout notification histories
     *
     * @remarks
     * Describes how to get a notification history for callouts.
     *
     */
    getCalloutHistory(req: operations.GETCalloutHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GETCalloutHistoryResponse>;
    /**
     * List email notification histories
     *
     * @remarks
     * Describes how to get a notification history for notification emails.
     *
     *
     * ## Notes
     * Request parameters and their values may be appended with a "?" following the HTTPS GET request.  Additional request parameter are separated by "&".
     *
     * For example:
     *
     * `GET https://rest.zuora.com/v1/notification-history/email?startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000&pageSize=1`
     *
     */
    getEmailHistory(req: operations.GETEmailHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GETEmailHistoryResponse>;
    /**
     * Retrieve an email template
     *
     * @remarks
     * Queries the email template of the specified ID.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
     */
    getGETEmailTemplate(req: operations.GETGETEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GETGETEmailTemplateResponse>;
    /**
     * Retrieve a notification definition
     *
     * @remarks
     * Queries the notification definition of the given ID.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
     */
    getGETNotificationDefinition(req: operations.GETGETNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GETGETNotificationDefinitionResponse>;
    /**
     * Retrieve a notification history deletion task
     *
     * @remarks
     * Get the notification history deletion task by ID.
     *
     * **Note**: This operation is only available if you have the Notification and the Configurable Event features enabled.
     *
     */
    getGETNotificationHistoryDeletionTask(req: operations.GETGETNotificationHistoryDeletionTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETGETNotificationHistoryDeletionTaskResponse>;
    /**
     * List email templates
     *
     * @remarks
     * Queries email templates.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
     */
    getQueryEmailTemplates(req: operations.GETQueryEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GETQueryEmailTemplatesResponse>;
    /**
     * List notification definitions
     *
     * @remarks
     * Queries notification definitions with the specified filters.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
     */
    getQueryNotificationDefinitions(req: operations.GETQueryNotificationDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GETQueryNotificationDefinitionsResponse>;
    /**
     * Create an email template
     *
     * @remarks
     * Creates an email template.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
     */
    postCreateEmailTemplate(req: operations.POSTCreateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEmailTemplateResponse>;
    /**
     * Create a notification definition
     *
     * @remarks
     * Creates a notification definition. If a filter rule is specified, it will be evaluated to
     * see if the notification definition is qualified to handle the incoming events
     * during runtime. If the notification is qualified, it will send the email and
     * invoke the callout if it has an email template or a callout. See a step-by-step guide for
     * [creating a custom notification](https://www.zuora.com/developer/api-guides/#Callout-to-external-system-for-provisioning-or-entitlements)
     * in [Zuora API Guides](https://www.zuora.com/developer/api-guides/).
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
     */
    postCreateNotificationDefinition(req: operations.POSTCreateNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNotificationDefinitionResponse>;
    /**
     * Update an email template
     *
     * @remarks
     * Updates an email template.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
     */
    putUpdateEmailTemplate(req: operations.PUTUpdateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateEmailTemplateResponse>;
    /**
     * Update a notification definition
     *
     * @remarks
     * Updates a notification definition.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
     */
    putUpdateNotificationDefinition(req: operations.PUTUpdateNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateNotificationDefinitionResponse>;
}
