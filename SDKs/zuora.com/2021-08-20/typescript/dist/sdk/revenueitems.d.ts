import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RevenueItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRevenueItemsByChargeRevenueEventNumber - List revenue items by revenue event number
     *
     * This REST API reference describes how to get the details of each revenue item in a revenue event by specifying the revenue event number. Request and response field descriptions and sample code are provided.
     *
    **/
    getRevenueItemsByChargeRevenueEventNumber(req: operations.GetRevenueItemsByChargeRevenueEventNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetRevenueItemsByChargeRevenueEventNumberResponse>;
    /**
     * getRevenueItemsByChargeRevenueSummaryNumber - List revenue items by charge revenue summary number
     *
     * This REST API reference describes how to get the details for each revenue item in a charge revenue summary by specifying the charge revenue summary number. Request and response field descriptions and sample code are provided.
     *
    **/
    getRevenueItemsByChargeRevenueSummaryNumber(req: operations.GetRevenueItemsByChargeRevenueSummaryNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse>;
    /**
     * getRevenueItemsByRevenueSchedule - List all revenue items of a revenue schedule
     *
     * This REST API reference describes how to get the details for each revenue items in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
    **/
    getRevenueItemsByRevenueSchedule(req: operations.GetRevenueItemsByRevenueScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetRevenueItemsByRevenueScheduleResponse>;
    /**
     * putCustomFieldsonRevenueItemsByRevenueEvent - Update custom fields on revenue items by revenue event number
     *
     * This REST API reference describes how to update custom fields on revenue items by specifying the revenue event number. Request and response field descriptions and sample code are provided.
     *
    **/
    putCustomFieldsonRevenueItemsByRevenueEvent(req: operations.PutCustomFieldsonRevenueItemsByRevenueEventRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse>;
    /**
     * putCustomFieldsonRevenueItemsByRevenueSchedule - Update custom fields on revenue items by revenue schedule number
     *
     * This REST API reference describes how to update custom fields on revenue Items by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
    **/
    putCustomFieldsonRevenueItemsByRevenueSchedule(req: operations.PutCustomFieldsonRevenueItemsByRevenueScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse>;
}
