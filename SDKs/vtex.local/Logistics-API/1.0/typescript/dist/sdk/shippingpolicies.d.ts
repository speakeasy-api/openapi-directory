import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ShippingPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete shipping policies by ID
     *
     * @remarks
     * This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.
     */
    deleteApiLogisticsPvtShippingPoliciesId(req: operations.DeleteApiLogisticsPvtShippingPoliciesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiLogisticsPvtShippingPoliciesIdResponse>;
    /**
     * List shipping policies
     *
     * @remarks
     * This endpoint lists existing shipping policies from carriers in your store.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
     */
    getApiLogisticsPvtShippingPolicies(req: operations.GetApiLogisticsPvtShippingPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLogisticsPvtShippingPoliciesResponse>;
    /**
     * Retrieve shipping policy by ID
     *
     * @remarks
     * This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
     */
    getApiLogisticsPvtShippingPoliciesId(req: operations.GetApiLogisticsPvtShippingPoliciesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLogisticsPvtShippingPoliciesIdResponse>;
    /**
     * Create shipping policy
     *
     * @remarks
     * This endpoint creates new shipping policies from carriers in your store.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
     */
    postApiLogisticsPvtShippingPolicies(req: operations.PostApiLogisticsPvtShippingPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostApiLogisticsPvtShippingPoliciesResponse>;
    /**
     * Update shipping policy
     *
     * @remarks
     * This endpoint updates information on existing Shipping Policies from carriers.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
     */
    putApiLogisticsPvtShippingPoliciesId(req: operations.PutApiLogisticsPvtShippingPoliciesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutApiLogisticsPvtShippingPoliciesIdResponse>;
}
