import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a channel
     *
     * @remarks
     * This method creates a new channel.
     */
    createChannel(req: operations.CreateChannelRequestBody, security: operations.CreateChannelSecurity, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    /**
     * Delete a channel
     */
    deleteChannel(req: operations.DeleteChannelRequest, security: operations.DeleteChannelSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    /**
     * Edit a channel
     *
     * @remarks
     * This method edits the specified channel.
     */
    editChannel(req: operations.EditChannelRequest, security: operations.EditChannelSecurity, config?: AxiosRequestConfig): Promise<operations.EditChannelResponse>;
    /**
     * Get a specific channel
     */
    getChannel(req: operations.GetChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelResponse>;
    /**
     * Get all the channels to which a user subscribes
     */
    getChannelSubscriptions(req: operations.GetChannelSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelSubscriptionsResponse>;
    /**
     * Get all the channels to which a user subscribes
     */
    getChannelSubscriptionsAlt1(req: operations.GetChannelSubscriptionsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetChannelSubscriptionsAlt1Response>;
    /**
     * Get all channels
     */
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
}
