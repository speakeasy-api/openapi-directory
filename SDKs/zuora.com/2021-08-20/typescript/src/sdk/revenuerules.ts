import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class RevenueRules {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getRevenueAutomationStartDate - Retrieve a revenue automation start date
   *
   * Describes how to get the revenue automation start date. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRevenueAutomationStartDate(
    req: operations.GetRevenueAutomationStartDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRevenueAutomationStartDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRevenueAutomationStartDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/settings/finance/revenue-automation-start-date";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRevenueAutomationStartDateResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRevenueStartDateSettingType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRevenueRecRulebyProductRatePlanCharge - Retrieve a revenue recognition rule by product rate plan charge ID
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
   * 
   * Retrieves the revenue recognition rule associated with a production rate plan charge by specifying the charge ID.
   * 
  **/
  getRevenueRecRulebyProductRatePlanCharge(
    req: operations.GetRevenueRecRulebyProductRatePlanChargeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRevenueRecRulebyProductRatePlanChargeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRevenueRecRulebyProductRatePlanChargeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-recognition-rules/product-charges/{charge-key}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRevenueRecRulebyProductRatePlanChargeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRevenueRecognitionRuleAssociationType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRevenueRecRules - Retrieve a revenue recognition rule by subscription charge ID
   *
   * Retrieves the revenue recognition rule associated with a subscription charge by specifying the charge ID. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRevenueRecRules(
    req: operations.GetRevenueRecRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRevenueRecRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRevenueRecRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-recognition-rules/subscription-charges/{charge-key}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRevenueRecRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRevenueRecognitionRuleAssociationType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
