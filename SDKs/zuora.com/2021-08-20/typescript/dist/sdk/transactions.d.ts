import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTransactionInvoice - List all invoices for an account
     *
     * Retrieves invoices for a specified account.
     * Invoices are returned in reverse chronological order by **updatedDate**.
     *
     * For a use case of this operation, see [View invoices](https://www.zuora.com/developer/api-guides/#View-invoices).
     *
    **/
    getTransactionInvoice(req: operations.GetTransactionInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionInvoiceResponse>;
    /**
     * getTransactionPayment - List all payments for an account
     *
     * Retrieves payments for a specified account. Payments are returned in
     * reverse chronological order by **updatedDate**.
     *
    **/
    getTransactionPayment(req: operations.GetTransactionPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionPaymentResponse>;
}
