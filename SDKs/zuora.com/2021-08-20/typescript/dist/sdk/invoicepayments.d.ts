import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoicePayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetInvoicePayment - CRUD: Retrieve an invoice payment
    **/
    objectGetInvoicePayment(req: operations.ObjectGetInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetInvoicePaymentResponse>;
    /**
     * objectPostInvoicePayment - CRUD: Create an invoice payment
    **/
    objectPostInvoicePayment(req: operations.ObjectPostInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostInvoicePaymentResponse>;
    /**
     * objectPutInvoicePayment - CRUD: Update an invoice payment
    **/
    objectPutInvoicePayment(req: operations.ObjectPutInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutInvoicePaymentResponse>;
}
