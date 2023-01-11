import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentMethodTransactionLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetPaymentMethodTransactionLog - CRUD: Retrieve a payment method transaction log
    **/
    objectGetPaymentMethodTransactionLog(req: operations.ObjectGetPaymentMethodTransactionLogRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetPaymentMethodTransactionLogResponse>;
}
