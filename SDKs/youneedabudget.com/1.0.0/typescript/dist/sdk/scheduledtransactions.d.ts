import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ScheduledTransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getScheduledTransactionById - Single scheduled transaction
     *
     * Returns a single scheduled transaction
    **/
    getScheduledTransactionById(req: operations.GetScheduledTransactionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTransactionByIdResponse>;
    /**
     * getScheduledTransactions - List scheduled transactions
     *
     * Returns all scheduled transactions
    **/
    getScheduledTransactions(req: operations.GetScheduledTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTransactionsResponse>;
}
