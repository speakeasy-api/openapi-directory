import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific tag to a video
     */
    addVideoTag(req: operations.AddVideoTagRequest, security: operations.AddVideoTagSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoTagResponse>;
    /**
     * Add a list of tags to a video
     */
    addVideoTags(req: operations.AddVideoTagsRequest, security: operations.AddVideoTagsSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoTagsResponse>;
    /**
     * Check if a tag has been added to a video
     */
    checkVideoForTag(req: operations.CheckVideoForTagRequest, config?: AxiosRequestConfig): Promise<operations.CheckVideoForTagResponse>;
    /**
     * Remove a tag from a video
     */
    deleteVideoTag(req: operations.DeleteVideoTagRequest, security: operations.DeleteVideoTagSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoTagResponse>;
    /**
     * Get all the tags of a video
     */
    getVideoTags(req: operations.GetVideoTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoTagsResponse>;
    /**
     * Get all the videos with a specific tag
     */
    getVideosWithTag(req: operations.GetVideosWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosWithTagResponse>;
}
