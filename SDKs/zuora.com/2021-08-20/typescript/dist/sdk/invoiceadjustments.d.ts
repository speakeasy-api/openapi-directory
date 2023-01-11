import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoiceAdjustments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteInvoiceAdjustment - CRUD: Delete an invoice adjustment
    **/
    objectDeleteInvoiceAdjustment(req: operations.ObjectDeleteInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteInvoiceAdjustmentResponse>;
    /**
     * objectGetInvoiceAdjustment - CRUD: Retrieve an invoice adjustment
    **/
    objectGetInvoiceAdjustment(req: operations.ObjectGetInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetInvoiceAdjustmentResponse>;
    /**
     * objectPostInvoiceAdjustment - CRUD: Create an invoice adjustment
    **/
    objectPostInvoiceAdjustment(req: operations.ObjectPostInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostInvoiceAdjustmentResponse>;
    /**
     * objectPutInvoiceAdjustment - CRUD: Update an invoice adjustment
    **/
    objectPutInvoiceAdjustment(req: operations.ObjectPutInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutInvoiceAdjustmentResponse>;
}
