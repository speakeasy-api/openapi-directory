import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Charge Metrics provides a service to access key metrics for rate plan charges in Zuora, for example, Gross MRR, Net MRR, Gross TCV, and Net TCV.
 *
 * @remarks
 *
 */
export declare class ChargeMetrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List charge metrics by time range
     *
     * @remarks
     * Retrieves key charge metrics about rate plan charges that have changes in a specified time range.
     *
     * The purpose of `fromTimestamp` and `toTimestamp` is to synchronize charge metrics data incrementally.
     *
     */
    getChargeMetrics(req: operations.GETChargeMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GETChargeMetricsResponse>;
    /**
     * List discount allocation details by time range
     *
     * @remarks
     * Retrieves discount allocation details about rate plan charges that have changes in a specified time range.
     *
     * The purpose of `fromTimestamp` and `toTimestamp` is to synchronize discount allocation details incrementally.
     *
     */
    getChargeMetricsDiscountAllocationDetails(req: operations.GETChargeMetricsDiscountAllocationDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GETChargeMetricsDiscountAllocationDetailsResponse>;
}
