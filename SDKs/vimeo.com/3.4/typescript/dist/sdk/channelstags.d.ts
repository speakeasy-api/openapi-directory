import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific tag to a channel
     *
     * @remarks
     * This method adds a single tag to the specified channel.
     */
    addChannelTag(req: operations.AddChannelTagRequest, security: operations.AddChannelTagSecurity, config?: AxiosRequestConfig): Promise<operations.AddChannelTagResponse>;
    /**
     * Add a list of tags to a channel
     *
     * @remarks
     * This method adds multiple tags to the specified channel.
     */
    addTagsToChannel(req: operations.AddTagsToChannelRequest, security: operations.AddTagsToChannelSecurity, config?: AxiosRequestConfig): Promise<operations.AddTagsToChannelResponse>;
    /**
     * Check if a tag has been added to a channel
     *
     * @remarks
     * This method determines whether a specific tag has been added to the channel in question.
     */
    checkIfChannelHasTag(req: operations.CheckIfChannelHasTagRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfChannelHasTagResponse>;
    /**
     * Remove a tag from a channel
     *
     * @remarks
     * This method removes a single tag from the specified channel.
     */
    deleteTagFromChannel(req: operations.DeleteTagFromChannelRequest, security: operations.DeleteTagFromChannelSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTagFromChannelResponse>;
    /**
     * Get all the tags that have been added to a channel
     *
     * @remarks
     * This method gets all the tags that have been added to the specified channel.
     */
    getChannelTags(req: operations.GetChannelTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelTagsResponse>;
}
