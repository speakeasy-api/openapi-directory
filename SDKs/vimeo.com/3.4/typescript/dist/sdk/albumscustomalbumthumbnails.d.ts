import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AlbumsCustomAlbumThumbnails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a custom uploaded thumbnail
     */
    createAlbumCustomThumb(req: operations.CreateAlbumCustomThumbRequest, security: operations.CreateAlbumCustomThumbSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAlbumCustomThumbResponse>;
    /**
     * Remove a custom uploaded album thumbnail
     *
     * @remarks
     * This method removes a custom uploaded thumbnail from the specified album.
     */
    deleteAlbumCustomThumbnail(req: operations.DeleteAlbumCustomThumbnailRequest, security: operations.DeleteAlbumCustomThumbnailSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumCustomThumbnailResponse>;
    /**
     * Get a specific custom uploaded album thumbnail
     */
    getAlbumCustomThumbnail(req: operations.GetAlbumCustomThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumCustomThumbnailResponse>;
    /**
     * Get all the custom upload thumbnails of an album
     */
    getAlbumCustomThumbs(req: operations.GetAlbumCustomThumbsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumCustomThumbsResponse>;
    /**
     * Replace a custom uploaded album thumbnail
     */
    replaceAlbumCustomThumb(req: operations.ReplaceAlbumCustomThumbRequest, security: operations.ReplaceAlbumCustomThumbSecurity, config?: AxiosRequestConfig): Promise<operations.ReplaceAlbumCustomThumbResponse>;
}
