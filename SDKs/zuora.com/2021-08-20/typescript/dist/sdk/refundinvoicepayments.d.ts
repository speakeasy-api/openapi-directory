import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RefundInvoicePayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a refund invoice payment
     */
    objectGETRefundInvoicePayment(req: operations.ObjectGETRefundInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETRefundInvoicePaymentResponse>;
}
