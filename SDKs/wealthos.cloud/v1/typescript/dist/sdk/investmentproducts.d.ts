import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvestmentProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConfiguredInvestmentProductPrices - Get Current Prices of all Investment Products
     *
     * Returns current prices of all the investment products configured for this tenancy
    **/
    getConfiguredInvestmentProductPrices(req: operations.GetConfiguredInvestmentProductPricesRequest, config?: AxiosRequestConfig): Promise<operations.GetConfiguredInvestmentProductPricesResponse>;
    /**
     * getConfiguredInvestmentProducts - Get Configured Investment Products
     *
     * Returns all the investment products configured for this tenancy. Request can be filtered by status to return all `active` or `inactive` investment products
    **/
    getConfiguredInvestmentProducts(req: operations.GetConfiguredInvestmentProductsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfiguredInvestmentProductsResponse>;
    /**
     * getInvestmentProduct - Get details of a given Investment Product
     *
     * Returns the requested investment product
    **/
    getInvestmentProduct(req: operations.GetInvestmentProductRequest, config?: AxiosRequestConfig): Promise<operations.GetInvestmentProductResponse>;
    /**
     * getInvestmentProductPrice - Get Current Price of an Investment Product
     *
     * Returns current price of the requested investment product
    **/
    getInvestmentProductPrice(req: operations.GetInvestmentProductPriceRequest, config?: AxiosRequestConfig): Promise<operations.GetInvestmentProductPriceResponse>;
}
