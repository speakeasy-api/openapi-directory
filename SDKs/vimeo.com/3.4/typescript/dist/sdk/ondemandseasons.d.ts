import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandSeasons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific season on an On Demand page
     */
    getVodSeason(req: operations.GetVodSeasonRequest, config?: AxiosRequestConfig): Promise<operations.GetVodSeasonResponse>;
    /**
     * Get all the videos in a season on an On Demand page
     */
    getVodSeasonVideos(req: operations.GetVodSeasonVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetVodSeasonVideosResponse>;
    /**
     * Get all the seasons on an On Demand page
     */
    getVodSeasons(req: operations.GetVodSeasonsRequest, config?: AxiosRequestConfig): Promise<operations.GetVodSeasonsResponse>;
}
