import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChargeMetrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getChargeMetrics - List charge metrics by time range
     *
     * Retrieves key charge metrics about rate plan charges that have changes in a specified time range.
     *
     * The purpose of `fromTimestamp` and `toTimestamp` is to synchronize charge metrics data incrementally.
     *
    **/
    getChargeMetrics(req: operations.GetChargeMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeMetricsResponse>;
    /**
     * getChargeMetricsDiscountAllocationDetails - List discount allocation details by time range
     *
     * Retrieves discount allocation details about rate plan charges that have changes in a specified time range.
     *
     * The purpose of `fromTimestamp` and `toTimestamp` is to synchronize discount allocation details incrementally.
     *
    **/
    getChargeMetricsDiscountAllocationDetails(req: operations.GetChargeMetricsDiscountAllocationDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeMetricsDiscountAllocationDetailsResponse>;
}
