import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandPromotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a promotion to an On Demand page
     */
    createVodPromotion(req: operations.CreateVodPromotionRequest, security: operations.CreateVodPromotionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVodPromotionResponse>;
    /**
     * Remove a promotion from an On Demand page
     */
    deleteVodPromotion(req: operations.DeleteVodPromotionRequest, security: operations.DeleteVodPromotionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVodPromotionResponse>;
    /**
     * Get a specific promotion on an On Demand page
     */
    getVodPromotion(req: operations.GetVodPromotionRequest, security: operations.GetVodPromotionSecurity, config?: AxiosRequestConfig): Promise<operations.GetVodPromotionResponse>;
    /**
     * Get all the codes of a promotion on an On Demand page
     */
    getVodPromotionCodes(req: operations.GetVodPromotionCodesRequest, security: operations.GetVodPromotionCodesSecurity, config?: AxiosRequestConfig): Promise<operations.GetVodPromotionCodesResponse>;
    /**
     * Get all the promotions on an On Demand page
     */
    getVodPromotions(req: operations.GetVodPromotionsRequest, security: operations.GetVodPromotionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetVodPromotionsResponse>;
}
