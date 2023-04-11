import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmbedPresetsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an embed preset to a video
     */
    addVideoEmbedPreset(req: operations.AddVideoEmbedPresetRequest, security: operations.AddVideoEmbedPresetSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoEmbedPresetResponse>;
    /**
     * Add a new custom logo to a video
     */
    createVideoCustomLogo(req: operations.CreateVideoCustomLogoRequest, security: operations.CreateVideoCustomLogoSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVideoCustomLogoResponse>;
    /**
     * Remove an embed preset from a video
     */
    deleteVideoEmbedPreset(req: operations.DeleteVideoEmbedPresetRequest, security: operations.DeleteVideoEmbedPresetSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoEmbedPresetResponse>;
    /**
     * Get all the videos that have been added to an embed preset
     */
    getEmbedPresetVideos(req: operations.GetEmbedPresetVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetVideosResponse>;
    /**
     * Get all the videos that have been added to an embed preset
     */
    getEmbedPresetVideosAlt1(req: operations.GetEmbedPresetVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetVideosAlt1Response>;
    /**
     * Get a custom video logo
     */
    getVideoCustomLogo(req: operations.GetVideoCustomLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCustomLogoResponse>;
    /**
     * Check if an embed preset has been added to a video
     */
    getVideoEmbedPreset(req: operations.GetVideoEmbedPresetRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoEmbedPresetResponse>;
}
