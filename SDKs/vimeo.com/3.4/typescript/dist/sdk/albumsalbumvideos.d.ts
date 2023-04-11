import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AlbumsAlbumVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific video to an album
     */
    addVideoToAlbum(req: operations.AddVideoToAlbumRequest, security: operations.AddVideoToAlbumSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoToAlbumResponse>;
    /**
     * Add a specific video to an album
     */
    addVideoToAlbumAlt1(req: operations.AddVideoToAlbumAlt1Request, security: operations.AddVideoToAlbumAlt1Security, config?: AxiosRequestConfig): Promise<operations.AddVideoToAlbumAlt1Response>;
    /**
     * Get a specific video in an album
     *
     * @remarks
     * This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
     */
    getAlbumVideo(req: operations.GetAlbumVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideoResponse>;
    /**
     * Get a specific video in an album
     *
     * @remarks
     * This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
     */
    getAlbumVideoAlt1(req: operations.GetAlbumVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideoAlt1Response>;
    /**
     * Get all the videos in an album
     */
    getAlbumVideos(req: operations.GetAlbumVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideosResponse>;
    /**
     * Get all the videos in an album
     */
    getAlbumVideosAlt1(req: operations.GetAlbumVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideosAlt1Response>;
    /**
     * Remove a video from an album
     */
    removeVideoFromAlbum(req: operations.RemoveVideoFromAlbumRequest, security: operations.RemoveVideoFromAlbumSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromAlbumResponse>;
    /**
     * Remove a video from an album
     */
    removeVideoFromAlbumAlt1(req: operations.RemoveVideoFromAlbumAlt1Request, security: operations.RemoveVideoFromAlbumAlt1Security, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromAlbumAlt1Response>;
    /**
     * Replace all the videos in an album
     *
     * @remarks
     * This method replaces all the existing videos in an album with one or more videos.
     */
    replaceVideosInAlbum(req: operations.ReplaceVideosInAlbumRequest, security: operations.ReplaceVideosInAlbumSecurity, config?: AxiosRequestConfig): Promise<operations.ReplaceVideosInAlbumResponse>;
    /**
     * Replace all the videos in an album
     *
     * @remarks
     * This method replaces all the existing videos in an album with one or more videos.
     */
    replaceVideosInAlbumAlt1(req: operations.ReplaceVideosInAlbumAlt1Request, security: operations.ReplaceVideosInAlbumAlt1Security, config?: AxiosRequestConfig): Promise<operations.ReplaceVideosInAlbumAlt1Response>;
    /**
     * Set a video as the album thumbnail
     */
    setVideoAsAlbumThumbnail(req: operations.SetVideoAsAlbumThumbnailRequest, security: operations.SetVideoAsAlbumThumbnailSecurity, config?: AxiosRequestConfig): Promise<operations.SetVideoAsAlbumThumbnailResponse>;
    /**
     * Set a video as the album thumbnail
     */
    setVideoAsAlbumThumbnailAlt1(req: operations.SetVideoAsAlbumThumbnailAlt1Request, security: operations.SetVideoAsAlbumThumbnailAlt1Security, config?: AxiosRequestConfig): Promise<operations.SetVideoAsAlbumThumbnailAlt1Response>;
}
