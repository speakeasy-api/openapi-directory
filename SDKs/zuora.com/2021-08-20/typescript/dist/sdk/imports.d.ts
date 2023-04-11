import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Imports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve an import
     */
    objectGETImport(req: operations.ObjectGETImportRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETImportResponse>;
    /**
     * CRUD: Create an import
     *
     * @remarks
     * Creates a data import.
     *
     */
    objectPOSTImport(req: operations.ObjectPOSTImportRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTImportResponse>;
}
