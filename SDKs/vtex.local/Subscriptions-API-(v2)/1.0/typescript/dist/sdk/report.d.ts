import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Report {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get report status by ID
     *
     * @remarks
     * Retrieves the Subscription's report status, filtering by its reportId.
     */
    getreportstatusbyID(req: operations.GetreportstatusbyIDRequest, config?: AxiosRequestConfig): Promise<operations.GetreportstatusbyIDResponse>;
    /**
     * Retrieve Subscription report by Status
     *
     * @remarks
     * Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.
     */
    requestreportbyStatus(req: operations.RequestreportbyStatusRequest, config?: AxiosRequestConfig): Promise<operations.RequestreportbyStatusResponse>;
    /**
     * Retrieve Subscription report by date
     *
     * @remarks
     * Retrieves a report with the subscriptions created at the date interval requested
     */
    requestreportbydate(req: operations.RequestreportbydateRequest, config?: AxiosRequestConfig): Promise<operations.RequestreportbydateResponse>;
    /**
     * Retrieve Subscription report by order date
     *
     * @remarks
     * Retrieves a report regarding the Subscriptions created during the date interval of orders.
     */
    requestreportbyorderdate(req: operations.RequestreportbyorderdateRequest, config?: AxiosRequestConfig): Promise<operations.RequestreportbyorderdateResponse>;
    /**
     * Retrieve Subscription report by schedule
     *
     * @remarks
     * Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested
     */
    requestreportbyschedule(req: operations.RequestreportbyscheduleRequest, config?: AxiosRequestConfig): Promise<operations.RequestreportbyscheduleResponse>;
    /**
     * Request report by update
     *
     * @remarks
     * Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.
     */
    requestreportbyupdate(req: operations.RequestreportbyupdateRequest, config?: AxiosRequestConfig): Promise<operations.RequestreportbyupdateResponse>;
}
