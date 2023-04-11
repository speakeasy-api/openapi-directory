import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all invoices for an account
     *
     * @remarks
     * Retrieves invoices for a specified account.
     * Invoices are returned in reverse chronological order by **updatedDate**.
     *
     * For a use case of this operation, see [View invoices](https://www.zuora.com/developer/api-guides/#View-invoices).
     *
     */
    getTransactionInvoice(req: operations.GETTransactionInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GETTransactionInvoiceResponse>;
    /**
     * List all payments for an account
     *
     * @remarks
     * Retrieves payments for a specified account. Payments are returned in
     * reverse chronological order by **updatedDate**.
     *
     */
    getTransactionPayment(req: operations.GETTransactionPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GETTransactionPaymentResponse>;
}
