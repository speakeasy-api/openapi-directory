import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandPosters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a poster to an On Demand page
     */
    addVodPoster(req: operations.AddVodPosterRequest, security: operations.AddVodPosterSecurity, config?: AxiosRequestConfig): Promise<operations.AddVodPosterResponse>;
    /**
     * Edit a poster of an On Demand page
     */
    editVodPoster(req: operations.EditVodPosterRequest, security: operations.EditVodPosterSecurity, config?: AxiosRequestConfig): Promise<operations.EditVodPosterResponse>;
    /**
     * Get a specific poster of an On Demand page
     */
    getVodPoster(req: operations.GetVodPosterRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPosterResponse>;
    /**
     * Get all the posters of an On Demand page
     */
    getVodPosters(req: operations.GetVodPostersRequest, config?: AxiosRequestConfig): Promise<operations.GetVodPostersResponse>;
}
