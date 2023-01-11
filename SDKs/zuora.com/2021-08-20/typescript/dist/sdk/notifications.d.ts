import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDeleteEmailTemplate - Delete an email template
     *
     * Deletes an email template.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
    **/
    deleteDeleteEmailTemplate(req: operations.DeleteDeleteEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeleteEmailTemplateResponse>;
    /**
     * deleteDeleteNotificationDefinition - Delete a notification definition
     *
     * Deletes a notification definition.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
    **/
    deleteDeleteNotificationDefinition(req: operations.DeleteDeleteNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeleteNotificationDefinitionResponse>;
    /**
     * deleteDeleteNotificationHistoryForAccount - Delete notification histories for an account
     *
     * Delete all notification histories for the given account. All email and callout notifications for this account will be deleted upon successful operation.
     *
     * **Note**: This operation is only available if you have the Notification and the Configurable Event features enabled.
     *
    **/
    deleteDeleteNotificationHistoryForAccount(req: operations.DeleteDeleteNotificationHistoryForAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeleteNotificationHistoryForAccountResponse>;
    /**
     * getCalloutHistory - List callout notification histories
     *
     * Describes how to get a notification history for callouts.
     *
    **/
    getCalloutHistory(req: operations.GetCalloutHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCalloutHistoryResponse>;
    /**
     * getEmailHistory - List email notification histories
     *
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
    **/
    getEmailHistory(req: operations.GetEmailHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailHistoryResponse>;
    /**
     * getGetEmailTemplate - Retrieve an email template
     *
     * Queries the email template of the specified ID.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
    **/
    getGetEmailTemplate(req: operations.GetGetEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetGetEmailTemplateResponse>;
    /**
     * getGetNotificationDefinition - Retrieve a notification definition
     *
     * Queries the notification definition of the given ID.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
    **/
    getGetNotificationDefinition(req: operations.GetGetNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetGetNotificationDefinitionResponse>;
    /**
     * getGetNotificationHistoryDeletionTask - Retrieve a notification history deletion task
     *
     * Get the notification history deletion task by ID.
     *
     * **Note**: This operation is only available if you have the Notification and the Configurable Event features enabled.
     *
    **/
    getGetNotificationHistoryDeletionTask(req: operations.GetGetNotificationHistoryDeletionTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetGetNotificationHistoryDeletionTaskResponse>;
    /**
     * getQueryEmailTemplates - List email templates
     *
     * Queries email templates.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
    **/
    getQueryEmailTemplates(req: operations.GetQueryEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryEmailTemplatesResponse>;
    /**
     * getQueryNotificationDefinitions - List notification definitions
     *
     * Queries notification definitions with the specified filters.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
    **/
    getQueryNotificationDefinitions(req: operations.GetQueryNotificationDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryNotificationDefinitionsResponse>;
    /**
     * postCreateEmailTemplate - Create an email template
     *
     * Creates an email template.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
    **/
    postCreateEmailTemplate(req: operations.PostCreateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEmailTemplateResponse>;
    /**
     * postCreateNotificationDefinition - Create a notification definition
     *
     * Creates a notification definition. If a filter rule is specified, it will be evaluated to
     * see if the notification definition is qualified to handle the incoming events
     * during runtime. If the notification is qualified, it will send the email and
     * invoke the callout if it has an email template or a callout. See a step-by-step guide for
     * [creating a custom notification](https://www.zuora.com/developer/api-guides/#Callout-to-external-system-for-provisioning-or-entitlements)
     * in [Zuora API Guides](https://www.zuora.com/developer/api-guides/).
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
    **/
    postCreateNotificationDefinition(req: operations.PostCreateNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateNotificationDefinitionResponse>;
    /**
     * putUpdateEmailTemplate - Update an email template
     *
     * Updates an email template.
     *
     * **Note**: This operation is only applicable to email templates for custom events.
     *
    **/
    putUpdateEmailTemplate(req: operations.PutUpdateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutUpdateEmailTemplateResponse>;
    /**
     * putUpdateNotificationDefinition - Update a notification definition
     *
     * Updates a notification definition.
     *
     * **Note**: This operation is only applicable to notifications for custom events.
     *
    **/
    putUpdateNotificationDefinition(req: operations.PutUpdateNotificationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutUpdateNotificationDefinitionResponse>;
}
