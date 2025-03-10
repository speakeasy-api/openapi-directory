/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
export class PortfolioTemplates {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Create new Portfolio Template
   */
  createPortfolioTemplate(
    req: operations.CreatePortfolioTemplateRequest,
    security: operations.CreatePortfolioTemplateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePortfolioTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePortfolioTemplateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/tenant/portfolio-templates/v1/";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.CreatePortfolioTemplateSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = {
      ...utils.getHeadersFromRequest(req),
      ...reqBodyHeaders,
      ...config?.headers,
    };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreatePortfolioTemplateResponse =
        new operations.CreatePortfolioTemplateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate201ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate201ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate400ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate400ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate401ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate403ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate403ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate404ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate404ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 429:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate429ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate429ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPortfolioTemplate500ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.CreatePortfolioTemplate500ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get all the Portfolio templates
   *
   * @remarks
   * Get all the portfolio templates
   */
  getAllPortfolioTemplates(
    req: operations.GetAllPortfolioTemplatesRequest,
    security: operations.GetAllPortfolioTemplatesSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllPortfolioTemplatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllPortfolioTemplatesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/tenant/portfolio-templates/v1/";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetAllPortfolioTemplatesSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetAllPortfolioTemplatesResponse =
        new operations.GetAllPortfolioTemplatesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllPortfolioTemplates200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetAllPortfolioTemplates200ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllPortfolioTemplates401ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetAllPortfolioTemplates401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllPortfolioTemplates403ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetAllPortfolioTemplates403ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllPortfolioTemplates404ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetAllPortfolioTemplates404ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 429:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllPortfolioTemplates429ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetAllPortfolioTemplates429ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllPortfolioTemplates500ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetAllPortfolioTemplates500ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrive existing Portfolio template
   */
  getPortfolioTemplate(
    req: operations.GetPortfolioTemplateRequest,
    security: operations.GetPortfolioTemplateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortfolioTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortfolioTemplateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/tenant/portfolio-templates/v1/{portfolio_template_id}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetPortfolioTemplateSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetPortfolioTemplateResponse =
        new operations.GetPortfolioTemplateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPortfolioTemplate200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetPortfolioTemplate200ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPortfolioTemplate401ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetPortfolioTemplate401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPortfolioTemplate403ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetPortfolioTemplate403ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPortfolioTemplate404ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetPortfolioTemplate404ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 429:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPortfolioTemplate429ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetPortfolioTemplate429ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPortfolioTemplate500ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetPortfolioTemplate500ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update existing Portfolio template
   */
  updatePortfolioTemplate(
    req: operations.UpdatePortfolioTemplateRequest,
    security: operations.UpdatePortfolioTemplateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePortfolioTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePortfolioTemplateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/tenant/portfolio-templates/v1/{portfolio_template_id}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UpdatePortfolioTemplateSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = {
      ...utils.getHeadersFromRequest(req),
      ...reqBodyHeaders,
      ...config?.headers,
    };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdatePortfolioTemplateResponse =
        new operations.UpdatePortfolioTemplateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate200ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate400ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate400ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate401ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 403:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate403ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate403ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate404ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate404ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 409:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate409ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate409ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 429:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate429ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate429ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePortfolioTemplate500ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdatePortfolioTemplate500ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
