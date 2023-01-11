import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoiceSplits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetInvoiceSplit - CRUD: Retrieve an invoice split
    **/
    objectGetInvoiceSplit(req: operations.ObjectGetInvoiceSplitRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetInvoiceSplitResponse>;
}
