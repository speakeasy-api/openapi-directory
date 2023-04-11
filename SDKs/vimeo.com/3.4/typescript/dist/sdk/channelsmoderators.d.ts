import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsModerators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific channel moderator
     */
    addChannelModerator(req: operations.AddChannelModeratorRequest, security: operations.AddChannelModeratorSecurity, config?: AxiosRequestConfig): Promise<operations.AddChannelModeratorResponse>;
    /**
     * Add a list of channel moderators
     */
    addChannelModerators(req: operations.AddChannelModeratorsRequest, security: operations.AddChannelModeratorsSecurity, config?: AxiosRequestConfig): Promise<operations.AddChannelModeratorsResponse>;
    /**
     * Get a specific channel moderator
     */
    getChannelModerator(req: operations.GetChannelModeratorRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelModeratorResponse>;
    /**
     * Get all the moderators in a channel
     */
    getChannelModerators(req: operations.GetChannelModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelModeratorsResponse>;
    /**
     * Remove a specific channel moderator
     */
    removeChannelModerator(req: operations.RemoveChannelModeratorRequest, security: operations.RemoveChannelModeratorSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveChannelModeratorResponse>;
    /**
     * Remove a list of channel moderators
     */
    removeChannelModerators(req: operations.RemoveChannelModeratorsRequest, security: operations.RemoveChannelModeratorsSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveChannelModeratorsResponse>;
    /**
     * Replace the moderators of a channel
     */
    replaceChannelModerators(req: operations.ReplaceChannelModeratorsRequest, security: operations.ReplaceChannelModeratorsSecurity, config?: AxiosRequestConfig): Promise<operations.ReplaceChannelModeratorsResponse>;
}
