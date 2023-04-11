import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GroupsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a video to a group
     */
    addVideoToGroup(req: operations.AddVideoToGroupRequest, security: operations.AddVideoToGroupSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoToGroupResponse>;
    /**
     * Remove a video from a group
     */
    deleteVideoFromGroup(req: operations.DeleteVideoFromGroupRequest, security: operations.DeleteVideoFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromGroupResponse>;
    /**
     * Get a specific video in a group
     *
     * @remarks
     * Check if a group has a video.
     */
    getGroupVideo(req: operations.GetGroupVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupVideoResponse>;
    /**
     * Get all the videos in a group
     */
    getGroupVideos(req: operations.GetGroupVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupVideosResponse>;
}
