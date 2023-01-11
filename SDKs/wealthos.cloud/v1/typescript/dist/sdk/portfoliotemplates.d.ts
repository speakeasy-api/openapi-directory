import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortfolioTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPortfolioTemplate - Create new Portfolio Template
    **/
    createPortfolioTemplate(req: operations.CreatePortfolioTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreatePortfolioTemplateResponse>;
    /**
     * getAllPortfolioTemplates - Get all the Portfolio templates
     *
     * Get all the portfolio templates
    **/
    getAllPortfolioTemplates(req: operations.GetAllPortfolioTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPortfolioTemplatesResponse>;
    /**
     * getPortfolioTemplate - Retrive existing Portfolio template
    **/
    getPortfolioTemplate(req: operations.GetPortfolioTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioTemplateResponse>;
    /**
     * updatePortfolioTemplate - Update existing Portfolio template
    **/
    updatePortfolioTemplate(req: operations.UpdatePortfolioTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePortfolioTemplateResponse>;
}
