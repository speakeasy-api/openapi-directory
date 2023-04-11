import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RevenueRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a revenue automation start date
     *
     * @remarks
     * Describes how to get the revenue automation start date. Request and response field descriptions and sample code are provided.
     *
     */
    getRevenueAutomationStartDate(req: operations.GETRevenueAutomationStartDateRequest, config?: AxiosRequestConfig): Promise<operations.GETRevenueAutomationStartDateResponse>;
    /**
     * Retrieve a revenue recognition rule by product rate plan charge ID
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the revenue recognition rule associated with a production rate plan charge by specifying the charge ID.
     *
     */
    getRevenueRecRulebyProductRatePlanCharge(req: operations.GETRevenueRecRulebyProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.GETRevenueRecRulebyProductRatePlanChargeResponse>;
    /**
     * Retrieve a revenue recognition rule by subscription charge ID
     *
     * @remarks
     * Retrieves the revenue recognition rule associated with a subscription charge by specifying the charge ID. Request and response field descriptions and sample code are provided.
     *
     */
    getRevenueRecRules(req: operations.GETRevenueRecRulesRequest, config?: AxiosRequestConfig): Promise<operations.GETRevenueRecRulesResponse>;
}
