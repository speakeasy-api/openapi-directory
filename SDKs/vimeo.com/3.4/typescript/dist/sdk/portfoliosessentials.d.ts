import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfoliosEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific portfolio
     */
    getPortfolio(req: operations.GetPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioResponse>;
    /**
     * Get a specific portfolio
     */
    getPortfolioAlt1(req: operations.GetPortfolioAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPortfolioAlt1Response>;
    /**
     * Get all the portfolios that belong to a user
     */
    getPortfolios(req: operations.GetPortfoliosRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfoliosResponse>;
    /**
     * Get all the portfolios that belong to a user
     */
    getPortfoliosAlt1(req: operations.GetPortfoliosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPortfoliosAlt1Response>;
}
