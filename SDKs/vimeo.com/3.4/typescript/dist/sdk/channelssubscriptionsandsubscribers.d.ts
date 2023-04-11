import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsSubscriptionsAndSubscribers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if a user follows a channel
     */
    checkIfUserSubscribedToChannel(req: operations.CheckIfUserSubscribedToChannelRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToChannelResponse>;
    /**
     * Check if a user follows a channel
     */
    checkIfUserSubscribedToChannelAlt1(req: operations.CheckIfUserSubscribedToChannelAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToChannelAlt1Response>;
    /**
     * Get all the followers of a channel
     */
    getChannelSubscribers(req: operations.GetChannelSubscribersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelSubscribersResponse>;
    /**
     * Subscribe a user to a specific channel
     */
    subscribeToChannel(req: operations.SubscribeToChannelRequest, security: operations.SubscribeToChannelSecurity, config?: AxiosRequestConfig): Promise<operations.SubscribeToChannelResponse>;
    /**
     * Subscribe a user to a specific channel
     */
    subscribeToChannelAlt1(req: operations.SubscribeToChannelAlt1Request, security: operations.SubscribeToChannelAlt1Security, config?: AxiosRequestConfig): Promise<operations.SubscribeToChannelAlt1Response>;
    /**
     * Unsubscribe a user from a specific channel
     */
    unsubscribeFromChannel(req: operations.UnsubscribeFromChannelRequest, security: operations.UnsubscribeFromChannelSecurity, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromChannelResponse>;
    /**
     * Unsubscribe a user from a specific channel
     */
    unsubscribeFromChannelAlt1(req: operations.UnsubscribeFromChannelAlt1Request, security: operations.UnsubscribeFromChannelAlt1Security, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromChannelAlt1Response>;
}
