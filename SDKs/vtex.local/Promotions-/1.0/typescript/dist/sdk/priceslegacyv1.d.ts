import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PricesLegacyV1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Price by SKU Id
     *
     * @remarks
     * Delete all prices from an SKU.
     * > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
     *
     * > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
     */
    deletebyskuId(req: operations.DeletebyskuIdRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeletebyskuIdResponse>;
    /**
     * Get all paged prices
     *
     * @remarks
     * Get all paged prices.
     * > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
     *
     * > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
     */
    getallpaged(req: operations.GetallpagedRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetallpagedResponse>;
    /**
     * Get Price by context
     *
     * @remarks
     * Get price by context.
     * > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
     *
     * > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
     */
    pricebycontext(req: operations.PricebycontextRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PricebycontextResponse>;
    /**
     * Get Price by SKU ID
     *
     * @remarks
     * Price by SKU ID
     * > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)
     */
    pricebyskuId(req: operations.PricebyskuIdRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PricebyskuIdResponse>;
    /**
     * Get Price by SKU ID and Trade Policy
     *
     * @remarks
     * Retrieve price by SKU ID and Trade Policy.
     * > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
     *
     * > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
     */
    pricebyskuIdandtradePolicy(req: operations.PricebyskuIdandtradePolicyRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PricebyskuIdandtradePolicyResponse>;
    /**
     * Save Price
     *
     * @remarks
     * Save price.
     * > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
     *
     * > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
     */
    saveprice(req: operations.SavepriceRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.SavepriceResponse>;
}
