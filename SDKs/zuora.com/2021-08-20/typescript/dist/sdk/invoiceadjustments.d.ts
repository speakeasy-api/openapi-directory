import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InvoiceAdjustments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete an invoice adjustment
     */
    objectDELETEInvoiceAdjustment(req: operations.ObjectDELETEInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEInvoiceAdjustmentResponse>;
    /**
     * CRUD: Retrieve an invoice adjustment
     */
    objectGETInvoiceAdjustment(req: operations.ObjectGETInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETInvoiceAdjustmentResponse>;
    /**
     * CRUD: Create an invoice adjustment
     */
    objectPOSTInvoiceAdjustment(req: operations.ObjectPOSTInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTInvoiceAdjustmentResponse>;
    /**
     * CRUD: Update an invoice adjustment
     */
    objectPUTInvoiceAdjustment(req: operations.ObjectPUTInvoiceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTInvoiceAdjustmentResponse>;
}
