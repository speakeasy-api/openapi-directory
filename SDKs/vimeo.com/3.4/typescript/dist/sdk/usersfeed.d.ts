import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersFeed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all videos in a user's feed
     */
    getFeed(req: operations.GetFeedRequest, security: operations.GetFeedSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeedResponse>;
    /**
     * Get all videos in a user's feed
     */
    getFeedAlt1(req: operations.GetFeedAlt1Request, security: operations.GetFeedAlt1Security, config?: AxiosRequestConfig): Promise<operations.GetFeedAlt1Response>;
}
