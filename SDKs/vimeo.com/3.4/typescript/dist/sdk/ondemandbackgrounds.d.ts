import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandBackgrounds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a background to an On Demand page
     */
    createVodBackground(req: operations.CreateVodBackgroundRequest, security: operations.CreateVodBackgroundSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVodBackgroundResponse>;
    /**
     * Remove a background from an On Demand page
     */
    deleteVodBackground(req: operations.DeleteVodBackgroundRequest, security: operations.DeleteVodBackgroundSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVodBackgroundResponse>;
    /**
     * Edit a background of an On Demand page
     */
    editVodBackground(req: operations.EditVodBackgroundRequest, security: operations.EditVodBackgroundSecurity, config?: AxiosRequestConfig): Promise<operations.EditVodBackgroundResponse>;
    /**
     * Get a specific background of an On Demand page
     */
    getVodBackground(req: operations.GetVodBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.GetVodBackgroundResponse>;
    /**
     * Get all the backgrounds of an On Demand page
     */
    getVodBackgrounds(req: operations.GetVodBackgroundsRequest, config?: AxiosRequestConfig): Promise<operations.GetVodBackgroundsResponse>;
}
