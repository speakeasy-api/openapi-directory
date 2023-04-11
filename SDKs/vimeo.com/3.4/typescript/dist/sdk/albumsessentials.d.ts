import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AlbumsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an album
     */
    createAlbum(req: operations.CreateAlbumRequest, security: operations.CreateAlbumSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAlbumResponse>;
    /**
     * Create an album
     */
    createAlbumAlt1(req: operations.CreateAlbumAlt1RequestBody, security: operations.CreateAlbumAlt1Security, config?: AxiosRequestConfig): Promise<operations.CreateAlbumAlt1Response>;
    /**
     * Delete an album
     */
    deleteAlbum(req: operations.DeleteAlbumRequest, security: operations.DeleteAlbumSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumResponse>;
    /**
     * Delete an album
     */
    deleteAlbumAlt1(req: operations.DeleteAlbumAlt1Request, security: operations.DeleteAlbumAlt1Security, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumAlt1Response>;
    /**
     * Edit an album
     */
    editAlbum(req: operations.EditAlbumRequest, security: operations.EditAlbumSecurity, config?: AxiosRequestConfig): Promise<operations.EditAlbumResponse>;
    /**
     * Edit an album
     */
    editAlbumAlt1(req: operations.EditAlbumAlt1Request, security: operations.EditAlbumAlt1Security, config?: AxiosRequestConfig): Promise<operations.EditAlbumAlt1Response>;
    /**
     * Get a specific album
     */
    getAlbum(req: operations.GetAlbumRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumResponse>;
    /**
     * Get a specific album
     */
    getAlbumAlt1(req: operations.GetAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumAlt1Response>;
    /**
     * Get all the albums that belong to a user
     */
    getAlbums(req: operations.GetAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumsResponse>;
    /**
     * Get all the albums that belong to a user
     */
    getAlbumsAlt1(req: operations.GetAlbumsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumsAlt1Response>;
}
