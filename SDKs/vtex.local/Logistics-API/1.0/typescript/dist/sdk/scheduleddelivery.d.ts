import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ScheduledDelivery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add blocked delivery windows
     *
     * @remarks
     * Adds blocked delivery windows for your store's shipping policies.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
     */
    addBlockedDeliveryWindows(req: operations.AddBlockedDeliveryWindowsRequest, config?: AxiosRequestConfig): Promise<operations.AddBlockedDeliveryWindowsResponse>;
    /**
     * Remove blocked delivery windows
     *
     * @remarks
     * Removes the blocked delivery windows set to your store's shipping policies.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
     */
    removeBlockedDeliveryWindows(req: operations.RemoveBlockedDeliveryWindowsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveBlockedDeliveryWindowsResponse>;
    /**
     * Retrieve blocked delivery windows
     *
     * @remarks
     * Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
     */
    retrieveBlockedDeliveryWindows(req: operations.RetrieveBlockedDeliveryWindowsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveBlockedDeliveryWindowsResponse>;
    /**
     * Search capacity reservations in time range
     *
     * @remarks
     * Get information on all capacity reservations made to scheduled delivery windows in a given time range.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
     *
     *
  > Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.
     */
    getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames(req: operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesResponse>;
    /**
     * Get capacity reservation usage by window
     *
     * @remarks
     * Retrieves capacity usage of a specific scheduled delivery reservation window.
     *
     *
  > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
     *
     *
  > Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.
     */
    getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime(req: operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeResponse>;
}
