import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CategoriesVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check for a video in a category
     */
    checkCategoryForVideo(req: operations.CheckCategoryForVideoRequest, config?: AxiosRequestConfig): Promise<operations.CheckCategoryForVideoResponse>;
    /**
     * Get all the videos in a category
     */
    getCategoryVideos(req: operations.GetCategoryVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryVideosResponse>;
    /**
     * Get all the categories to which a video belongs
     */
    getVideoCategories(req: operations.GetVideoCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCategoriesResponse>;
    /**
     * Suggest categories for a video
     *
     * @remarks
     * With this method, you can suggest up to two categories and one subcategory for a video. Vimeo makes the final determination about whether the video
     * belongs in these categories.
     */
    suggestVideoCategory(req: operations.SuggestVideoCategoryRequest, security: operations.SuggestVideoCategorySecurity, config?: AxiosRequestConfig): Promise<operations.SuggestVideoCategoryResponse>;
}
