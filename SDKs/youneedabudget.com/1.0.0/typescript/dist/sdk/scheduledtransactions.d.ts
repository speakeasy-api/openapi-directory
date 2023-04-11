import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The scheduled transactions for a budget
 */
export declare class ScheduledTransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Single scheduled transaction
     *
     * @remarks
     * Returns a single scheduled transaction
     */
    getScheduledTransactionById(req: operations.GetScheduledTransactionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTransactionByIdResponse>;
    /**
     * List scheduled transactions
     *
     * @remarks
     * Returns all scheduled transactions
     */
    getScheduledTransactions(req: operations.GetScheduledTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTransactionsResponse>;
}
