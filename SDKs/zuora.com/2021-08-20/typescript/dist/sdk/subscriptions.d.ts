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
     * List subscriptions by account key
     *
     * @remarks
     * Retrieves all subscriptions associated with the specified account. Zuora only returns the latest version of the subscriptions.
     *
     * Subscription data is returned in reverse chronological order based on `updatedDate`.
     *
     */
    getSubscriptionsByAccount(req: operations.GETSubscriptionsByAccountRequest, config?: AxiosRequestConfig): Promise<operations.GETSubscriptionsByAccountResponse>;
    /**
     * Retrieve a subscription by key
     *
     * @remarks
     * This REST API reference describes how to retrieve detailed information about a specified subscription in the latest version.
     *
     */
    getSubscriptionsByKey(req: operations.GETSubscriptionsByKeyRequest, config?: AxiosRequestConfig): Promise<operations.GETSubscriptionsByKeyResponse>;
    /**
     * Retrieve a subscription by key and version
     *
     * @remarks
     * This REST API reference describes how to retrieve detailed information about a specified subscription in a specified version. When you create a subscription amendment, you create a new version of the subscription. You can use this method to retrieve information about a subscription in any version.
     *
     */
    getSubscriptionsByKeyAndVersion(req: operations.GETSubscriptionsByKeyAndVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETSubscriptionsByKeyAndVersionResponse>;
    /**
     * CRUD: Delete a subscription
     */
    objectDELETESubscription(req: operations.ObjectDELETESubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETESubscriptionResponse>;
    /**
     * CRUD: Retrieve a subscription
     */
    objectGETSubscription(req: operations.ObjectGETSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETSubscriptionResponse>;
    /**
     * CRUD: Update a subscription
     */
    objectPUTSubscription(req: operations.ObjectPUTSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTSubscriptionResponse>;
    /**
     * Preview a subscription
     *
     * @remarks
     * The REST API reference describes how to create a new subscription in preview mode. This call does not require a valid customer account. It can be used to show potential new customers a preview of a subscription with complete details and charges before creating an account, or to let existing customers preview a subscription with all charges before committing.
     *
     * ## Notes
     * - The response of the Preview Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers.
     *
     * - If you have the Invoice Settlement feature enabled, we recommend that you set the `zuora-version` parameter to `207.0` or later. Otherwise, an error is returned.
     *
     *
     * - Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.
     *
     * |        | serviceActivationDate (SA) specified          | serviceActivationDate (SA) NOT specified  |
     * | ------------- |:-------------:| -----:|
     * | customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
     * | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
     *
     */
    postPreviewSubscription(req: operations.POSTPreviewSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTPreviewSubscriptionResponse>;
    /**
     * Create a subscription
     *
     * @remarks
     * This REST API reference describes how to create a new subscription for an existing customer account.
     *
     * ## Notes
     *
     * If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
     *
     * If `invoiceCollect` is `true`, the call will not return `success` = `true` unless the subscription, invoice, and payment are all successful.
     *
     * Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows. This API operation does not support creating a pending subscription.
     *
     * |        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
     * | ------------- |:-------------:| -----:|
     * | customerAcceptanceDate (CA) specified| SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
     * | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
     *
     */
    postSubscription(req: operations.POSTSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTSubscriptionResponse>;
    /**
     * Cancel a subscription
     *
     * @remarks
     * This REST API reference describes how to cancel an active subscription.
     *
     * **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
     *
     */
    putCancelSubscription(req: operations.PUTCancelSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PUTCancelSubscriptionResponse>;
    /**
     * Renew a subscription
     *
     * @remarks
     * Renews a termed subscription using existing renewal terms.
     *
     * **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
     *
     */
    putRenewSubscription(req: operations.PUTRenewSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PUTRenewSubscriptionResponse>;
    /**
     * Resume a subscription
     *
     * @remarks
     * This REST API reference describes how to resume a suspended subscription.
     *
     * **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
     *
     */
    putResumeSubscription(req: operations.PUTResumeSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PUTResumeSubscriptionResponse>;
    /**
     * Update a subscription
     *
     * @remarks
     * Use this call to make the following kinds of changes to a subscription:
     *   * Add a note
     *   * Change the renewal term or auto-renewal flag
     *   * Change the term length or change between evergreen and termed
     *   * Add a new product rate plan
     *   * Remove an existing subscription rate plan
     *   * Change the quantity or price of an existing subscription rate plan
     *
     * ## Notes
     * * The Update Subscription call creates a new subscription, which has the old subscription number but a new subscription ID.  The old subscription is canceled but remains in the system.
     * * In one request, this call can make:
     *   * Up to 9 combined add, update, and remove changes
     *   * No more than 1 change to terms & conditions
     * * Updates are performed in the following sequence:
     *   1. First change the notes on the existing subscription, if requested.
     *   2. Then change the terms and conditions, if requested.
     *   3. Then perform the remaining amendments based upon the effective dates specified. If multiple amendments have the same contract-effective dates, then execute adds before updates, and updates before removes.
     * * The update operation is atomic. If any of the updates fails, the entire operation is rolled back.
     * * The response of the Update Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers.
     * * If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
     *
     * ## Override a Tiered Price
     * There are two ways you override a tiered price:
     *
     * * Override a specific tier number
     * For example: `tiers[{tier:1,price:8},{tier:2,price:6}]`
     *
     * * Override the entire tier structure
     * For example:  `tiers[{tier:1,price:8,startingUnit:1,endingUnit:100,priceFormat:"FlatFee"},
     * {tier:2,price:6,startingUnit:101,priceFormat:"FlatFee"}]`
     *
     * If you just override a specific tier, do not include the `startingUnit` field in the request.
     *
     */
    putSubscription(req: operations.PUTSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PUTSubscriptionResponse>;
    /**
     * Suspend a subscription
     *
     * @remarks
     * This REST API reference describes how to suspend an active subscription.
     *
     * **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
     *
     */
    putSuspendSubscription(req: operations.PUTSuspendSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PUTSuspendSubscriptionResponse>;
    /**
     * Update subscription custom fields of a subscription version
     *
     * @remarks
     * Updates the custom fields of a specified subscription version.
     *
     */
    putUpdateSubscriptionCustomFieldsOfASpecifiedVersion(req: operations.PUTUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse>;
}
