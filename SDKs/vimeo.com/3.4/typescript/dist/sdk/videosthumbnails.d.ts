import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosThumbnails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a video thumbnail
     */
    createVideoThumbnail(req: operations.CreateVideoThumbnailRequest, security: operations.CreateVideoThumbnailSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVideoThumbnailResponse>;
    /**
     * Add a video thumbnail
     */
    createVideoThumbnailAlt1(req: operations.CreateVideoThumbnailAlt1Request, security: operations.CreateVideoThumbnailAlt1Security, config?: AxiosRequestConfig): Promise<operations.CreateVideoThumbnailAlt1Response>;
    /**
     * Delete a video thumbnail
     */
    deleteVideoThumbnail(req: operations.DeleteVideoThumbnailRequest, security: operations.DeleteVideoThumbnailSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoThumbnailResponse>;
    /**
     * Edit a video thumbnail
     */
    editVideoThumbnail(req: operations.EditVideoThumbnailRequest, security: operations.EditVideoThumbnailSecurity, config?: AxiosRequestConfig): Promise<operations.EditVideoThumbnailResponse>;
    /**
     * Get a video thumbnail
     */
    getVideoThumbnail(req: operations.GetVideoThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoThumbnailResponse>;
    /**
     * Get all the thumbnails of a video
     */
    getVideoThumbnails(req: operations.GetVideoThumbnailsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoThumbnailsResponse>;
    /**
     * Get all the thumbnails of a video
     */
    getVideoThumbnailsAlt1(req: operations.GetVideoThumbnailsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoThumbnailsAlt1Response>;
}
