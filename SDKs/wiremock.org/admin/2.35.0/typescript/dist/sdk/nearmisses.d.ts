import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Near misses allow querying of received requests or request patterns according to similarity
 *
 * @see {@link http://wiremock.org/docs/verifying/#near-misses} - User documentation
 */
export declare class NearMisses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve near-misses for all unmatched requests
     */
    getAdminRequestsUnmatchedNearMisses(config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsUnmatchedNearMissesResponse>;
    /**
     * Find near misses matching specific request
     *
     * @remarks
     * Find at most 3 near misses for closest stub mappings to the specified request
     */
    postAdminNearMissesRequest(req: operations.PostAdminNearMissesRequestRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminNearMissesRequestResponse>;
    /**
     * Find near misses matching request pattern
     *
     * @remarks
     * Find at most 3 near misses for closest logged requests to the specified request pattern
     */
    postAdminNearMissesRequestPattern(req: operations.PostAdminNearMissesRequestPatternRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminNearMissesRequestPatternResponse>;
}
