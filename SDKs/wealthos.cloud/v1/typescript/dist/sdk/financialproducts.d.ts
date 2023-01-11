import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FinancialProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllFinancialProducts - Get All Financial Products
     *
     * Returns all the financial products setup for the tenant in an array
    **/
    getAllFinancialProducts(req: operations.GetAllFinancialProductsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllFinancialProductsResponse>;
}
