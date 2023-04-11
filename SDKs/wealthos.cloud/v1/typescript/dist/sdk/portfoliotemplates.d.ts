import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A portfolio template captures how an investor’s cash (once transferred to a pot) should be automatically invested by the system. A portfolio template consists of a set of investment products and the ratios in which these products must be bought, once cleared cash is available to invest.
 *
 * @remarks
 *
 * For example, a portfolio template ‘PT1’ has the following template
 *
 * Investment Product | Ratio
 * -------------------|-------
 * Investment Product A | 20%
 * Investment Product B | 30%
 * Investment Product C | 50%
 *
 * If GBP 100 is transferred to a pot linked to Portfolio template PT1, the following buy orders will be triggered
 *
 * * BUY Investment Product A for GBP 20
 * * BUY Investment Product B for GBP 30
 * * BUY Investment Product C for GBP 50
 *
 * ### Portfolio Creation
 *
 * Portfolio Templates can be created by the Wealth Manger (generic set of portfolio templates created in WealthOS and a single template will be assigned to an Investor’s pot based on suitability - e.g. robo advisory)
 *
 * <!-- If a Portfolio template is created by an investor then the request must have `owner : "investor"` and `investor_id` populated with the relevant investor ID.  -->
 *
 * The ratios of investment products within a portfolio template must add up to a 100% - if this is not the case, the system will reject the portfolio creation or update.
 *
 * Once cleared cash is available in a pot, the system can be instructed to trigger investment product buy requests based on the portfolio template linked to the pot.
 *
 *
 */
export declare class PortfolioTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new Portfolio Template
     */
    createPortfolioTemplate(req: operations.CreatePortfolioTemplateRequest, security: operations.CreatePortfolioTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePortfolioTemplateResponse>;
    /**
     * Get all the Portfolio templates
     *
     * @remarks
     * Get all the portfolio templates
     */
    getAllPortfolioTemplates(req: operations.GetAllPortfolioTemplatesRequest, security: operations.GetAllPortfolioTemplatesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllPortfolioTemplatesResponse>;
    /**
     * Retrive existing Portfolio template
     */
    getPortfolioTemplate(req: operations.GetPortfolioTemplateRequest, security: operations.GetPortfolioTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.GetPortfolioTemplateResponse>;
    /**
     * Update existing Portfolio template
     */
    updatePortfolioTemplate(req: operations.UpdatePortfolioTemplateRequest, security: operations.UpdatePortfolioTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePortfolioTemplateResponse>;
}
