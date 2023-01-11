import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Months {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBudgetMonth - Single budget month
     *
     * Returns a single budget month
    **/
    getBudgetMonth(req: operations.GetBudgetMonthRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetMonthResponse>;
    /**
     * getBudgetMonths - List budget months
     *
     * Returns all budget months
    **/
    getBudgetMonths(req: operations.GetBudgetMonthsRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetMonthsResponse>;
}
