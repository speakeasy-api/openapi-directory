import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandRegions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific region to an On Demand page
     */
    addVodRegion(req: operations.AddVodRegionRequest, security: operations.AddVodRegionSecurity, config?: AxiosRequestConfig): Promise<operations.AddVodRegionResponse>;
    /**
     * Remove a specific region from an On Demand page
     */
    deleteVodRegion(req: operations.DeleteVodRegionRequest, security: operations.DeleteVodRegionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVodRegionResponse>;
    /**
     * Remove a list of regions from an On Demand page
     */
    deleteVodRegions(req: operations.DeleteVodRegionsRequest, security: operations.DeleteVodRegionsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVodRegionsResponse>;
    /**
     * Get a specific On Demand region
     */
    getRegion(req: operations.GetRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionResponse>;
    /**
     * Get all the On Demand regions
     */
    getRegions(config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * Get a specific region of an On Demand page
     *
     * @remarks
     * Checks whether an On Demand page belongs to a region.
     */
    getVodRegion(req: operations.GetVodRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetVodRegionResponse>;
    /**
     * Get all the regions of an On Demand page
     */
    getVodRegions(req: operations.GetVodRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVodRegionsResponse>;
    /**
     * Add a list of regions to an On Demand page
     */
    setVodRegions(req: operations.SetVodRegionsRequest, security: operations.SetVodRegionsSecurity, config?: AxiosRequestConfig): Promise<operations.SetVodRegionsResponse>;
}
