import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoiceItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetInvoiceItem - CRUD: Retrieve an invoice item
    **/
    objectGetInvoiceItem(req: operations.ObjectGetInvoiceItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetInvoiceItemResponse>;
}
