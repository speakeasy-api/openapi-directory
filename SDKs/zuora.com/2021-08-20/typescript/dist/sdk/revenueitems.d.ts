import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RevenueItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List revenue items by revenue event number
     *
     * @remarks
     * This REST API reference describes how to get the details of each revenue item in a revenue event by specifying the revenue event number. Request and response field descriptions and sample code are provided.
     *
     */
    getRevenueItemsByChargeRevenueEventNumber(req: operations.GETRevenueItemsByChargeRevenueEventNumberRequest, config?: AxiosRequestConfig): Promise<operations.GETRevenueItemsByChargeRevenueEventNumberResponse>;
    /**
     * List revenue items by charge revenue summary number
     *
     * @remarks
     * This REST API reference describes how to get the details for each revenue item in a charge revenue summary by specifying the charge revenue summary number. Request and response field descriptions and sample code are provided.
     *
     */
    getRevenueItemsByChargeRevenueSummaryNumber(req: operations.GETRevenueItemsByChargeRevenueSummaryNumberRequest, config?: AxiosRequestConfig): Promise<operations.GETRevenueItemsByChargeRevenueSummaryNumberResponse>;
    /**
     * List all revenue items of a revenue schedule
     *
     * @remarks
     * This REST API reference describes how to get the details for each revenue items in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
     */
    getRevenueItemsByRevenueSchedule(req: operations.GETRevenueItemsByRevenueScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GETRevenueItemsByRevenueScheduleResponse>;
    /**
     * Update custom fields on revenue items by revenue event number
     *
     * @remarks
     * This REST API reference describes how to update custom fields on revenue items by specifying the revenue event number. Request and response field descriptions and sample code are provided.
     *
     */
    putCustomFieldsonRevenueItemsByRevenueEvent(req: operations.PUTCustomFieldsonRevenueItemsByRevenueEventRequest, config?: AxiosRequestConfig): Promise<operations.PUTCustomFieldsonRevenueItemsByRevenueEventResponse>;
    /**
     * Update custom fields on revenue items by revenue schedule number
     *
     * @remarks
     * This REST API reference describes how to update custom fields on revenue Items by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
     */
    putCustomFieldsonRevenueItemsByRevenueSchedule(req: operations.PUTCustomFieldsonRevenueItemsByRevenueScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PUTCustomFieldsonRevenueItemsByRevenueScheduleResponse>;
}
