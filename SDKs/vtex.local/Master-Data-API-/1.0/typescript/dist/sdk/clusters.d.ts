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
     * Validate document by clusters
     *
     * @remarks
     * Check if a document is present in one or more clusters (specific set of field values).
     *
     * > There is a limit of five rules per request.
     */
    validatedocumentbyclusters(req: operations.ValidatedocumentbyclustersRequest, config?: AxiosRequestConfig): Promise<operations.ValidatedocumentbyclustersResponse>;
}
