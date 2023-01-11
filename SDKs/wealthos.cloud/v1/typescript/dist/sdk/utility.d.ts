import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Utility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * copyFileToS3 - Upload a file
     *
     * Copy a file from the Wealth Manager's data store (system must have read permission for this store) to an internal data store
    **/
    copyFileToS3(req: operations.CopyFileToS3Request, config?: AxiosRequestConfig): Promise<operations.CopyFileToS3Response>;
}
