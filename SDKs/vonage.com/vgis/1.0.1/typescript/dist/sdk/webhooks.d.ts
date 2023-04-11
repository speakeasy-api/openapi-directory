import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Webhooks are external URLs which subscribe to receive events via HTTP POST for a specified set of events.
 */
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new webhook subscription
     */
    createWebhook(req: shared.WebhookCreate, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * Remove a web hook
     */
    destroyWebhook(req: operations.DestroyWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DestroyWebhookResponse>;
    /**
     * List web hooks
     */
    listWebhooks(config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     * Renews a web hook
     */
    renewWebhook(req: operations.RenewWebhookRequest, config?: AxiosRequestConfig): Promise<operations.RenewWebhookResponse>;
    /**
     * Get web hook details
     */
    viewWebhook(req: operations.ViewWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ViewWebhookResponse>;
}
