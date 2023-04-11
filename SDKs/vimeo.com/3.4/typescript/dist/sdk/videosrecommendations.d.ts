import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosRecommendations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all the related videos of a video
     */
    getRelatedVideos(req: operations.GetRelatedVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetRelatedVideosResponse>;
}
