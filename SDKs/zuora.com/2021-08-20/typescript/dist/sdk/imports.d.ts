import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Imports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetImport - CRUD: Retrieve an import
    **/
    objectGetImport(req: operations.ObjectGetImportRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetImportResponse>;
    /**
     * objectPostImport - CRUD: Create an import
     *
     * Creates a data import.
     *
    **/
    objectPostImport(req: operations.ObjectPostImportRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostImportResponse>;
}
