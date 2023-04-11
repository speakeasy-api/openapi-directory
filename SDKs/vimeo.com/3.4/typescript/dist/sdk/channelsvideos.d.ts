import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific video to a channel
     */
    addVideoToChannel(req: operations.AddVideoToChannelRequest, security: operations.AddVideoToChannelSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoToChannelResponse>;
    /**
     * Add a list of videos to a channel
     */
    addVideosToChannel(req: operations.AddVideosToChannelRequest, security: operations.AddVideosToChannelSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideosToChannelResponse>;
    /**
     * Remove a specific video from a channel
     */
    deleteVideoFromChannel(req: operations.DeleteVideoFromChannelRequest, security: operations.DeleteVideoFromChannelSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromChannelResponse>;
    /**
     * Get all the channels to which a user can add or remove a specific video
     */
    getAvailableVideoChannels(req: operations.GetAvailableVideoChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableVideoChannelsResponse>;
    /**
     * Get a specific video in a channel
     *
     * @remarks
     * This method returns a specific video in a channel. You can use it to determine whether the video is in the channel.
     */
    getChannelVideo(req: operations.GetChannelVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelVideoResponse>;
    /**
     * Get all the videos in a channel
     */
    getChannelVideos(req: operations.GetChannelVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelVideosResponse>;
    /**
     * Remove a list of videos from a channel
     */
    removeVideosFromChannel(req: operations.RemoveVideosFromChannelRequest, security: operations.RemoveVideosFromChannelSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveVideosFromChannelResponse>;
}
