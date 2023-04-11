import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * After one transaction is authorized, there is remaining to do some calls in order to complete a transaction and its payments. We explain the settle process, cancel authorized payments process, and refund process by using examples.
 */
export declare class TransactionFlow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel the transaction
     *
     * @remarks
     * Cancel's transaction that was previously approved, but not settled.
     */
    cancelthetransaction(req: operations.CancelthetransactionRequest, config?: AxiosRequestConfig): Promise<operations.CancelthetransactionResponse>;
    /**
     * Refund the transaction
     *
     * @remarks
     * Refunds transaction's value that was previously settled.
     */
    refundthetransaction(req: operations.RefundthetransactionRequest, config?: AxiosRequestConfig): Promise<operations.RefundthetransactionResponse>;
    /**
     * Settle the transaction
     *
     * @remarks
     * Settles transaction's value.
     */
    settlethetransaction(req: operations.SettlethetransactionRequest, config?: AxiosRequestConfig): Promise<operations.SettlethetransactionResponse>;
}
