import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cobrand {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cobrandLogin - Cobrand Login
     *
     * The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>
    **/
    cobrandLogin(req: operations.CobrandLoginRequest, config?: AxiosRequestConfig): Promise<operations.CobrandLoginResponse>;
    /**
     * cobrandLogout - Cobrand Logout
     *
     * The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
    **/
    cobrandLogout(config?: AxiosRequestConfig): Promise<operations.CobrandLogoutResponse>;
    /**
     * createSubscriptionEvent - Subscribe Event
     *
     * <b>Refer POST /configs/notifications/events/{eventName}.</b><br>The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes</b>:<br>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<br>The content type has to be passed as application/json for the body parameter.<br>
    **/
    createSubscriptionEvent(req: operations.CreateSubscriptionEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionEventResponse>;
    /**
     * deleteSubscribedEvent - Delete Subscription
     *
     * <b>Refer DELETE /configs/notifications/events/{eventName}.</b><br>The delete events service is used to unsubscribe from an events service.<br>
    **/
    deleteSubscribedEvent(req: operations.DeleteSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscribedEventResponse>;
    /**
     * getPublicKey - Get Public Key
     *
     * <b>Refer GET /configs/publicKey.</b><br>The get public key service provides the customer the public key that should be used to encrypt the user credentials before sending it to Yodlee.<br>This endpoint is useful only for PKI enabled.<br>
    **/
    getPublicKey(config?: AxiosRequestConfig): Promise<operations.GetPublicKeyResponse>;
    /**
     * getSubscribedEvents - Get Subscribed Events
     *
     * <b>Refer GET /configs/notifications/events.</b><br>The get events service provides the list of events for which consumers subscribed <br>to receive notifications. <br>
    **/
    getSubscribedEvents(req: operations.GetSubscribedEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscribedEventsResponse>;
    /**
     * updateSubscribedEvent - Update Subscription
     *
     * <b>Refer PUT /configs/notifications/events/{eventName}.</b><br>The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><b>Note:</b> The content type has to be passed as application/json for the body parameter. <br>
    **/
    updateSubscribedEvent(req: operations.UpdateSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscribedEventResponse>;
}
