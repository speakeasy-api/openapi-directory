import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Lets you know if a particular document is in one or more clusters.
 */
export declare class Clusters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Validate Document by Clusters
     */
    validateDocumentbyClusters(req: operations.ValidateDocumentbyClustersRequest, config?: AxiosRequestConfig): Promise<operations.ValidateDocumentbyClustersResponse>;
}
