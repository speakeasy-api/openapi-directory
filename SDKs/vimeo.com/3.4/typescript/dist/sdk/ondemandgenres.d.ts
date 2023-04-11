import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandGenres {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a genre to an On Demand page
     */
    addVodGenre(req: operations.AddVodGenreRequest, security: operations.AddVodGenreSecurity, config?: AxiosRequestConfig): Promise<operations.AddVodGenreResponse>;
    /**
     * Remove a genre from an On Demand page
     */
    deleteVodGenre(req: operations.DeleteVodGenreRequest, security: operations.DeleteVodGenreSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVodGenreResponse>;
    /**
     * Get a specific On Demand page in a genre
     *
     * @remarks
     * Check whether a genre contains an On Demand page.
     */
    getGenreVod(req: operations.GetGenreVodRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreVodResponse>;
    /**
     * Get all the On Demand pages in a genre
     */
    getGenreVods(req: operations.GetGenreVodsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreVodsResponse>;
    /**
     * Get a specific On Demand genre
     */
    getVodGenre(req: operations.GetVodGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetVodGenreResponse>;
    /**
     * Check whether an On Demand page belongs to a genre
     */
    getVodGenreByOndemandId(req: operations.GetVodGenreByOndemandIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVodGenreByOndemandIdResponse>;
    /**
     * Get all On Demand genres
     */
    getVodGenres(config?: AxiosRequestConfig): Promise<operations.GetVodGenresResponse>;
    /**
     * Get all the genres of an On Demand page
     */
    getVodGenresByOndemandId(req: operations.GetVodGenresByOndemandIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVodGenresByOndemandIdResponse>;
}
