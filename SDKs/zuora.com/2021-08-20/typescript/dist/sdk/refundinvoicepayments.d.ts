import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RefundInvoicePayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetRefundInvoicePayment - CRUD: Retrieve a refund invoice payment
    **/
    objectGetRefundInvoicePayment(req: operations.ObjectGetRefundInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetRefundInvoicePaymentResponse>;
}
