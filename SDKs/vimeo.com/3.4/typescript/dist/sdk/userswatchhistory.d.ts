import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersWatchHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a specific video from a user's watch history
     */
    deleteFromWatchHistory(req: operations.DeleteFromWatchHistoryRequest, security: operations.DeleteFromWatchHistorySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFromWatchHistoryResponse>;
    /**
     * Delete a user's watch history
     */
    deleteWatchHistory(config?: AxiosRequestConfig): Promise<operations.DeleteWatchHistoryResponse>;
    /**
     * Get all the videos that a user has watched
     */
    getWatchHistory(req: operations.GetWatchHistoryRequest, security: operations.GetWatchHistorySecurity, config?: AxiosRequestConfig): Promise<operations.GetWatchHistoryResponse>;
}
