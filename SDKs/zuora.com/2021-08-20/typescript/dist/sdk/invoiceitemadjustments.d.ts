import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoiceItemAdjustments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteInvoiceItemAdjustment - CRUD: Delete an invoice item adjustment
    **/
    objectDeleteInvoiceItemAdjustment(req: operations.ObjectDeleteInvoiceItemAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteInvoiceItemAdjustmentResponse>;
    /**
     * objectGetInvoiceItemAdjustment - CRUD: Retrieve an invoice item adjustment
    **/
    objectGetInvoiceItemAdjustment(req: operations.ObjectGetInvoiceItemAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetInvoiceItemAdjustmentResponse>;
}
