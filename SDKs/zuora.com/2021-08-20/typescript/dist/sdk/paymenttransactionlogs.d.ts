import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentTransactionLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetPaymentTransactionLog - CRUD: Retrieve a payment transaction log
     *
     * Retrieves information about a specific payment transaction log.
     *
    **/
    objectGetPaymentTransactionLog(req: operations.ObjectGetPaymentTransactionLogRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetPaymentTransactionLogResponse>;
}
