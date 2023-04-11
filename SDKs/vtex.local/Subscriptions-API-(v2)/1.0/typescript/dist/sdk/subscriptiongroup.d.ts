import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SubscriptionGroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add Subscription item by groupId
     *
     * @remarks
     * Adds an SKU to a given Subscription, filtering by groupId.
     */
    additemsubscriptionGroupId(req: operations.AdditemsubscriptionGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.AdditemsubscriptionGroupIdResponse>;
    /**
     * Cancel Subscription by groupId
     *
     * @remarks
     * Cancels Subscription by `groupId`
     */
    cancelSubscriptionbygroupId(req: operations.CancelSubscriptionbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.CancelSubscriptionbygroupIdResponse>;
    /**
     * List All subscription groups
     *
     * @remarks
     * Retrieves all subscription groups in your store.
     */
    getAllsubscriptiongroup(req: operations.GetAllsubscriptiongroupRequest, config?: AxiosRequestConfig): Promise<operations.GetAllsubscriptiongroupResponse>;
    /**
     * List Subscription group's Configuration
     *
     * @remarks
     * Retrieves details about a given subscription group's configuration, filtering by groupId.
     */
    getConfigsubscriptionsgroup(req: operations.GetConfigsubscriptionsgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigsubscriptionsgroupResponse>;
    /**
     * Get Conversation Message by groupId
     *
     * @remarks
     * Retrieves the conversation of a given Subscription group, filtering by groupId.
     */
    getConversationMessagebygroupId(req: operations.GetConversationMessagebygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationMessagebygroupIdResponse>;
    /**
     * Get Next purchase
     *
     * @remarks
     * Lists details of a given subscription group's next purchase, filtering by dateStr.
     */
    getNextpurchase(req: operations.GetNextpurchaseRequest, config?: AxiosRequestConfig): Promise<operations.GetNextpurchaseResponse>;
    /**
     * Get Simulation by subscription-group
     *
     * @remarks
     * Retrieves Subscription simulations, filtering by groupId.
     */
    getSimulatebysubscriptionGroup(req: operations.GetSimulatebysubscriptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSimulatebysubscriptionGroupResponse>;
    /**
     * Get Subscription by groupId
     *
     * @remarks
     * Lists Subscription details, filtering by `groupId`.
     */
    getSubscriptionbygroupId(req: operations.GetSubscriptionbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionbygroupIdResponse>;
    /**
     * Get addresses by groupId
     *
     * @remarks
     * Lists addresses linked to a given Subscription group, filtering by groupId.
     */
    getaddressesbygroupId(req: operations.GetaddressesbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetaddressesbygroupIdResponse>;
    /**
     * Get frequency options by groupId
     *
     * @remarks
     * Lists frequency options of a given Subscription group, filtering by groupId.
     */
    getfrequencyoptionsbygroupId(req: operations.GetfrequencyoptionsbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetfrequencyoptionsbygroupIdResponse>;
    /**
     * Get payment System by groupId
     *
     * @remarks
     * Retrieves payment system's information of a given Subscription group, filtering by groupId.
     */
    getpaymentSystembygroupId(req: operations.GetpaymentSystembygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetpaymentSystembygroupIdResponse>;
    /**
     * Get subscription group list
     *
     * @remarks
     * Retrieves a list of Subscription groups in your store.
     */
    getsubscriptiongrouplist(req: operations.GetsubscriptiongrouplistRequest, config?: AxiosRequestConfig): Promise<operations.GetsubscriptiongrouplistResponse>;
    /**
     * List 'Will create' by groupId
     *
     * @remarks
     * Retrieves Subscription groups listed as 'will create', filtering by groupId.
     */
    getwillcreatebygroupId(req: operations.GetwillcreatebygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetwillcreatebygroupIdResponse>;
    /**
     * Insert Addresses by groupId
     *
     * @remarks
     * Insert address information of a given Subscription group, filtering by groupId.
     */
    insertAddressesbygroupId(req: operations.InsertAddressesbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.InsertAddressesbygroupIdResponse>;
    /**
     * Retry subscription by groupId
     *
     * @remarks
     * Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.
     */
    retrysubscriptionbygroupId(req: operations.RetrysubscriptionbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.RetrysubscriptionbygroupIdResponse>;
    /**
     * Update Subscription by groupId
     *
     * @remarks
     * Updates a Subscription by `groupId`.
     */
    updateSubscriptionbygroupId(req: operations.UpdateSubscriptionbygroupIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionbygroupIdResponse>;
}
