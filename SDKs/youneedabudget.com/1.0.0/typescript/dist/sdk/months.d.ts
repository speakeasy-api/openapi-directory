import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Each budget contains one or more months, which is where Ready to Assign, Age of Money and category (budgeted / activity / balances) amounts are available.
 */
export declare class Months {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Single budget month
     *
     * @remarks
     * Returns a single budget month
     */
    getBudgetMonth(req: operations.GetBudgetMonthRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetMonthResponse>;
    /**
     * List budget months
     *
     * @remarks
     * Returns all budget months
     */
    getBudgetMonths(req: operations.GetBudgetMonthsRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetMonthsResponse>;
}
