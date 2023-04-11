import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ExportOrderReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export order report with status 'Completed'
     *
     * @remarks
     * Retrieves a list of all order reports that are `completed`, by `accountName`. Be aware that the scope of the export log is per user.
     *
     * > This endpoint is for VTEX internal use, and it is not meant to be used by clients.
     */
    statusCompleted(req: operations.StatusCompletedRequest, config?: AxiosRequestConfig): Promise<operations.StatusCompletedResponse>;
    /**
     * Export order report with status 'In Progress'
     *
     * @remarks
     * Retrieves a list of all order reports that are `in progress`, by `accountName`. Be aware that the scope of the export log is per user.
     *
     * > This endpoint is for VTEX internal use, and it is not meant to be used by clients.
     */
    statusInProgress(req: operations.StatusInProgressRequest, config?: AxiosRequestConfig): Promise<operations.StatusInProgressResponse>;
}
