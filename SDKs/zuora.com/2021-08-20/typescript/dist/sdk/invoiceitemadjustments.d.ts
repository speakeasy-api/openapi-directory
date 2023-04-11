import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InvoiceItemAdjustments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete an invoice item adjustment
     */
    objectDELETEInvoiceItemAdjustment(req: operations.ObjectDELETEInvoiceItemAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEInvoiceItemAdjustmentResponse>;
    /**
     * CRUD: Retrieve an invoice item adjustment
     */
    objectGETInvoiceItemAdjustment(req: operations.ObjectGETInvoiceItemAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETInvoiceItemAdjustmentResponse>;
}
