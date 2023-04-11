import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Financial Products are the tax wrapper investment vehicles offered by the Wealth Manager (e.g. General Investment Accounts, Stocks and Shares ISAs, SIPPs, LISAs etc.). Currently WealthOS supports General Investment Accounts (GIAs).
 *
 * @remarks
 *
 * The Financial Products endpoint returns all financial products and their configurations setup by the Wealth Manager via the WealthOS Admin UI.
 */
export declare class FinancialProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get All Financial Products
     *
     * @remarks
     * Returns all the financial products setup for the tenant in an array
     */
    getAllFinancialProducts(req: operations.GetAllFinancialProductsRequest, security: operations.GetAllFinancialProductsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllFinancialProductsResponse>;
}
