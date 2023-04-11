import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a pool to the specified account.
     */
    poolAdd(req: operations.PoolAddRequest, config?: AxiosRequestConfig): Promise<operations.PoolAddResponse>;
    /**
     * Deletes a pool from the specified account.
     */
    poolDelete(req: operations.PoolDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PoolDeleteResponse>;
    /**
     * Disables automatic scaling for a pool.
     */
    poolDisableAutoScale(req: operations.PoolDisableAutoScaleRequest, config?: AxiosRequestConfig): Promise<operations.PoolDisableAutoScaleResponse>;
    /**
     * Enables automatic scaling for a pool.
     */
    poolEnableAutoScale(req: operations.PoolEnableAutoScaleRequest, config?: AxiosRequestConfig): Promise<operations.PoolEnableAutoScaleResponse>;
    /**
     * Gets the result of evaluating an automatic scaling formula on the pool.
     */
    poolEvaluateAutoScale(req: operations.PoolEvaluateAutoScaleRequest, config?: AxiosRequestConfig): Promise<operations.PoolEvaluateAutoScaleResponse>;
    /**
     * Gets basic properties of a pool.
     */
    poolExists(req: operations.PoolExistsRequest, config?: AxiosRequestConfig): Promise<operations.PoolExistsResponse>;
    /**
     * Gets information about the specified pool.
     */
    poolGet(req: operations.PoolGetRequest, config?: AxiosRequestConfig): Promise<operations.PoolGetResponse>;
    /**
     * Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
     */
    poolGetAllPoolsLifetimeStatistics(req: operations.PoolGetAllPoolsLifetimeStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.PoolGetAllPoolsLifetimeStatisticsResponse>;
    /**
     * Lists all of the pools in the specified account.
     */
    poolList(req: operations.PoolListRequest, config?: AxiosRequestConfig): Promise<operations.PoolListResponse>;
    /**
     * Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
     */
    poolListPoolUsageMetrics(req: operations.PoolListPoolUsageMetricsRequest, config?: AxiosRequestConfig): Promise<operations.PoolListPoolUsageMetricsResponse>;
    /**
     * Updates the properties of a pool.
     */
    poolPatch(req: operations.PoolPatchRequest, config?: AxiosRequestConfig): Promise<operations.PoolPatchResponse>;
    /**
     * Changes the number of compute nodes that are assigned to a pool.
     */
    poolResize(req: operations.PoolResizeRequest, config?: AxiosRequestConfig): Promise<operations.PoolResizeResponse>;
    /**
     * Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
     */
    poolStopResize(req: operations.PoolStopResizeRequest, config?: AxiosRequestConfig): Promise<operations.PoolStopResizeResponse>;
    /**
     * Updates the properties of a pool.
     */
    poolUpdateProperties(req: operations.PoolUpdatePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PoolUpdatePropertiesResponse>;
    /**
     * Upgrades the operating system of the specified pool.
     */
    poolUpgradeOS(req: operations.PoolUpgradeOSRequest, config?: AxiosRequestConfig): Promise<operations.PoolUpgradeOSResponse>;
}
