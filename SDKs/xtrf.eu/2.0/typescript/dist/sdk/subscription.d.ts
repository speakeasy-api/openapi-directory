import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Subscription {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method can be used to determine if hooks are supported.
     *
     * @remarks
     * This method can be used to determine if hooks are supported.
     */
    areHooksSupported(config?: AxiosRequestConfig): Promise<operations.AreHooksSupportedResponse>;
    /**
     * Returns all subscriptions
     *
     * @remarks
     * Returns all subscriptions. Subscriptions are automatically removed if they do not work (ie. if 404 status is returned). To improve notification reliability one can use this method to check if subscription is still active and re-subscribe if necessary.
     */
    getAll4(config?: AxiosRequestConfig): Promise<operations.GetAll4Response>;
    /**
     * Subscribe to event
     *
     * @remarks
     * Subscribe to event. Returns subscription Id.
     */
    subscribe(req: shared.SubscriptionDTO, config?: AxiosRequestConfig): Promise<operations.SubscribeResponse>;
    /**
     * Unsubscribe from event
     *
     * @remarks
     * Unsubscribe from job status changed event
     */
    unsubscribe(req: operations.UnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeResponse>;
}
