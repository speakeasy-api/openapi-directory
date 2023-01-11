import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RevenueEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRevenueEventDetails - Retrieve a revenue event
     *
     * This REST API reference describes how to get revenue event details by specifying the revenue event number. Request and response field descriptions and sample code are provided.
     *
    **/
    getRevenueEventDetails(req: operations.GetRevenueEventDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetRevenueEventDetailsResponse>;
    /**
     * getRevenueEventForRevenueSchedule - List all revenue events of a revenue schedule
     *
     *
     * This REST API reference describes how to get all revenue events in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
    **/
    getRevenueEventForRevenueSchedule(req: operations.GetRevenueEventForRevenueScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetRevenueEventForRevenueScheduleResponse>;
}
