import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Configs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSubscriptionNotificationEvent - Subscribe For Notification Event
     *
     * The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes:</b><li>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<li>The content type has to be passed as application/json for the body parameter.</li>
    **/
    createSubscriptionNotificationEvent(req: operations.CreateSubscriptionNotificationEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionNotificationEventResponse>;
    /**
     * deleteSubscribedNotificationEvent - Delete Notification Subscription
     *
     * The delete events service is used to unsubscribe from an events service.<br>
    **/
    deleteSubscribedNotificationEvent(req: operations.DeleteSubscribedNotificationEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscribedNotificationEventResponse>;
    /**
     * getPublicEncryptionKey - Get Public Key
     *
     * The get public key service provides the public key that should be used to encrypt user credentials while invoking POST /providerAccounts and PUT /providerAccounts endpoints.<br>This service will only work if the PKI (public key infrastructure) feature is enabled for the customer.<br><br><b>Note:</b><li> The key in the response is a string in PEM format.</li><li>This endpoint is not available in the Sandbox environment and it is useful only if the PKI feature is enabled.</li>
    **/
    getPublicEncryptionKey(config?: AxiosRequestConfig): Promise<operations.GetPublicEncryptionKeyResponse>;
    /**
     * getSubscribedNotificationEvents - Get Subscribed Notification Events
     *
     * The get events service provides the list of events for which consumers subscribed to receive notifications. <br>
    **/
    getSubscribedNotificationEvents(req: operations.GetSubscribedNotificationEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscribedNotificationEventsResponse>;
    /**
     * updateSubscribedNotificationEvent - Update Notification Subscription
     *
     * The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter. <br>
    **/
    updateSubscribedNotificationEvent(req: operations.UpdateSubscribedNotificationEventRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscribedNotificationEventResponse>;
}
