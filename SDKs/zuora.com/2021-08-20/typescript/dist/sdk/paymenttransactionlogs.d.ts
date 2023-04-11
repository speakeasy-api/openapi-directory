import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentTransactionLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a payment transaction log
     *
     * @remarks
     * Retrieves information about a specific payment transaction log.
     *
     */
    objectGETPaymentTransactionLog(req: operations.ObjectGETPaymentTransactionLogRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETPaymentTransactionLogResponse>;
}
