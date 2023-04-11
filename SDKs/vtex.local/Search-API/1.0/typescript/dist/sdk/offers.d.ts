import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Offers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search Product offers
     *
     * @remarks
     * Retrieves existing offers of a specific product.
     */
    getApiCatalogSystemPubProductsOffersProductId(req: operations.GetApiCatalogSystemPubProductsOffersProductIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCatalogSystemPubProductsOffersProductIdResponse>;
    /**
     * Search SKU offers
     *
     * @remarks
     * Retrieves existing offers of a specific SKU.
     */
    getApiCatalogSystemPubProductsOffersProductIdSkuSkuId(req: operations.GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdResponse>;
}
