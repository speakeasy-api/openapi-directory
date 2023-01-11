import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvestmentProductTransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * executeBuyTrasaction - Execute Buy Transaction(s)
     *
     * Invoke execution of one or more buy transactions as defined in the request
    **/
    executeBuyTrasaction(req: operations.ExecuteBuyTrasactionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteBuyTrasactionResponse>;
    /**
     * executeSellTrasaction - Execute Sell Transaction(s)
     *
     * Invoke execution of one or more Sell transactions as defined in the request
    **/
    executeSellTrasaction(req: operations.ExecuteSellTrasactionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSellTrasactionResponse>;
}
