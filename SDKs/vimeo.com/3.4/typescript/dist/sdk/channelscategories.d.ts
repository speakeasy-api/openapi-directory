import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a list of categories to a channel
     *
     * @remarks
     * This method adds multiple categories to the specified channel.
     */
    addChannelCategories(req: operations.AddChannelCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelCategoriesResponse>;
    /**
     * Categorize a channel
     *
     * @remarks
     * This method adds a channel to a category.
     */
    categorizeChannel(req: operations.CategorizeChannelRequest, security: operations.CategorizeChannelSecurity, config?: AxiosRequestConfig): Promise<operations.CategorizeChannelResponse>;
    /**
     * Remove a category from a channel
     *
     * @remarks
     * This method removes a single category from the specified channel.
     */
    deleteChannelCategory(req: operations.DeleteChannelCategoryRequest, security: operations.DeleteChannelCategorySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteChannelCategoryResponse>;
    /**
     * Get all the categories in a channel
     *
     * @remarks
     * This method gets all the categories in the specified channel.
     */
    getChannelCategories(req: operations.GetChannelCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCategoriesResponse>;
}
