import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WatchLaterQueueEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a video to a user's Watch Later queue
     */
    addVideoToWatchLater(req: operations.AddVideoToWatchLaterRequest, security: operations.AddVideoToWatchLaterSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoToWatchLaterResponse>;
    /**
     * Add a video to a user's Watch Later queue
     */
    addVideoToWatchLaterAlt1(req: operations.AddVideoToWatchLaterAlt1Request, security: operations.AddVideoToWatchLaterAlt1Security, config?: AxiosRequestConfig): Promise<operations.AddVideoToWatchLaterAlt1Response>;
    /**
     * Check if a user has added a specific video to their Watch Later queue
     */
    checkWatchLaterQueue(req: operations.CheckWatchLaterQueueRequest, security: operations.CheckWatchLaterQueueSecurity, config?: AxiosRequestConfig): Promise<operations.CheckWatchLaterQueueResponse>;
    /**
     * Check if a user has added a specific video to their Watch Later queue
     */
    checkWatchLaterQueueAlt1(req: operations.CheckWatchLaterQueueAlt1Request, security: operations.CheckWatchLaterQueueAlt1Security, config?: AxiosRequestConfig): Promise<operations.CheckWatchLaterQueueAlt1Response>;
    /**
     * Remove a video from a user's Watch Later queue
     */
    deleteVideoFromWatchLater(req: operations.DeleteVideoFromWatchLaterRequest, security: operations.DeleteVideoFromWatchLaterSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromWatchLaterResponse>;
    /**
     * Remove a video from a user's Watch Later queue
     */
    deleteVideoFromWatchLaterAlt1(req: operations.DeleteVideoFromWatchLaterAlt1Request, security: operations.DeleteVideoFromWatchLaterAlt1Security, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromWatchLaterAlt1Response>;
    /**
     * Get all the videos in a user's Watch Later queue
     */
    getWatchLaterQueue(req: operations.GetWatchLaterQueueRequest, security: operations.GetWatchLaterQueueSecurity, config?: AxiosRequestConfig): Promise<operations.GetWatchLaterQueueResponse>;
    /**
     * Get all the videos in a user's Watch Later queue
     */
    getWatchLaterQueueAlt1(req: operations.GetWatchLaterQueueAlt1Request, security: operations.GetWatchLaterQueueAlt1Security, config?: AxiosRequestConfig): Promise<operations.GetWatchLaterQueueAlt1Response>;
}
