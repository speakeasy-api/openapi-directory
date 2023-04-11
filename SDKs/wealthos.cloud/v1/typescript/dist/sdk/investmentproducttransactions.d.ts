import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Transactions endpoint allows you to buy or sell Investment Products. The endpoint supports single or bulk transactions.
 *
 * @remarks
 *
 * A transaction to buy or sell an investment product can be specified in units (i.e. buy/sell n number of units of the investment product) or as a value (i.e. buy/sell up to n value of the investment product).
 *
 */
export declare class InvestmentProductTransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Execute Buy Transaction(s)
     *
     * @remarks
     * Invoke execution of one or more buy transactions as defined in the request
     */
    executeBuyTrasaction(req: operations.ExecuteBuyTrasactionRequest, security: operations.ExecuteBuyTrasactionSecurity, config?: AxiosRequestConfig): Promise<operations.ExecuteBuyTrasactionResponse>;
    /**
     * Execute Sell Transaction(s)
     *
     * @remarks
     * Invoke execution of one or more Sell transactions as defined in the request
     */
    executeSellTrasaction(req: operations.ExecuteSellTrasactionRequest, security: operations.ExecuteSellTrasactionSecurity, config?: AxiosRequestConfig): Promise<operations.ExecuteSellTrasactionResponse>;
}
