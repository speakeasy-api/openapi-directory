import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InvoicePayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve an invoice payment
     */
    objectGETInvoicePayment(req: operations.ObjectGETInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETInvoicePaymentResponse>;
    /**
     * CRUD: Create an invoice payment
     */
    objectPOSTInvoicePayment(req: operations.ObjectPOSTInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTInvoicePaymentResponse>;
    /**
     * CRUD: Update an invoice payment
     */
    objectPUTInvoicePayment(req: operations.ObjectPUTInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTInvoicePaymentResponse>;
}
