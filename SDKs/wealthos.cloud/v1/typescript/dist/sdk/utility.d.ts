import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The utility endpoint allows the Wealth Manager to upload information required by the system to support the daily operations (e.g. file uploads for daily jobs, calendar updates etc.)
 */
export declare class Utility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload a file
     *
     * @remarks
     * Copy a file from the Wealth Manager's data store (system must have read permission for this store) to an internal data store
     */
    copyFileToS3(req: operations.CopyFileToS3Request, security: operations.CopyFileToS3Security, config?: AxiosRequestConfig): Promise<operations.CopyFileToS3Response>;
}
