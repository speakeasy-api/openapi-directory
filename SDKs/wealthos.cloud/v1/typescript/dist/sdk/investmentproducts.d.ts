import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Investment products  (e.g. mutual funds, ETFs, stocks etc.) are bought and sold by the investor (or by the wealth manager on the investor’s behalf).
 *
 * @remarks
 *
 * The Investment Products endpoint returns all the investment products that are offered by the wealth manager, as well as the current market price. The wealth manager must specify the universe of supported investment products via the WealthOS Admin UI.
 */
export declare class InvestmentProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Current Prices of all Investment Products
     *
     * @remarks
     * Returns current prices of all the investment products configured for this tenancy
     */
    getConfiguredInvestmentProductPrices(req: operations.GetConfiguredInvestmentProductPricesRequest, security: operations.GetConfiguredInvestmentProductPricesSecurity, config?: AxiosRequestConfig): Promise<operations.GetConfiguredInvestmentProductPricesResponse>;
    /**
     * Get Configured Investment Products
     *
     * @remarks
     * Returns all the investment products configured for this tenancy. Request can be filtered by status to return all `active` or `inactive` investment products
     */
    getConfiguredInvestmentProducts(req: operations.GetConfiguredInvestmentProductsRequest, security: operations.GetConfiguredInvestmentProductsSecurity, config?: AxiosRequestConfig): Promise<operations.GetConfiguredInvestmentProductsResponse>;
    /**
     * Get details of a given Investment Product
     *
     * @remarks
     * Returns the requested investment product
     */
    getInvestmentProduct(req: operations.GetInvestmentProductRequest, security: operations.GetInvestmentProductSecurity, config?: AxiosRequestConfig): Promise<operations.GetInvestmentProductResponse>;
    /**
     * Get Current Price of an Investment Product
     *
     * @remarks
     * Returns current price of the requested investment product
     */
    getInvestmentProductPrice(req: operations.GetInvestmentProductPriceRequest, security: operations.GetInvestmentProductPriceSecurity, config?: AxiosRequestConfig): Promise<operations.GetInvestmentProductPriceResponse>;
}
