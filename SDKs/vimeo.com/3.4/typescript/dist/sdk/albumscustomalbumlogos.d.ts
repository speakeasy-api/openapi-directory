import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AlbumsCustomAlbumLogos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a custom album logo
     */
    createAlbumLogo(req: operations.CreateAlbumLogoRequest, security: operations.CreateAlbumLogoSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAlbumLogoResponse>;
    /**
     * Remove a custom album logo
     *
     * @remarks
     * This method removes a custom logo from the specified album.
     */
    deleteAlbumLogo(req: operations.DeleteAlbumLogoRequest, security: operations.DeleteAlbumLogoSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumLogoResponse>;
    /**
     * Get a specific custom album logo
     */
    getAlbumLogo(req: operations.GetAlbumLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumLogoResponse>;
    /**
     * Get all the custom logos of an album
     */
    getAlbumLogos(req: operations.GetAlbumLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumLogosResponse>;
    /**
     * Replace a custom album logo
     */
    replaceAlbumLogo(req: operations.ReplaceAlbumLogoRequest, security: operations.ReplaceAlbumLogoSecurity, config?: AxiosRequestConfig): Promise<operations.ReplaceAlbumLogoResponse>;
}
