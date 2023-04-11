import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Logged requests and responses received by the mock service
 *
 * @see {@link http://wiremock.org/docs/verifying/} - User documentation
 */
export declare class Requests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete all requests in journal
     */
    deleteAdminRequests(config?: AxiosRequestConfig): Promise<operations.DeleteAdminRequestsResponse>;
    /**
     * Delete request by ID
     */
    deleteAdminRequestsRequestId(req: operations.DeleteAdminRequestsRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminRequestsRequestIdResponse>;
    /**
     * Get all requests in journal
     */
    getAdminRequests(req: operations.GetAdminRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsResponse>;
    /**
     * Find unmatched requests
     *
     * @remarks
     * Get details of logged requests that weren't matched by any stub mapping
     */
    getAdminRequestsUnmatched(config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsUnmatchedResponse>;
    /**
     * Get request by ID
     */
    getAdminRequestsRequestId(req: operations.GetAdminRequestsRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsRequestIdResponse>;
    /**
     * Count requests by criteria
     *
     * @remarks
     * Count requests logged in the journal matching the specified criteria
     */
    postAdminRequestsCount(req: operations.PostAdminRequestsCountRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsCountResponse>;
    /**
     * Find requests by criteria
     *
     * @remarks
     * Retrieve details of requests logged in the journal matching the specified criteria
     */
    postAdminRequestsFind(req: operations.PostAdminRequestsFindRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsFindResponse>;
    /**
     * Remove requests by criteria
     *
     * @remarks
     * Removed requests logged in the journal matching the specified criteria
     */
    postAdminRequestsRemove(req: operations.PostAdminRequestsRemoveRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsRemoveResponse>;
    /**
     * Delete requests mappings matching metadata
     */
    postAdminRequestsRemoveByMetadata(req: any, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsRemoveByMetadataResponse>;
    /**
     * Empty the request journal
     */
    postAdminRequestsReset(config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsResetResponse>;
}
