import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandPurchasesAndRentals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if a user has made a purchase or rental from an On Demand page
     */
    checkIfVodWasPurchased(req: operations.CheckIfVodWasPurchasedRequest, security: operations.CheckIfVodWasPurchasedSecurity, config?: AxiosRequestConfig): Promise<operations.CheckIfVodWasPurchasedResponse>;
    /**
     * Check if a user has made a purchase or rental from an On Demand page
     */
    checkIfVodWasPurchasedAlt1(req: operations.CheckIfVodWasPurchasedAlt1Request, security: operations.CheckIfVodWasPurchasedAlt1Security, config?: AxiosRequestConfig): Promise<operations.CheckIfVodWasPurchasedAlt1Response>;
    /**
     * Get all the On Demand purchases and rentals that a user has made
     */
    getVodPurchases(req: operations.GetVodPurchasesRequest, security: operations.GetVodPurchasesSecurity, config?: AxiosRequestConfig): Promise<operations.GetVodPurchasesResponse>;
}
