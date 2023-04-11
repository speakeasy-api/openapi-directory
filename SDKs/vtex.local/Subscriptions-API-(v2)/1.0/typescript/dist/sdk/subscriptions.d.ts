import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel Subscriptions by SubscriptionId
     *
     * @remarks
     * Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated
     */
    cancelSubscriptionsbySubscriptionId(req: operations.CancelSubscriptionsbySubscriptionIdRequest, config?: AxiosRequestConfig): Promise<operations.CancelSubscriptionsbySubscriptionIdResponse>;
    /**
     * Get Subscription List
     *
     * @remarks
     * Retrieves a list of Subscriptions linked to your store.
     */
    getSubscriptionList(req: operations.GetSubscriptionListRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionListResponse>;
    /**
     * Get frequency options by subscriptionId
     *
     * @remarks
     * Lists frequency options for the Subscription, filtering by `subscriptionId`.
     */
    getfrequencyoptionsbysubscriptionId(req: operations.GetfrequencyoptionsbysubscriptionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetfrequencyoptionsbysubscriptionIdResponse>;
    /**
     * Retrieve subscription by ID
     *
     * @remarks
     * Lists Subscription's details, searching by `subscriptionId`.
     */
    getsubscriptionbyId(req: operations.GetsubscriptionbyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetsubscriptionbyIdResponse>;
    /**
     * Retrieve customer's subscriptions
     *
     * @remarks
     * Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.
     */
    getsubscriptionstocustomer(req: operations.GetsubscriptionstocustomerRequest, config?: AxiosRequestConfig): Promise<operations.GetsubscriptionstocustomerResponse>;
    /**
     * Insert Addresses for Subscription
     *
     * @remarks
     * Inserts address's information to complement the Subscription details.
     */
    insertAddressesforSubscription(req: operations.InsertAddressesforSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.InsertAddressesforSubscriptionResponse>;
    /**
     * Update Subscriptions by SubscriptionId
     *
     * @remarks
     * Update, add or alter information of a given Subscription, filtering by `subscriptionId`.
     */
    updateSubscriptionsbySubscriptionId(req: operations.UpdateSubscriptionsbySubscriptionIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionsbySubscriptionIdResponse>;
}
